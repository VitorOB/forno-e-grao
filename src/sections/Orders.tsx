import { Cake, Coffee, PartyPopper } from "lucide-react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { WhatsappIcon } from "../components/BrandIcons";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { whatsappLink } from "../lib/format";
import { IMAGE_SIZES } from "../lib/images";
import { useSite } from "../i18n/lang";

const icons = { coffee: Coffee, cake: Cake, party: PartyPopper };

/**
 * Encomendas em fundo escuro (cacau).
 * Contraste: creme no cacau 13,5:1 · areia no cacau 8,6:1 · branco no terracota 5,8:1 · cacau no creme 13,5:1.
 */
export function Orders() {
  const { contact, orders } = useSite().site;
  return (
    <section id="encomendas" aria-labelledby="encomendas-title" className="on-dark bg-cacau py-16 text-creme sm:py-24">
      <Container>
        <div data-reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <SectionTitle
              id="encomendas-title"
              eyebrow={orders.eyebrow}
              title={orders.title}
              intro={orders.intro}
              tone="dark"
            />
            <ResponsiveImage
              image={orders.image}
              sizes={IMAGE_SIZES.orders}
              className="aspect-16/10 w-full rounded-4xl object-cover"
            />
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {orders.occasions.map((o) => {
              const Icon = icons[o.icon];
              return (
                <li key={o.title} className="rounded-2xl border border-creme/15 bg-creme/4 p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-terracota text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">{o.title}</h3>
                  <p className="mt-2 text-areia">{o.text}</p>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-terracota p-6 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-3xl font-semibold sm:text-4xl">{orders.cta.title}</p>
              <p className="mt-2 text-lg">{orders.cta.text}</p>
            </div>
            <Button
              href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
              variant="light"
              external
              icon={<WhatsappIcon className="size-6" />}
              className="w-full shrink-0 text-lg md:w-auto md:px-8 md:py-4"
            >
              {orders.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
