/** "06:30" → "6h30" · "09:00" → "9h" */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

/**
 * Link do WhatsApp. Sem número, usa https://wa.me/?text=… para a pessoa escolher o contato.
 * Nunca inventa um número.
 */
export function whatsappLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
