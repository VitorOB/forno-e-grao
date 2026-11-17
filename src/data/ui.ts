/** Textos fixos da interface (fora de site.ts), em português e inglês. */

export type Lang = "pt" | "en";

const pt = {
  skipLink: "Pular para o conteúdo",
  mainNav: "Principal",
  mobileNav: "Menu móvel",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  orderCta: "Fazer encomenda",
  newTab: "(abre em nova aba)",
  socials: "Redes sociais",
  demo: "demonstrativo",
  footerNav: "Rodapé",
  browse: "Navegue",
  hours: "Horários",
  fictional: "Marca e endereço fictícios.",
  demoSite: "Site demonstrativo",
  createdBy: "criado por",
  wantSite: "— quer um site assim para o seu negócio?",
  talkToMe: "Fale comigo",
  viaWhatsApp: "pelo WhatsApp (abre em nova aba)",
  demoAddress: "Endereço demonstrativo",
  openingHours: "Horário de funcionamento",
  day: "Dia",
  time: "Horário",
  map: "Mapa",
  postalCode: "CEP",
  /** Botão de idioma: mostra o idioma de destino. */
  langSwitch: { short: "EN", label: "View in English", target: "en" as Lang },
};

const en: typeof pt = {
  skipLink: "Skip to content",
  mainNav: "Main",
  mobileNav: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  orderCta: "Place an order",
  newTab: "(opens in a new tab)",
  socials: "Social media",
  demo: "demo",
  footerNav: "Footer",
  browse: "Browse",
  hours: "Hours",
  fictional: "Fictional brand and address.",
  demoSite: "Demo website",
  createdBy: "created by",
  wantSite: "— want a website like this for your business?",
  talkToMe: "Talk to me",
  viaWhatsApp: "on WhatsApp (opens in a new tab)",
  demoAddress: "Demo address",
  openingHours: "Opening hours",
  day: "Day",
  time: "Hours",
  map: "Map",
  postalCode: "Postal code",
  langSwitch: { short: "PT", label: "Ver em português", target: "pt" },
};

export const ui = { pt, en };
export type UiText = typeof pt;
