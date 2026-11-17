import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../components/Container";
import { LanguageSwitch } from "../components/LanguageSwitch";
import { useSite } from "../i18n/lang";

export function Header() {
  const { site, t } = useSite();
  const { brand, nav } = site;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Ao abrir: foco no primeiro link. Esc fecha e devolve o foco ao botão.
  // Tab circula entre o botão e os links enquanto o menu está aberto.
  useEffect(() => {
    if (!open) return;
    const links = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a") ?? []);
    links()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = [toggleRef.current, ...links()].filter(Boolean) as HTMLElement[];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // Fecha se a tela crescer até o layout de desktop
    const mq = window.matchMedia("(min-width: 64rem)");
    const onResize = () => mq.matches && close(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open, close]);

  const linkClass =
    "inline-flex min-h-11 items-center rounded-md px-3 font-medium text-cacau underline-offset-4 hover:text-terracota hover:underline";

  return (
    <header className="sticky top-0 z-40 border-b border-cacau/10 bg-creme/95 backdrop-blur supports-[backdrop-filter]:bg-creme/85">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex min-h-11 items-center gap-2 rounded-md font-display text-xl font-semibold sm:text-2xl">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-terracota text-sm text-creme">
            F&amp;G
          </span>
          <span>{brand.name}</span>
        </a>

        <nav aria-label={t.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <a
            href="#encomendas"
            className="hidden min-h-11 items-center rounded-full bg-terracota px-5 font-medium text-white transition-colors hover:bg-cacau sm:inline-flex"
          >
            {t.orderCta}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-cacau/80 text-cacau lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => (open ? close(false) : setOpen(true))}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
          </button>
        </div>
      </Container>

      <div
        id="menu-mobile"
        ref={menuRef}
        hidden={!open}
        className="border-t border-cacau/10 bg-creme shadow-suave lg:hidden"
      >
        <nav aria-label={t.mobileNav}>
          <Container>
            <ul className="flex flex-col py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => close(false)}
                    className="flex min-h-12 items-center rounded-md px-2 text-lg font-medium hover:text-terracota"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-2 sm:hidden">
                <a
                  href="#encomendas"
                  onClick={() => close(false)}
                  className="flex min-h-12 items-center justify-center rounded-full bg-terracota px-5 font-medium text-white"
                >
                  {t.orderCta}
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
    </header>
  );
}
