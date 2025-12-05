import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  AlertTriangleIcon,
  KeyIcon,
  Link2Icon,
  PanelsTopLeftIcon,
  Shield,
  UserCircle2Icon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

const settingsLinks = [
  {
    path: "/dashboard/settings",
    label: "Overview",
    icon: PanelsTopLeftIcon,
  },
  {
    path: "/dashboard/settings/profile",
    label: "Profile",
    icon: UserCircle2Icon,
  },
  {
    path: "/dashboard/settings/security",
    label: "Security",
    icon: Shield,
  },
  {
    path: "/dashboard/settings/sessions",
    label: "Sessions",
    icon: KeyIcon,
  },
  {
    path: "/dashboard/settings/accounts",
    label: "Accounts",
    icon: Link2Icon,
  },
  {
    path: "/dashboard/settings/danger",
    label: "Danger Zone",
    icon: AlertTriangleIcon,
  },
];

function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex flex-col gap-2 bg-secondary px-10 py-20">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (!session) {
    return <div>Not found</div>;
  }

  const { user } = session || {};

  return (
    <main className="">
      <section className="flex items-center gap-1 px-2 py-5">
        <Avatar className="size-16">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>
            <UserIcon className="size-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-medium text-sm sm:text-lg">{user?.name}</p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            {user?.email}
          </p>
        </div>
      </section>

      <section className="flex min-h-[90vh]">
        <nav className="flex min-h-full basis-[20%] flex-col gap-2 border-r bg-secondary/10 px-2">
          {settingsLinks.map((link) => (
            <Link
              activeProps={{
                className: "bg-muted text-primary!",
              }}
              className="flex items-center gap-2 rounded-md p-2 text-primary/90 text-sm hover:bg-muted"
              key={link.path}
              to={link.path}
            >
              <link.icon className="size-4 text-muted-foreground" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div>
          <Outlet />
        </div>
      </section>
    </main>
  );
}
