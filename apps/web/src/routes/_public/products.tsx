import { createFileRoute } from "@tanstack/react-router";
import {
  ProductCard,
  ProductCardDetails,
  ProductCardLogo,
  ProductCardRateAndReview,
} from "@/components/product-card";
import {
  sampleProducts as products,
  sampleReviews as reviews,
} from "@/utils/dummy";
export const Route = createFileRoute("/_public/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col space-y-8">
      {products.map((product) => {
        const productReviews = reviews.filter(
          (r) => r.productId === product?.id
        );
        return (
          <ProductCard key={product.id}>
            <div className="flex items-start gap-1">
              <ProductCardLogo logo={product.logo || ""} name={product.name} />
              <div className="flex flex-col gap-px">
                <ProductCardDetails name={product.name} tagline={product.tagline} />

                <ProductCardRateAndReview rating={product.rating} reviewsCount={productReviews.length} />
              </div>
            </div>
          </ProductCard>
        );
      })}
    </main>
  );
}
