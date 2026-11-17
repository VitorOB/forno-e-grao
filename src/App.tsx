import { useEffect } from "react";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Products } from "./sections/Products";
import { Story } from "./sections/Story";
import { Orders } from "./sections/Orders";
import { Location } from "./sections/Location";
import { Footer } from "./sections/Footer";
import { useSite } from "./i18n/lang";

/** Uma entrada sutil por seção (elementos com data-reveal). O CSS ignora isso com prefers-reduced-motion. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  const { t } = useSite();
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-cacau px-5 py-3 font-medium text-creme focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.skipLink}
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Products />
        <Story />
        <Orders />
        <Location />
      </main>
      <Footer />
    </>
  );
}
