import { Coffee, Sprout, Wheat } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { IMAGE_SIZES } from "../lib/images";
import { useSite } from "../i18n/lang";

const icons = { sprout: Sprout, wheat: Wheat, coffee: Coffee };

export function Story() {
  const { story } = useSite().site;
  return (
    <section id="historia" aria-labelledby="historia-title" className="bg-bege py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-last lg:order-first">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-4xl border-2 border-terracota-deco/50 sm:block"
              />
              <ResponsiveImage
                image={story.image}
                sizes={IMAGE_SIZES.story}
                className="relative aspect-4/5 w-full rounded-4xl object-cover shadow-suave sm:aspect-4/3 lg:aspect-4/5"
              />
            </div>

            <div>
              <SectionTitle id="historia-title" eyebrow={story.eyebrow} title={story.title} tone="bege" />
              <div className="mt-6 space-y-4 text-lg">
                {story.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-20">
            {story.features.map((f) => {
              const Icon = icons[f.icon];
              return (
                <li key={f.title} className="rounded-2xl bg-creme p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-terracota text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-cacau-suave">{f.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
