/**
 * Contact form — handles submit, tracking-field injection, SHA-256 PII hashing.
 *
 * Pairs with <TrackingFields /> (hidden inputs pre-declared in HTML so Netlify
 * detects them at build time) and the tracking-capture inline script in Layout.astro
 * (which writes to localStorage `sbd_tracking` on every page view).
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const STORAGE_KEY = 'sbd_tracking';

const URL_PARAMS = [
  'gclid', 'gbraid', 'wbraid', 'dclid',
  'fbclid', 'msclkid', 'ttclid', 'li_fat_id', 'twclid',
  'epik', 'irclickid', 'yclid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
] as const;

function getCookie(name: string): string {
  const escaped = name.replace(/[.$?*|{}()[\]\\/+^]/g, '\\$&');
  const m = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}

function getGaClientId(): string {
  // _ga cookie format: GA1.2.<part1>.<part2> — client_id = part1.part2
  const ga = getCookie('_ga');
  if (!ga) return '';
  const parts = ga.split('.');
  return parts.length >= 4 ? parts[2] + '.' + parts[3] : '';
}

function getGaSessionId(): string {
  // _ga_<MEASUREMENT_ID> cookie format: GS1.1.<session_id>.<n>.<...>
  for (const c of document.cookie.split(';')) {
    const trimmed = c.trim();
    if (trimmed.startsWith('_ga_') && trimmed.includes('=')) {
      const val = trimmed.split('=')[1];
      const parts = val.split('.');
      if (parts.length >= 3) return parts[2];
    }
  }
  return '';
}

function readStored(): Record<string, unknown> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function normalizeEmail(s: string): string {
  return s.trim().toLowerCase();
}

function normalizePhoneE164(s: string, defaultCountry = '33'): string {
  let digits = s.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.length === 10 && digits.startsWith('0')) digits = defaultCountry + digits.slice(1);
  else if (digits.length === 9 && !digits.startsWith(defaultCountry)) digits = defaultCountry + digits;
  return '+' + digits;
}

async function sha256Hex(input: string): Promise<string> {
  if (!input) return '';
  const buf = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function setHidden(form: HTMLFormElement, name: string, value: string): void {
  const input = form.querySelector<HTMLInputElement>(`input[name="${CSS.escape(name)}"]`);
  if (input) input.value = value || '';
}

function fillTrackingFields(form: HTMLFormElement): void {
  const t = readStored() as Record<string, string | number>;

  for (const k of URL_PARAMS) {
    setHidden(form, k, String(t[k] ?? ''));
    setHidden(form, 'first_' + k, String(t['first_' + k] ?? ''));
    setHidden(form, 'last_' + k, String(t['last_' + k] ?? ''));
  }

  setHidden(form, 'landing_page', String(t.landing_page ?? ''));
  setHidden(form, 'page_referrer', String(t.page_referrer ?? ''));
  setHidden(form, 'first_seen_at', t.first_seen_at ? new Date(Number(t.first_seen_at)).toISOString() : '');
  setHidden(form, 'last_seen_at', t.last_seen_at ? new Date(Number(t.last_seen_at)).toISOString() : '');
  setHidden(form, 'session_count', String(t.session_count ?? ''));
  setHidden(form, 'page_views_count', String(t.page_views_count ?? ''));

  setHidden(form, 'current_url', location.href);
  setHidden(form, 'user_agent', navigator.userAgent);
  setHidden(form, 'submitted_at', new Date().toISOString());

  setHidden(form, 'ga_client_id', getGaClientId());
  setHidden(form, 'ga_session_id', getGaSessionId());
  setHidden(form, 'fbp', getCookie('_fbp'));
  setHidden(form, 'fbc', getCookie('_fbc'));
  setHidden(form, 'gcl_aw', getCookie('_gcl_aw'));
  setHidden(form, 'gcl_dc', getCookie('_gcl_dc'));
}

async function hashAndInjectPII(form: HTMLFormElement): Promise<{
  email_sha256: string;
  phone_sha256: string;
}> {
  const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value ?? '';
  const phone = (form.elements.namedItem('phone') as HTMLInputElement | null)?.value ?? '';

  const [email_sha256, phone_sha256] = await Promise.all([
    sha256Hex(normalizeEmail(email)),
    sha256Hex(normalizePhoneE164(phone)),
  ]);

  setHidden(form, 'email_sha256', email_sha256);
  setHidden(form, 'phone_sha256', phone_sha256);

  return { email_sha256, phone_sha256 };
}

function pushDL(payload: Record<string, unknown>): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function init(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form) return;

  const successEl = document.getElementById('form-success');
  const errorEl = document.getElementById('form-error');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  // Pre-fill tracking fields immediately
  fillTrackingFields(form);

  // form_view event when form enters viewport
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            pushDL({ event: 'form_view', form_id: 'contact' });
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(form);
  }

  // form_start on first user interaction with any field
  let started = false;
  const onStart = (): void => {
    if (started) return;
    started = true;
    pushDL({ event: 'form_start', form_id: 'contact' });
  };
  form.addEventListener('focusin', onStart, { once: false });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl?.classList.add('hidden');
    if (submitBtn) submitBtn.disabled = true;

    try {
      // Refresh tracking fields in case cookies/storage changed since page load
      fillTrackingFields(form);
      const piiHashes = await hashAndInjectPII(form);

      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        form.classList.add('hidden');
        successEl?.classList.remove('hidden');
        pushDL({
          event: 'generate_lead',
          form_id: 'contact',
          lang: (form.elements.namedItem('lang') as HTMLInputElement | null)?.value ?? '',
          email_sha256: piiHashes.email_sha256,
          phone_sha256: piiHashes.phone_sha256,
        });
      } else {
        console.error('Form submission failed', res.status, res.statusText);
        errorEl?.classList.remove('hidden');
        if (submitBtn) submitBtn.disabled = false;
      }
    } catch (err) {
      console.error('Form submission error', err);
      errorEl?.classList.remove('hidden');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export {};
