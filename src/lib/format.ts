import type { Lang } from "../data/ui";

/** "06:30" → "6h30" · "09:00" → "9h" */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

/** "20:00" → "8 pm" · "06:30" → "6:30 am" */
function formatTime12(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h < 12 ? "am" : "pm";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/** Faixa de horário no formato do idioma: "6h às 20h" · "6 am – 8 pm". */
export function formatHours(opens: string, closes: string, lang: Lang): string {
  return lang === "pt"
    ? `${formatTime(opens)} às ${formatTime(closes)}`
    : `${formatTime12(opens)} – ${formatTime12(closes)}`;
}

/**
 * Link do WhatsApp. Sem número, usa https://wa.me/?text=… para a pessoa escolher o contato.
 * Nunca inventa um número.
 */
export function whatsappLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
