import { products, productsSection } from "../data/site";
import { Container } from "../components/Container";
import { ProductCard } from "../components/ProductCard";
import { SectionTitle } from "../components/SectionTitle";

export function Products() {
  return (
    <section id="produtos" aria-labelledby="produtos-title" className="py-16 sm:py-24">
      <Container>
        <div data-reveal>
          <SectionTitle
            id="produtos-title"
            eyebrow={productsSection.eyebrow}
            title={productsSection.title}
            intro={productsSection.intro}
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.name}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
