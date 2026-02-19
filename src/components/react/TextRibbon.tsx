/**
 * TextRibbon — Ruban de texte défilant comme séparateur entre sections
 * Défile en continu via CSS animation (léger, pas de JS)
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
    animationDuration: `${speed}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
  } as React.CSSProperties;

  return (
    <div className={`overflow-hidden py-2 ${className}`}>
      <div
        className="flex whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-dark/15 animate-ribbon"
        style={animStyle}
      >
        <span className="shrink-0">{repeated}</span>
        <span className="shrink-0">{repeated}</span>
      </div>
    </div>
  );
}
