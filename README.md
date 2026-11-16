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

Ficam em [`public/images/`](public/images/). Para trocar uma foto, substitua o arquivo **com o mesmo nome**. Se a proporção mudar, atualize `width`/`height` e o `alt` correspondente em `site.ts`. A regra é largura máxima de 1600 px, em WebP.

- `hero.jpg` (1200×630) é a imagem de compartilhamento (`og:image`).
- Os créditos das fotos atuais estão em [`CREDITS.md`](CREDITS.md).

Para converter uma foto nova com ffmpeg:

```bash
ffmpeg -i foto.jpg -vf "scale='min(1600,iw)':-2" -c:v libwebp -quality 78 public/images/nome.webp
```

### Cores e fontes

- As cores ficam em [`src/index.css`](src/index.css), no bloco `@theme`. `terracota` (`#9E4F35`) é a única cor de destaque permitida em texto e botões. `terracota-deco` (`#B65F42`) serve só para decoração.
- Terracota sobre o bege (`#E8D9C6`) dá 4,2:1 e **não passa** em AA para texto normal. Por isso, as seções bege não usam texto terracota.
- Fontes: Fraunces (títulos) e DM Sans (texto), hospedadas localmente pelo `@fontsource` e importadas em [`src/main.tsx`](src/main.tsx).

### SEO

`title`, `meta description`, Open Graph e o JSON-LD `Bakery` são gerados no build a partir de `site.ts`, pelo plugin em [`vite.config.ts`](vite.config.ts). Não edite essas tags direto no `index.html`.

## Estrutura

```
src/
  components/   Button, Container, SectionTitle, ProductCard, BrandIcons
  sections/     Header, Hero, Products, Story, Orders, Location, Footer
  lib/          format.ts (formato de hora e link do WhatsApp)
  data/site.ts  todos os dados editáveis
  App.tsx
  main.tsx
  index.css
public/
  images/       fotos locais (WebP + hero.jpg para o og:image)
  favicon.svg
```
