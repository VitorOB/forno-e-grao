import { useSite } from "../i18n/lang";

/** Botão PT/EN: mostra o idioma de destino. */
export function LanguageSwitch() {
  const { t, setLang } = useSite();
  const { short, label, target } = t.langSwitch;
  return (
    <button
      type="button"
      onClick={() => setLang(target)}
      className="inline-flex size-11 items-center justify-center rounded-full border-2 border-cacau/80 text-sm font-bold tracking-[0.04em] text-cacau transition-colors duration-200 hover:bg-cacau hover:text-creme"
    >
      <span lang={target === "en" ? "en" : "pt-BR"}>
        {short}
        <span className="sr-only"> — {label}</span>
      </span>
    </button>
  );
}
