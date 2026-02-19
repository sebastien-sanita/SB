/**
 * TextRibbon — Ruban de texte défilant comme séparateur entre sections
 * Utilise le @keyframes marquee global (animations.css) — léger, pas de JS runtime
 */

interface Props {
  text: string;
  direction?: 'left' | 'right';
  speed?: number; // seconds for one full cycle
  className?: string;
}

export default function TextRibbon({
  text,
  direction = 'left',
  speed = 30,
  className = '',
}: Props) {
  const content = `${text}  ◆  `;
  // Repeat enough times to fill wide screens
  const repeated = content.repeat(12);

  const animStyle = {
    animation: `marquee ${speed}s linear infinite`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
  } as React.CSSProperties;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-dark/20"
        style={animStyle}
      >
        <span className="shrink-0">{repeated}</span>
        <span className="shrink-0">{repeated}</span>
      </div>
    </div>
  );
}
