import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { brand, contact, location, openingHours } from "./src/data/site";

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
      ].join("\n    ");

      return html.replace("<!--seo-->", tags);
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
  plugins: [react(), tailwindcss(), seoFromSiteData()],
});
