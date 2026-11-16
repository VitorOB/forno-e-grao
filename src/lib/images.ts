/**
 * Fotos responsivas: cada foto existe em public/images/<nome>-800.webp e <nome>-1600.webp
 * (gere com `node scripts/optimize-images.mjs <original> <nome>`).
 * Este arquivo também é importado pelo vite.config.ts para o preload do hero.
 */
export const IMAGE_WIDTHS = [800, 1600] as const;

export const imageSrc = (name: string, width: (typeof IMAGE_WIDTHS)[number] = 800) =>
  `/images/${name}-${width}.webp`;

export const imageSrcSet = (name: string) => IMAGE_WIDTHS.map((w) => `${imageSrc(name, w)} ${w}w`).join(", ");

/**
 * Largura que cada foto ocupa na tela, por layout.
 * Container: 16px de margem lateral no celular, 24px a partir de 640px, 32px a partir de 1024px,
 * conteúdo com no máximo 1088px (max-w-6xl menos as margens).
 */
export const IMAGE_SIZES = {
  // lg: grid 1.05fr / 1fr com gap de 56px
  hero: "(min-width: 1152px) 503px, (min-width: 1024px) calc((100vw - 120px) / 2.05), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)",
  // 3 colunas no desktop, 2 no tablet, 1 no celular (gap de 24px)
  product:
    "(min-width: 1152px) 347px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc((100vw - 72px) / 2), calc(100vw - 32px)",
  // lg: 2 colunas com gap de 64px
  story: "(min-width: 1152px) 512px, (min-width: 1024px) calc((100vw - 128px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)",
  // lg: grid 1.1fr / 1fr com gap de 64px; a foto fica na coluna menor
  orders:
    "(min-width: 1152px) 488px, (min-width: 1024px) calc((100vw - 128px) / 2.1), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)",
} as const;
