import type { MouseEvent } from "react";
import { Container } from "../components/Container";
import { InstagramIcon, WhatsappIcon } from "../components/BrandIcons";
import { formatHours, whatsappLink } from "../lib/format";
import { useSite } from "../i18n/lang";

const socialIcons = { instagram: InstagramIcon, whatsapp: WhatsappIcon };

// Links demonstrativos não navegam
const preventDemo = (e: MouseEvent) => e.preventDefault();

export function Footer() {
  const { lang, site, t } = useSite();
  const { brand, contact, nav, openingHours, socials } = site;
  const year = new Date().getFullYear();
  const creatorLink = whatsappLink(contact.creatorWhatsapp, contact.creatorMessage);

  return (
    <footer className="on-dark bg-cacau text-creme">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">{brand.name}</p>
          <p className="mt-1 text-areia">{brand.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label={t.socials}>
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              const isDemo = !s.url;
              return (
                <li key={s.name}>
                  {/* Briefing: rede sem URL usa href="#" + aria-disabled + etiqueta "demonstrativo" e não navega. */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href={isDemo ? "#" : s.url}
                    {...(isDemo
                      ? { "aria-disabled": true, onClick: preventDemo }
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-creme/30 px-4 text-sm ${
                      isDemo ? "cursor-not-allowed" : "hover:bg-creme hover:text-cacau"
                    }`}
                  >
                    <Icon />
                    <span>
                      {s.name}
                      {isDemo && <span className="text-areia"> · {t.demo}</span>}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label={t.footerNav}>
          <h2 className="font-display text-lg font-semibold">{t.browse}</h2>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-areia hover:text-creme hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-semibold">{t.hours}</h2>
          <dl className="mt-3 space-y-2 text-areia">
            {openingHours.map((h) => (
              <div key={h.label}>
                <dt className="font-medium text-creme">{h.label}</dt>
                <dd>
                  {formatHours(h.opens, h.closes, lang)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-creme/15">
        <Container className="flex flex-col gap-3 py-6 text-sm text-areia md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {brand.name}. {t.fictional}
          </p>
          <p>
            {t.demoSite}
            {contact.creatorName && (
              <>
                {" "}
                {t.createdBy} {contact.creatorName}
              </>
            )}{" "}
            {t.wantSite}{" "}
            <a
              href={creatorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-creme underline underline-offset-4 hover:no-underline md:min-h-0"
            >
              {t.talkToMe}
              <span className="sr-only"> {t.viaWhatsApp}</span>
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
