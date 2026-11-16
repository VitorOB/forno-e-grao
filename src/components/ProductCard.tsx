import type { Product } from "../data/site";

export function ProductCard({ product }: { product: Product }) {
  const { name, description, image } = product;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-suave">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="aspect-4/3 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-cacau-suave">{description}</p>
      </div>
    </article>
  );
}
