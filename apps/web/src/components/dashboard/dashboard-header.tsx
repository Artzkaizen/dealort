import { Link } from "@tanstack/react-router";
import { Menu, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../mode-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { DashboardBreadcrumbs } from "./dashboard-breadcrumbs";

export function DashboardHeader() {
  return (
    <div className="sticky top-0 z-45 flex h-15 w-full items-center justify-between border-b bg-sidebar/70 px-2 py-3 backdrop-blur-sm">
      <div className="flex grow items-center gap-3">
        {/* Sidebar Trigger */}
        <SidebarTrigger className="border-r">
          <Menu className="size-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </SidebarTrigger>

        <div className="max-sm:hidden">
          <DashboardBreadcrumbs />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild className="rounded-xl" variant="default">
              <Link to="/dashboard/products/new">
                <PlusIcon />
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent>Add new product</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
