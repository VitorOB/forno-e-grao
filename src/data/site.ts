/**
 * TODOS os dados editáveis do site ficam aqui.
 * Para adaptar a outro cliente, troque os valores deste arquivo e as fotos em public/images/.
 * O README explica cada bloco.
 */

/* ------------------------------------------------------------------ */
/* Contato — preencher antes de publicar                               */
/* ------------------------------------------------------------------ */
export const contact = {
  whatsappNumber: "", // formato 5531999999999 — preencher antes de publicar
  whatsappMessage: "Olá! Vi o site da Forno & Grão e gostaria de fazer uma encomenda.",
  creatorName: "",
  creatorWhatsapp: "", // formato 5531999999999 — WhatsApp de quem criou o site
  creatorMessage: "Olá! Vi o site demonstrativo da Forno & Grão e quero um site assim para o meu negócio.",
};

/* ------------------------------------------------------------------ */
/* Marca e SEO                                                         */
/* ------------------------------------------------------------------ */
export const brand = {
  name: "Forno & Grão",
  tagline: "Padaria Artesanal",
  /** URL final do site, sem barra no fim (ex.: https://fornoegrao.com.br). Usada no og:image e no JSON-LD. */
  siteUrl: "https://forno-e-grao.vercel.app/",
  seo: {
    title: "Forno & Grão — Padaria Artesanal | Fermentação natural e café especial",
    description:
      "Padaria artesanal de bairro com pão de fermentação natural, croissant, pão de queijo, bolos e café especial. Encomendas para café da manhã, aniversários e eventos pelo WhatsApp.",
  },
};

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */
export const nav = [
  { label: "Produtos", href: "#produtos" },
  { label: "Nossa história", href: "#historia" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Onde estamos", href: "#onde-estamos" },
];

/* ------------------------------------------------------------------ */
/* Imagens                                                             */
/* `name` é o nome-base: o site usa public/images/<name>-800.webp e     */
/* <name>-1600.webp (gerados por scripts/optimize-images.mjs).          */
/* width/height são os da versão de 1600px e definem a proporção.       */
/* ------------------------------------------------------------------ */
export type SiteImage = { name: string; alt: string; width: number; height: number };

const img = (name: string, alt: string, width = 1600, height = 1068): SiteImage => ({
  name,
  alt,
  width,
  height,
});

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Padaria artesanal de bairro",
  title: "Pão com casca que estala e café para acompanhar.",
  subtitle: "Massas de fermentação natural, doces de vitrine e café especial, preparados aqui mesmo, perto da sua casa.",
  primaryCta: { label: "Ver produtos", href: "#produtos" },
  secondaryCtaLabel: "Encomendar pelo WhatsApp",
  image: img(
    "hero",
    "Pães de fermentação natural com casca dourada e cortes rústicos, cercados de pãezinhos redondos enfarinhados.",
  ),
};

/* ------------------------------------------------------------------ */
/* Produtos                                                            */
/* ------------------------------------------------------------------ */
export type Product = { name: string; description: string; image: SiteImage };

export const productsSection = {
  eyebrow: "No balcão",
  title: "O que sai do nosso forno",
  intro: "Uma amostra do que você encontra na vitrine. Passe na loja para ver tudo.",
};

export const products: Product[] = [
  {
    name: "Pão de fermentação natural",
    description: "Fermentação lenta, miolo úmido e levemente ácido, casca grossa e bem caramelizada.",
    image: img(
      "pao-fermentacao",
      "Pão de fermentação natural redondo, enfarinhado e com cortes em forma de folha, sobre uma tábua de madeira rústica.",
    ),
  },
  {
    name: "Croissant de manteiga",
    description: "Massa folhada com manteiga, camadas que se desfazem por fora e miolo macio.",
    image: img("croissant", "Croissant dourado com camadas folhadas aparentes sobre uma tábua de madeira clara."),
  },
  {
    name: "Pão de queijo",
    description: "Queijo curado na massa, casquinha crocante e interior elástico.",
    image: img("pao-de-queijo", "Pães de queijo dourados empilhados em uma cesta de vime, com um pegador de inox."),
  },
  {
    name: "Cappuccino",
    description: "Espresso encorpado, leite vaporizado e espuma cremosa por cima.",
    image: img("cappuccino", "Xícara branca de cappuccino com desenho de coração na espuma do leite, sobre um pires."),
  },
  {
    name: "Bolo do dia",
    description: "Massa fofa e úmida, com receitas que mudam conforme a estação.",
    image: img(
      "bolo",
      "Mão cortando uma fatia de bolo amarelo de forma, com casca dourada, sobre papel manteiga.",
      1600,
      1254,
    ),
  },
  {
    name: "Sanduíche na ciabatta",
    description: "Ciabatta de casca fina e miolo aerado, com recheios frescos montados na hora.",
    image: img(
      "sanduiche",
      "Sanduíche de ciabatta enfarinhada recheado com salame, pimentão vermelho assado, lascas de queijo e rúcula, em prato branco.",
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Nossa história                                                      */
/* ------------------------------------------------------------------ */
export const story = {
  eyebrow: "Nossa história",
  title: "Pão feito sem pressa, no meio do bairro",
  paragraphs: [
    "A Forno & Grão nasceu da vontade de ter, perto de casa, o pão que a gente gostaria de comer todo dia: massa com tempo de descanso, casca bem assada e ingredientes que dá para reconhecer na lista.",
    "Cada massa respeita o próprio tempo. O fermento natural é cuidado na casa, a manteiga é manteiga e o café é escolhido para acompanhar o que sai do forno. Tudo isso está no balcão e também nas encomendas para as datas importantes de quem mora por perto.",
  ],
  image: img(
    "historia",
    "Mãos sovando uma massa sobre uma bancada coberta de farinha, com um rolo de madeira ao fundo.",
  ),
  features: [
    {
      icon: "sprout",
      title: "Fermentação natural",
      text: "Fermento cultivado na casa e longo descanso da massa, para mais sabor e uma casca bem formada.",
    },
    {
      icon: "wheat",
      title: "Ingredientes selecionados",
      text: "Farinha sem aditivos, manteiga de verdade e queijos de pequenos produtores.",
    },
    {
      icon: "coffee",
      title: "Café especial",
      text: "Grãos de torra média, moídos na hora e preparados para combinar com o pão.",
    },
  ] as const,
};

/* ------------------------------------------------------------------ */
/* Encomendas                                                          */
/* ------------------------------------------------------------------ */
export const orders = {
  eyebrow: "Encomendas",
  title: "Encomendas para o café da manhã, aniversários e eventos.",
  intro: "Conte a data, quantas pessoas vêm e o que você imagina. A gente monta o pedido com você pelo WhatsApp.",
  occasions: [
    {
      icon: "coffee",
      title: "Café da manhã",
      text: "Cestas e mesas com pães, bolos, frios e café para começar o dia junto de quem importa.",
    },
    {
      icon: "cake",
      title: "Aniversários",
      text: "Bolos inteiros, salgados e docinhos para a festa em casa, na escola ou no escritório.",
    },
    {
      icon: "party",
      title: "Eventos",
      text: "Pães, salgados e mini croissants para reuniões, confraternizações e recepções.",
    },
  ] as const,
  cta: {
    title: "Tem uma data chegando?",
    text: "Peça com antecedência para a gente separar tudo para o seu dia.",
    label: "Encomendar pelo WhatsApp",
  },
  image: img(
    "encomendas",
    "Pães compridos embalados em sacos de papel pardo sobre um balcão de madeira, ao lado de um fatiador antigo vermelho.",
  ),
};

/* ------------------------------------------------------------------ */
/* Endereço e horários                                                 */
/* ------------------------------------------------------------------ */
export const location = {
  eyebrow: "Onde estamos",
  title: "Na esquina da Rua do Fermento",
  isDemo: true, // mostra a etiqueta "Endereço demonstrativo"; troque para false com o endereço real
  address: {
    street: "Rua do Fermento, 48",
    district: "Vila Aurora",
    city: "Belo Horizonte",
    state: "MG",
    postalCode: "30000-000",
  },
  mapNote:
    "Aqui entra o mapa do cliente (Google Maps ou OpenStreetMap). Nesta demonstração, o espaço fica reservado para manter o site leve.",
};

/**
 * Horários de funcionamento.
 * `days` usa os códigos do schema.org (Mo, Tu, We, Th, Fr, Sa, Su) e alimenta o JSON-LD.
 */
export const openingHours = [
  { label: "Segunda a sexta", days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "06:00", closes: "20:00" },
  { label: "Sábado", days: ["Sa"], opens: "06:00", closes: "19:00" },
  { label: "Domingo e feriados", days: ["Su"], opens: "06:30", closes: "17:00" },
];

/* ------------------------------------------------------------------ */
/* Redes sociais                                                       */
/* Deixe `url` vazio para exibir o ícone como "demonstrativo".          */
/* ------------------------------------------------------------------ */
export const socials = [
  { name: "Instagram", icon: "instagram", url: "" },
  { name: "WhatsApp", icon: "whatsapp", url: "" },
] as const;
