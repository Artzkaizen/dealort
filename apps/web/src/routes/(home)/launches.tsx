import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/launches")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/launches"!</div>;
}
