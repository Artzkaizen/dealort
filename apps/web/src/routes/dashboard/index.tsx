import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  beforeLoad: async () => {
    const session = await authClient.getSession();
    // if (!session.data) {
    //   redirect({
    //     to: "/login",
    //     throw: true,
    //   });
    // }
    return { session };
  },
});

function RouteComponent() {
  // const { session } = Route.useRouteContext();
  //
  // const privateData = useQuery(orpc.privateData.queryOptions());

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <p>Welcome {session.data?.user.name}</p>
      <p>API: {privateData.data?.message}</p> */}
    </div>
  );
}
