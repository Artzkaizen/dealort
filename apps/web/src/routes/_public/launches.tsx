import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/launches")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/launches"!</div>;
}
