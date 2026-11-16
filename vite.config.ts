import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { brand, contact, hero, location, openingHours } from "./src/data/site";
import { IMAGE_SIZES, imageSrcSet } from "./src/lib/images";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Gera title, meta description, Open Graph e JSON-LD (Bakery) a partir de src/data/site.ts. */
function seoFromSiteData(): Plugin {
  return {
    name: "seo-from-site-data",
    transformIndexHtml(html) {
      const base = brand.siteUrl.replace(/\/$/, "");
      const ogImage = `${base}/images/hero.jpg`;

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: brand.name,
        description: brand.seo.description,
        ...(base && { url: base }),
        image: ogImage,
        ...(contact.whatsappNumber && { telephone: `+${contact.whatsappNumber.replace(/\D/g, "")}` }),
        servesCuisine: ["Padaria", "Café"],
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address.street,
          addressLocality: location.address.city,
          addressRegion: location.address.state,
          postalCode: location.address.postalCode,
          addressCountry: "BR",
        },
        openingHoursSpecification: openingHours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days.map((d) => `https://schema.org/${dayNames[d]}`),
          opens: h.opens,
          closes: h.closes,
        })),
      };

      const tags = [
        `<title>${escapeHtml(brand.seo.title)}</title>`,
        `<meta name="description" content="${escapeHtml(brand.seo.description)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="pt_BR" />`,
        `<meta property="og:site_name" content="${escapeHtml(brand.name)}" />`,
        `<meta property="og:title" content="${escapeHtml(brand.seo.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(brand.seo.description)}" />`,
        ...(base ? [`<meta property="og:url" content="${escapeHtml(base)}/" />`] : []),
        `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
        // Foto do hero (LCP): mesmo srcset/sizes da <img>, para o navegador baixar só uma versão
        `<link rel="preload" as="image" type="image/webp" imagesrcset="${imageSrcSet(hero.image.name)}" imagesizes="${IMAGE_SIZES.hero}" fetchpriority="high" />`,
      ].join("\n    ");

      return html.replace("<!--seo-->", tags);
    },
  };
}

/**
 * Pré-carrega a fonte dos títulos (Fraunces 600, subconjunto latino).
 * O arquivo recebe um hash no build, por isso o link é injetado depois que o bundle existe.
 */
function preloadDisplayFont(): Plugin {
  return {
    name: "preload-display-font",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const file = Object.keys(ctx.bundle ?? {}).find((f) => /fraunces-latin-600-normal-[\w-]+\.woff2$/.test(f));
        if (!file) throw new Error("preload-display-font: woff2 da Fraunces 600 não encontrado no bundle");
        const tag = `<link rel="preload" as="font" type="font/woff2" href="/${file}" crossorigin />`;
        return html.replace("</title>", `</title>\n    ${tag}`);
      },
    },
  };
}

const dayNames: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFromSiteData(), preloadDisplayFont()],
});
