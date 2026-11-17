import { MapPin } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { formatHours } from "../lib/format";
import { useSite } from "../i18n/lang";

export function Location() {
  const { lang, site, t } = useSite();
  const { location, openingHours } = site;
  const { address } = location;
  return (
    <section id="onde-estamos" aria-labelledby="onde-estamos-title" className="bg-bege py-16 sm:py-24">
      <Container>
        <div data-reveal className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle id="onde-estamos-title" eyebrow={location.eyebrow} title={location.title} tone="bege" />

            <address className="mt-8 flex gap-3 text-lg not-italic">
              <MapPin aria-hidden="true" className="mt-1 size-6 shrink-0" />
              <span>
                {address.street}
                <br />
                {address.district} · {address.city} – {address.state}
                <br />
                {t.postalCode} {address.postalCode}
                {location.isDemo && (
                  <span className="mt-2 block w-fit rounded-full border border-cacau/40 px-3 py-0.5 text-sm font-medium">
                    {t.demoAddress}
                  </span>
                )}
              </span>
            </address>

            <table className="mt-10 w-full max-w-md border-collapse text-left">
              <caption className="mb-3 text-left font-display text-2xl font-semibold">{t.openingHours}</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">{t.day}</th>
                  <th scope="col">{t.time}</th>
                </tr>
              </thead>
              <tbody>
                {openingHours.map((h) => (
                  <tr key={h.label} className="border-b border-cacau/20 last:border-b-0">
                    <th scope="row" className="py-3 pr-4 font-medium">
                      {h.label}
                    </th>
                    <td className="py-3 text-right tabular-nums">
                      {formatHours(h.opens, h.closes, lang)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Espaço reservado para o mapa do cliente (sem embed nesta demonstração) */}
          <div className="relative flex min-h-96 items-end overflow-hidden rounded-4xl border-2 border-dashed border-terracota-deco/70 bg-creme p-6 sm:p-8">
            <svg
              aria-hidden="true"
              className="absolute inset-0 size-full text-cacau/10"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              stroke="currentColor"
            >
              <path d="M-10 80 L410 40 M-10 190 L410 170 M-10 260 L410 290" strokeWidth="14" />
              <path d="M90 -10 L120 310 M250 -10 L230 310 M340 -10 L370 310" strokeWidth="10" />
              <path d="M-10 130 Q200 110 410 120" strokeWidth="6" />
            </svg>
            <div aria-hidden="true" className="absolute top-[30%] left-[56%] sm:top-[38%] -translate-x-1/2 -translate-y-full">
              <MapPin className="size-12 fill-terracota text-creme drop-shadow" strokeWidth={1.5} />
            </div>
            <p className="relative max-w-sm rounded-2xl bg-creme/95 p-4 text-cacau-suave shadow-suave">
              <strong className="block font-semibold text-cacau">{t.map}</strong>
              {location.mapNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
