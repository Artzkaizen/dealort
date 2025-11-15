import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronsUpDownIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

// Define dashboard navigation links with icons
// Each link includes a path, label, and icon component
// Note: Additional routes can be added as they are created in the router
const dashboardLinks = [
  {
    path: "/dashboard" as const,
    label: "Overview",
    icon: LayoutDashboard,
  },
  // Additional routes can be added here as they are created:
  // {
  //   path: "/dashboard/analytics",
  //   label: "Analytics",
  //   icon: BarChart3,
  // },
  // {
  //   path: "/dashboard/users",
  //   label: "Users",
  //   icon: Users,
  // },
  // {
  //   path: "/dashboard/documents",
  //   label: "Documents",
  //   icon: FileText,
  // },
  // {
  //   path: "/dashboard/settings",
  //   label: "Settings",
  //   icon: Settings,
  // },
] as const;

// User profile component with tooltip for logout and settings
function UserProfile() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      },
    });
  };

  // Handle settings navigation
  const handleSettings = () => {
    navigate({ to: "/dashboard" });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-colors",
              isCollapsed && "justify-center px-2"
            )}
          >
            <Avatar className="size-8">
              <AvatarImage alt="User" src="" />
              <AvatarFallback>
                <User className="size-4" />
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex flex-1 flex-col overflow-hidden">
                <span className="truncate font-medium text-sm">User Name</span>
                <span className="truncate text-muted-foreground text-xs">
                  user@example.com
                </span>
              </div>
            )}
          </div>

          <ChevronsUpDownIcon className="size-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-2" side="right">
        <div className="flex min-w-[120px] flex-col gap-1">
          <Button
            className="w-full justify-start"
            onClick={handleSettings}
            size="sm"
            variant="ghost"
          >
            <Settings className="mr-2 size-4" />
            Settings
          </Button>
          <Button
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={handleLogout}
            size="sm"
            variant="ghost"
          >
            <LogOut className="mr-2 size-4" />
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// Main Sidebar component
export function DashboardSidebar() {
  return (
    // Only show sidebar on large screens (lg breakpoint and above)
    <div className="hidden lg:block">
      <Sidebar className="border-r" collapsible="icon">
        {/* Sidebar Header with toggle button */}
        <SidebarHeader>
          <div className="flex w-full items-center justify-between">
            <h2 className="px-2 font-semibold text-lg">Dashboard</h2>
          </div>
        </SidebarHeader>

        {/* Sidebar Content with navigation links */}
        <SidebarContent>
          <SidebarMenu>
            {dashboardLinks.map((link) => {
              const Icon = link.icon;
              return (
                <SidebarMenuItem key={link.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      activeProps={{
                        className: "bg-accent text-accent-foreground",
                      }}
                      className="flex items-center gap-3"
                      to={link.path}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        {/* Sidebar Footer with user profile */}
        <SidebarFooter>
          <UserProfile />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
