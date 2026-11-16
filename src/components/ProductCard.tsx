import type { Product } from "../data/site";
import { IMAGE_SIZES } from "../lib/images";
import { ResponsiveImage } from "./ResponsiveImage";

export function ProductCard({ product }: { product: Product }) {
  const { name, description, image } = product;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-suave">
      <ResponsiveImage image={image} sizes={IMAGE_SIZES.product} className="aspect-4/3 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-cacau-suave">{description}</p>
      </div>
    </article>
  );
}
