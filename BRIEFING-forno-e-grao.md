# BRIEFING — Projeto 01: Forno & Grão — Padaria Artesanal

## 0. Contexto (leia primeiro)

Este site é uma **demonstração para portfólio** de um serviço de criação de sites para pequenos negócios. Ele será mostrado a donos de padarias reais como exemplo do que podem ter. Por isso:

- Precisa parecer um site comercial real de uma padaria específica, não um template.
- Precisa carregar rápido e ficar impecável **no celular**: a maioria dos prospects vai abrir pelo WhatsApp ou pelo Instagram.
- O rodapé leva o crédito do criador com um convite para o visitante pedir um site parecido (ver 4.8).

Fora do escopo: backend, banco de dados, autenticação, painel administrativo, pagamentos, carrinho e seção de depoimentos ou avaliações.

## 1. Prioridades (em caso de conflito, siga esta ordem)

1. Visual forte e específico + experiência impecável no celular.
2. Acessibilidade WCAG 2.2 AA.
3. Desempenho (Lighthouse ≥ 90 em mobile).
4. Organização do código e facilidade para trocar os dados por os de um cliente real.

## 2. A marca

**Forno & Grão — Padaria Artesanal.** Padaria de bairro contemporânea: fermentação natural, fornadas ao longo do dia, café especial. Público: moradores do bairro, famílias, pessoas que tomam café da manhã fora e fazem encomendas para eventos.

**Elemento-assinatura (obrigatório):** a padaria tem horários fixos de saída das fornadas. Isso deve aparecer de forma marcante e funcional no site (ex.: faixa ou bloco "Saindo do forno hoje": 6h30 pão francês e fermentação natural · 9h croissant · 15h pão de queijo · 16h30 bolo do dia). É o que diferencia este site de um template genérico de padaria.

Tom de voz: caloroso, direto e concreto. Nada de clichês como "feito com amor", "sabor inesquecível" ou "qualidade e tradição". Prefira detalhes concretos (48 horas de fermentação, manteiga francesa, queijo canastra, grãos de torra média de um produtor do Sul de Minas).

## 3. Identidade visual

### Paleta (já ajustada para contraste AA)

| Uso | Cor |
|---|---|
| Fundo principal (creme) | `#F7F3EB` |
| Fundo alternativo (bege) | `#E8D9C6` |
| Texto principal (marrom escuro) | `#30251F` |
| **Terracota de ação**: botões, links e texto colorido | `#9E4F35` |
| Terracota decorativa: só ilustrações, bordas e áreas grandes sem texto | `#B65F42` |
| Branco | `#FFFFFF` |

Atenção: `#B65F42` **não passa** em AA para texto normal (≈ 4,0:1 sobre o creme e ≈ 4,4:1 com texto branco). Use `#9E4F35` (≈ 5,2:1 sobre o creme e ≈ 5,8:1 com texto branco) em qualquer texto ou botão. Verifique o contraste de toda combinação nova.

### Tipografia

- Títulos: **Fraunces** (serifada editorial, com personalidade).
- Texto: **DM Sans**.
- Carregue pelo Google Fonts com `display=swap` e `preconnect`, usando só os pesos necessários. Pode também hospedar localmente com `@fontsource`.

### Direção

- Bastante espaço em branco, fotos grandes e hierarquia tipográfica clara.
- Bordas levemente arredondadas, sombras discretas e no máximo uma animação de entrada sutil por seção.
- Sem gradientes chamativos, sem carrosséis automáticos e sem parallax pesado.
- Tudo deve respeitar `prefers-reduced-motion`.

## 4. Estrutura (one-page com navegação por âncoras)

### 4.1 Cabeçalho

- Logo textual "Forno & Grão".
- Menu: Produtos · Fornadas · Nossa história · Encomendas · Onde estamos.
- Botão destacado "Fazer encomenda".
- Cabeçalho sticky e compacto.
- Menu mobile acessível: `aria-expanded`, fecha com Esc e mantém o foco gerenciado.

### 4.2 Hero

- Título: escreva um título curto e específico no tom da marca, sem clichês. Exemplo de direção: "Pão de verdade, saindo do forno o dia inteiro."
- Subtítulo de uma linha sobre fermentação natural e café especial.
- Botões: "Ver produtos" (principal) e "Encomendar pelo WhatsApp" (secundário).
- Foto de destaque: `hero.jpg`.

### 4.3 Saindo do forno hoje (elemento-assinatura)

Horários das fornadas (ver seção 2). Se for simples, destaque a próxima fornada com base no horário atual do navegador. Se o horário já passou, mostre "amanhã". Nada mais complexo do que isso.

### 4.4 Produtos

Seis cartões com foto, nome, descrição de uma linha e preço:

| Produto | Preço |
|---|---|
| Pão de fermentação natural | R$ 24,00 |
| Croissant de manteiga | R$ 12,00 |
| Pão de queijo canastra (porção) | R$ 14,00 |
| Cappuccino | R$ 11,00 |
| Bolo do dia (fatia) | R$ 13,00 |
| Sanduíche na ciabatta | R$ 28,00 |

Layout: 1 coluna no celular, 2 no tablet e 3 no desktop.

### 4.5 Nossa história

História fictícia curta (dois parágrafos no máximo), com uma foto e um layout editorial. Inclua três diferenciais com ícones Lucide: fermentação natural, ingredientes selecionados e fornadas o dia todo.

### 4.6 Encomendas

- Título: "Encomendas para o café da manhã, aniversários e eventos."
- Lista curta do que dá para encomendar e prazo de 24h.
- Botão de WhatsApp com mensagem pré-preenchida (ver seção 5).

### 4.7 Onde estamos

- Endereço fictício claramente marcado como demonstrativo.
- Tabela de horários de funcionamento.
- Bloco visual no lugar do mapa (sem embed do Google Maps), com texto explicando que ali entra o mapa do cliente.

### 4.8 Rodapé

- Logo, links, horários e ícones de redes sociais (Instagram e WhatsApp). Nas redes, use `href="#"` com `aria-disabled` e a etiqueta "demonstrativo". Nada de links que finjam funcionar.
- Crédito de portfólio, discreto mas claro: "Site demonstrativo criado por [NOME] — quer um site assim para o seu negócio? [Fale comigo]". O link deve ir para o WhatsApp de contato configurado na seção 5.

## 5. Configuração centralizada

Coloque todos os dados editáveis em `src/data/site.ts`: nome, textos, produtos, preços, fornadas, horários, endereço, redes e contato.

```ts
export const contact = {
  whatsappNumber: "", // formato 5531999999999 — preencher antes de publicar
  whatsappMessage: "Olá! Vi o site da Forno & Grão e gostaria de fazer uma encomenda.",
  creatorName: "",
  creatorWhatsapp: "",
};
```

- Se `whatsappNumber` estiver vazio, o botão deve usar `https://wa.me/?text=...` (abre o WhatsApp para a pessoa escolher o contato). Nunca invente um número.
- Documente no README exatamente onde trocar cada dado.

## 6. Imagens

Você mesmo deve buscar e baixar as fotos no Unsplash ou no Pexels (licença gratuita para uso comercial) e salvá-las em `public/images/`. O site deve usar só esses arquivos locais, **nunca URLs externas**.

Como fazer:

- Se houver `PEXELS_API_KEY` ou `UNSPLASH_ACCESS_KEY` no arquivo `.env`, use a API oficial para buscar.
- Caso contrário, use pesquisa na web e baixe pelos links diretos das páginas das fotos. Nunca invente IDs ou URLs de imagens.
- **Abra cada imagem baixada para conferir** se ela mostra mesmo o que o nome diz, se tem boa qualidade e se não tem marca d'água ou logotipo. Se não servir, substitua.
- Mantenha um estilo coerente entre as fotos: luz natural, tons quentes, sem pessoas com o rosto em destaque.
- Registre em `CREDITS.md` o autor e o link de cada foto.

Arquivos esperados:

- `hero.jpg`
- `pao-fermentacao.jpg`
- `croissant.jpg`
- `pao-de-queijo.jpg`
- `cappuccino.jpg`
- `bolo.jpg`
- `sanduiche.jpg`
- `historia.jpg`
- `encomendas.jpg`

Instruções:

- Se não conseguir uma foto adequada para algum item, use um placeholder neutro na cor bege com o nome da imagem e informe isso no relatório final.
- Escreva um `alt` descritivo e específico para cada foto informativa.
- Use `loading="lazy"` em tudo que estiver abaixo da dobra e `width`/`height` definidos para evitar layout shift.
- Se houver ferramenta disponível, converta as imagens para WebP com no máximo 1600px.

## 7. Stack

- React + TypeScript + Vite + Tailwind CSS + Lucide React. Nenhuma outra dependência de UI ou de animação.
- Publicação prevista: **Vercel**. Deixe o build pronto para deploy na raiz.

Estrutura:

```
src/
  components/   (Button, Container, SectionTitle, ProductCard…)
  sections/     (Header, Hero, Fornadas, Products, Story, Orders, Location, Footer)
  data/site.ts
  App.tsx
  main.tsx
public/images/
```

## 8. Acessibilidade (WCAG 2.2 AA)

- HTML semântico, um único `h1` e hierarquia correta de títulos.
- Link "Pular para o conteúdo".
- Navegação completa por teclado, com foco sempre visível (anel em `#9E4F35` ou `#30251F`, nunca removido).
- Alvos de toque de pelo menos 44×44px.
- Contraste conforme a seção 3.
- Funciona com zoom de 200% e em telas de 320px de largura, sem rolagem horizontal.
- `prefers-reduced-motion` respeitado.
- `lang="pt-BR"`.

## 9. SEO e metadados

- `title`, `meta description`, Open Graph (com `og:image` usando `hero.jpg`) e favicon simples em SVG com as iniciais "F&G".
- Dados estruturados JSON-LD do tipo `Bakery` com os dados fictícios.

## 10. Como trabalhar

1. Inspecione a pasta. Se já houver projeto, não sobrescreva sem necessidade.
2. Antes de codar, apresente em poucas linhas: a estrutura de componentes, a direção visual e a lista de imagens encontradas ou faltantes.
3. Implemente seção por seção, com os textos finais em português brasileiro (nada de lorem ipsum).
4. Ao final, rode `tsc --noEmit`, lint e `npm run build`, e corrija o que aparecer.
5. Relatório final:
   - Arquivos criados.
   - Como rodar localmente.
   - O que precisa ser preenchido (WhatsApp, nome do criador, imagens faltantes).
   - O que **não** foi possível testar visualmente.

Não afirme que fez testes visuais se não os executou.

## 11. Critérios de conclusão

- Todas as seções implementadas com conteúdo final.
- Menu mobile funcional e acessível.
- Nenhum link que finja funcionar.
- Sem rolagem horizontal de 320px a 1920px.
- Contraste AA verificado.
- Build de produção sem erros.
- README com instalação, execução, build, deploy na Vercel e onde editar os dados.
