/**
 * Versão em inglês dos textos de site.ts (mesmo formato).
 * Contatos, endereço, imagens e horários vêm da versão em português; aqui só muda o texto.
 */
import { img, sitePt, type SiteData } from "./site";

export const siteEn: SiteData = {
  ...sitePt,

  contact: {
    ...sitePt.contact,
    whatsappMessage: "Hi! I saw the Forno & Grão website and I'd like to place an order.",
    creatorMessage: "Hi! I saw the Forno & Grão demo website and I'd like a website like this for my business.",
  },

  brand: {
    ...sitePt.brand,
    tagline: "Artisan Bakery",
    seo: {
      title: "Forno & Grão — Artisan Bakery | Sourdough bread and specialty coffee",
      description:
        "Neighborhood artisan bakery with sourdough bread, croissants, pão de queijo, cakes and specialty coffee. Orders for breakfast, birthdays and events via WhatsApp.",
    },
  },

  nav: [
    { label: "Products", href: "#produtos" },
    { label: "Our story", href: "#historia" },
    { label: "Orders", href: "#encomendas" },
    { label: "Find us", href: "#onde-estamos" },
  ],

  hero: {
    ...sitePt.hero,
    eyebrow: "Neighborhood artisan bakery",
    title: "Bread with a crackling crust, and coffee to go with it.",
    subtitle: "Sourdough breads, pastry-case treats and specialty coffee, baked right here, close to your home.",
    primaryCta: { label: "See products", href: "#produtos" },
    secondaryCtaLabel: "Order on WhatsApp",
    image: img(
      "hero",
      "Sourdough loaves with a golden crust and rustic scoring, surrounded by small round flour-dusted rolls.",
    ),
  },

  productsSection: {
    eyebrow: "At the counter",
    title: "Fresh from our oven",
    intro: "A sample of what you'll find in our display case. Stop by the shop to see it all.",
  },

  products: [
    {
      name: "Sourdough bread",
      description: "Slow fermentation, a moist and slightly tangy crumb, and a thick, deeply caramelized crust.",
      image: img(
        "pao-fermentacao",
        "Round sourdough loaf dusted with flour and scored in a leaf pattern, on a rustic wooden board.",
      ),
    },
    {
      name: "Butter croissant",
      description: "Laminated dough made with butter: flaky layers outside and a soft center.",
      image: img("croissant", "Golden croissant with visible flaky layers on a light wooden board."),
    },
    {
      name: "Pão de queijo (cheese bread)",
      description: "Aged cheese in the dough, a crispy shell and a chewy center.",
      image: img("pao-de-queijo", "Golden cheese breads piled in a wicker basket, with stainless steel tongs."),
    },
    {
      name: "Cappuccino",
      description: "Full-bodied espresso, steamed milk and creamy foam on top.",
      image: img("cappuccino", "White cappuccino cup with a heart drawn in the milk foam, on a saucer."),
    },
    {
      name: "Cake of the day",
      description: "Soft, moist crumb, with recipes that change with the seasons.",
      image: img(
        "bolo",
        "Hand cutting a slice of yellow loaf cake with a golden crust, on parchment paper.",
        1600,
        1254,
      ),
    },
    {
      name: "Ciabatta sandwich",
      description: "Thin-crusted, airy ciabatta with fresh fillings made to order.",
      image: img(
        "sanduiche",
        "Flour-dusted ciabatta sandwich filled with salami, roasted red pepper, cheese shavings and arugula, on a white plate.",
      ),
    },
  ],

  story: {
    eyebrow: "Our story",
    title: "Bread made without rushing, in the heart of the neighborhood",
    paragraphs: [
      "Forno & Grão was born from wanting, close to home, the bread we'd like to eat every day: dough given time to rest, a well-baked crust and ingredients you can recognize on the label.",
      "Every dough follows its own pace. Our sourdough starter is tended in-house, the butter is real butter and the coffee is chosen to go with what comes out of the oven. All of it is at the counter, and also in custom orders for the special days of the people who live nearby.",
    ],
    image: img("historia", "Hands kneading dough on a flour-covered counter, with a wooden rolling pin in the background."),
    features: [
      {
        icon: "sprout",
        title: "Natural fermentation",
        text: "A starter cultivated in-house and a long rest for the dough, for more flavor and a well-formed crust.",
      },
      {
        icon: "wheat",
        title: "Selected ingredients",
        text: "Additive-free flour, real butter and cheeses from small producers.",
      },
      {
        icon: "coffee",
        title: "Specialty coffee",
        text: "Medium-roast beans, ground to order and brewed to pair with the bread.",
      },
    ],
  },

  orders: {
    eyebrow: "Orders",
    title: "Orders for breakfast, birthdays and events.",
    intro: "Tell us the date, how many people are coming and what you have in mind. We'll put the order together with you on WhatsApp.",
    occasions: [
      {
        icon: "coffee",
        title: "Breakfast",
        text: "Baskets and spreads with bread, cakes, cold cuts and coffee to start the day with the people who matter.",
      },
      {
        icon: "cake",
        title: "Birthdays",
        text: "Whole cakes, savory snacks and sweets for the party at home, at school or at the office.",
      },
      {
        icon: "party",
        title: "Events",
        text: "Bread, savory snacks and mini croissants for meetings, get-togethers and receptions.",
      },
    ],
    cta: {
      title: "Got a date coming up?",
      text: "Order ahead so we can have everything ready for your day.",
      label: "Order on WhatsApp",
    },
    image: img(
      "encomendas",
      "Long loaves wrapped in brown paper bags on a wooden counter, next to a vintage red bread slicer.",
    ),
  },

  location: {
    ...sitePt.location,
    eyebrow: "Find us",
    title: "On the corner of Rua do Fermento",
    mapNote:
      "The client's map goes here (Google Maps or OpenStreetMap). In this demo, the space is left empty to keep the site lightweight.",
  },

  openingHours: [
    { ...sitePt.openingHours[0], label: "Monday to Friday" },
    { ...sitePt.openingHours[1], label: "Saturday" },
    { ...sitePt.openingHours[2], label: "Sundays and holidays" },
  ],
};
