import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardSidebar />
      <main className="block w-full">
        <DashboardTopbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
