import type { SiteImage } from "../data/site";
import { imageSrc, imageSrcSet } from "../lib/images";

type Props = {
  image: SiteImage;
  /** Valor do atributo sizes (use IMAGE_SIZES de lib/images.ts) */
  sizes: string;
  /** true para a imagem principal acima da dobra: sem lazy loading e com fetchpriority="high" */
  priority?: boolean;
  className?: string;
};

export function ResponsiveImage({ image, sizes, priority = false, className = "" }: Props) {
  return (
    <img
      src={imageSrc(image.name)}
      srcSet={imageSrcSet(image.name)}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })}
      className={className}
    />
  );
}
