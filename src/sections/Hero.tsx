import { ArrowRight } from "lucide-react";
import { contact, hero } from "../data/site";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { WhatsappIcon } from "../components/BrandIcons";
import { whatsappLink } from "../lib/format";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="overflow-hidden pt-8 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-terracota uppercase">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-[2.5rem] font-semibold sm:text-6xl lg:text-[4.25rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cacau-suave sm:text-xl">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryCta.href} icon={<ArrowRight aria-hidden="true" className="size-5" />}>
              {hero.primaryCta.label}
            </Button>
            <Button
              href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
              variant="secondary"
              external
              icon={<WhatsappIcon />}
            >
              {hero.secondaryCtaLabel}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 hidden h-full w-full rounded-4xl border-2 border-terracota-deco/60 sm:block"
          />
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-4/3 w-full rounded-4xl object-cover shadow-suave"
          />
        </div>
      </Container>
    </section>
  );
}
