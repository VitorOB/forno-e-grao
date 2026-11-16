type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark" | "bege";
  align?: "left" | "center";
};

/** Título de seção (h2) com sobretítulo e introdução opcionais. */
export function SectionTitle({ id, eyebrow, title, intro, tone = "light", align = "left" }: Props) {
  const eyebrowColor = {
    light: "text-terracota", // 5,2:1 no creme
    bege: "text-cacau-suave", // terracota no bege fica em 4,2:1, abaixo do AA
    dark: "text-areia",
  }[tone];
  const introColor = tone === "dark" ? "text-areia" : "text-cacau-suave";
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className={`text-sm font-bold tracking-[0.14em] uppercase ${eyebrowColor}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${introColor}`}>{intro}</p>}
    </div>
  );
}
