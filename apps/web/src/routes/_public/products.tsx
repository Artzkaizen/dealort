import { createFileRoute } from "@tanstack/react-router";
import { sampleProducts as products, sampleUsers as users } from "@/utils/dummy";
export const Route = createFileRoute("/_public/products")({
  component: RouteComponent,
});




function RouteComponent() {
  return (<main>

  </main>);
}
