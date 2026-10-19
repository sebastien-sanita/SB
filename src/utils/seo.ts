/**
 * Helpers SEO — données structurées propres aux pages (passées au Layout via la prop `schema`).
 */

export interface FaqItem {
  q: string;
  a: string;
}

/** Schema.org FAQPage à partir d'une liste de questions/réponses (texte brut, sans HTML). */
export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
