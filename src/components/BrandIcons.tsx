/**
 * Ícones de marca (o Lucide não inclui logotipos de redes sociais).
 * Traço simples no mesmo estilo dos ícones Lucide.
 */
type Props = { className?: string };

export function InstagramIcon({ className = "size-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function WhatsappIcon({ className = "size-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3.5 20.5l1.3-4.2A8.6 8.6 0 1 1 8 19.4z" />
      <path d="M9 8.6c0 3.4 3 6.4 6.4 6.4l1.1-1.6-2-1-1 .9c-1.2-.5-2.3-1.6-2.8-2.8l.9-1-1-2z" strokeWidth="1.5" />
    </svg>
  );
}
