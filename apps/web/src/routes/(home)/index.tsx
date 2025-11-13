import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { orpc } from "@/utils/orpc";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const healthCheck = useQuery(orpc.healthCheck.queryOptions());

  return (
    <div className="container">
      <section
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200, 200, 200, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.15) 1px, transparent 1px)",
          backgroundSize: "90px 150px",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </section>

      {/* <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${healthCheck.data ? "bg-green-500" : "bg-red-500"}`}
            />
            <span className="text-muted-foreground text-sm">
              {healthCheck.isLoading
                ? "Checking..."
                : healthCheck.data
                  ? "Connected"
                  : "Disconnected"}
            </span>
          </div>
        </section>
      </div> */}
    </div>
  );
}
