# Forno & Grão — Padaria Artesanal (site demonstrativo)

Site one-page de portfólio para uma padaria fictícia. Feito com React, TypeScript, Vite, Tailwind CSS v4 e Lucide React.

## Requisitos

- Node.js 20 ou mais recente
- npm

## Instalação e execução

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # checagem de tipos + build de produção em dist/
npm run preview    # serve o build de produção em http://localhost:4173
npm run typecheck  # só o tsc --noEmit
npm run lint       # ESLint (inclui regras de acessibilidade jsx-a11y)
```

## Deploy na Vercel

1. Suba a pasta para um repositório no GitHub, GitLab ou Bitbucket. O `.env` já está no `.gitignore`.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite sozinha. Se pedir, use:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**.
5. Depois do primeiro deploy, coloque a URL final em `brand.siteUrl` (ver abaixo) e publique de novo. Isso deixa o `og:image` com endereço absoluto, que é o que o WhatsApp e o Instagram precisam para mostrar a prévia do link.

Também funciona por linha de comando: `npx vercel` na raiz do projeto.

## Onde trocar cada dado

**Todos os textos e dados ficam em [`src/data/site.ts`](src/data/site.ts).** Não é preciso mexer nos componentes.

| O que trocar | Onde, em `src/data/site.ts` |
|---|---|
| WhatsApp da padaria (botões de encomenda) | `contact.whatsappNumber`, no formato `5531999999999` |
| Mensagem pré-preenchida do WhatsApp | `contact.whatsappMessage` |
| Seu nome no crédito do rodapé | `contact.creatorName` |
| Seu WhatsApp no link "Fale comigo" | `contact.creatorWhatsapp` e `contact.creatorMessage` |
| Nome, slogan, título e descrição para o Google | `brand.name`, `brand.tagline`, `brand.seo` |
| URL final do site (og:image e JSON-LD) | `brand.siteUrl`, sem barra no fim |
| Itens do menu | `nav` |
| Título, subtítulo e botões do topo | `hero` |
| Produtos (nome, descrição e foto) | `products` |
| História e diferenciais | `story`. Os ícones possíveis são `sprout`, `wheat` e `coffee` |
| Encomendas: título, ocasiões e chamada final | `orders`. Os ícones das ocasiões são `coffee`, `cake` e `party` |
| Endereço | `location.address`. Troque `location.isDemo` para `false` para tirar a etiqueta "Endereço demonstrativo" |
| Horário de funcionamento | `openingHours`. `days` usa os códigos do schema.org (Mo, Tu, We, Th, Fr, Sa, Su) |
| Instagram e WhatsApp do rodapé | `socials[].url`. Vazio mostra o ícone desativado com a etiqueta "demonstrativo" |

### Regras do WhatsApp

- Se `whatsappNumber` estiver vazio, os botões abrem `https://wa.me/?text=...`, e a pessoa escolhe para quem enviar. O site nunca inventa um número.
- O mesmo vale para `creatorWhatsapp` no link "Fale comigo" do rodapé.
- Se `creatorName` estiver vazio, o rodapé mostra só "Site demonstrativo — quer um site assim…", sem o "criado por".

### Fotos

Ficam em [`public/images/`](public/images/). Cada foto tem duas versões em WebP: `<nome>-800.webp` e `<nome>-1600.webp`. O site usa `srcset`/`sizes`, e o navegador escolhe a menor que fique nítida na tela. As larguras de cada layout estão em [`src/lib/images.ts`](src/lib/images.ts).

Para trocar uma foto, gere as duas versões a partir do original. É preciso ter o [ffmpeg](https://ffmpeg.org/) instalado:

```bash
node scripts/optimize-images.mjs caminho/da/foto-original.jpg croissant
```

O script grava `croissant-800.webp` e `croissant-1600.webp` e mostra as dimensões. Em `site.ts`, a foto é referenciada só pelo nome-base (`img("croissant", "texto alternativo")`). Se a proporção mudar, atualize `width`/`height` com as dimensões da versão de 1600px. Atualize também o `alt`.

- A foto do hero é pré-carregada com `fetchpriority="high"` e não usa lazy loading. As outras usam `loading="lazy"`.
- `hero.jpg` (1200×630) é só a imagem de compartilhamento (`og:image`). Ela fica em JPG porque nem todo app que gera prévia de link aceita WebP, e a página não a carrega.
- Os créditos das fotos atuais estão em [`CREDITS.md`](CREDITS.md).

### Cores e fontes

- As cores ficam em [`src/index.css`](src/index.css), no bloco `@theme`. `terracota` (`#9E4F35`) é a única cor de destaque permitida em texto e botões. `terracota-deco` (`#B65F42`) serve só para decoração.
- Terracota sobre o bege (`#E8D9C6`) dá 4,2:1 e **não passa** em AA para texto normal. Por isso, as seções bege não usam texto terracota.
- Fontes: Fraunces (títulos) e DM Sans (texto), hospedadas localmente pelo `@fontsource` e importadas em [`src/main.tsx`](src/main.tsx). A fonte dos títulos (Fraunces 600) é pré-carregada. Como o nome do arquivo muda a cada build, o `<link rel="preload">` é injetado pelo plugin `preloadDisplayFont` em [`vite.config.ts`](vite.config.ts). Se trocar a fonte dos títulos, ajuste a expressão regular desse plugin. Se o arquivo não for encontrado, o build falha de propósito.

### SEO e preloads

`title`, `meta description`, Open Graph, o JSON-LD `Bakery` e o preload da foto do hero são gerados no build a partir de `site.ts`, pelo plugin em [`vite.config.ts`](vite.config.ts). Não edite essas tags direto no `index.html`.

## Estrutura

```
src/
  components/   Button, Container, SectionTitle, ProductCard, ResponsiveImage, BrandIcons
  sections/     Header, Hero, Products, Story, Orders, Location, Footer
  lib/          format.ts (hora e link do WhatsApp), images.ts (srcset e sizes)
  data/site.ts  todos os dados editáveis
  App.tsx
  main.tsx
  index.css
scripts/
  optimize-images.mjs   gera as versões 800/1600 de uma foto
public/
  images/       fotos locais (<nome>-800.webp, <nome>-1600.webp e hero.jpg para o og:image)
  favicon.svg
```
