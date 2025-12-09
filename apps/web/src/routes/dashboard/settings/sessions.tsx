import {
  createFileRoute,
  useLoaderData,
  useRouter,
} from "@tanstack/react-router";
import type { Session } from "better-auth";
import { DoorOpenIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { UAParser } from "ua-parser-js";
import { BetterAuthActionButton } from "@/components/better-auth-action-button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/dashboard/settings/sessions")({
  loader: async () => {
    const sessions = await authClient.listSessions();
    const currentSession = (await authClient.getSession()).data?.session;
    const otherSessions = sessions.data?.filter(
      (session) => session.token !== currentSession?.token
    );

    return { currentSession, otherSessions };
  },
  component: RouteComponent,
});

function getBrowserInfo(userAgentInfo: UAParser.IResult) {
  if (!userAgentInfo) return "Unknown Device";

  if (userAgentInfo.browser.name === null && userAgentInfo.os.name === null) {
    return `${userAgentInfo.browser.name} ${userAgentInfo.browser.version}`;
  }

  if (userAgentInfo.browser.name === null) {
    return userAgentInfo.os.name;
  }
  if (userAgentInfo.os.name === null) {
    return userAgentInfo.browser.name;
  }

  return `${userAgentInfo.browser.name} ${userAgentInfo.os.name}`;
}

function RouteComponent() {
  const router = useRouter();
  const { refetch } = authClient.useSession();
  const { currentSession, otherSessions } = useLoaderData({
    from: "/dashboard/settings/sessions",
  });

  const currentSessionUserAgent = UAParser(currentSession?.userAgent || "");
  const currentSessionBrowserInfo = getBrowserInfo(currentSessionUserAgent);

  function revokeOtherSessions() {
    return authClient.revokeOtherSessions(undefined, {
      onError: (error) => {
        toast.error(
          error.error.message ||
            error.error.statusText ||
            "Something went wrong"
        );
      },
      onSuccess: () => {
        toast.success("Other sessions revoked");
        router.invalidate();
        refetch();
      },
    });
  }

  async function revokeSession(token: string) {
    return await authClient.revokeSession(
      {
        token,
      },
      {
        onError: (error) => {
          toast.error(
            error.error.message ||
              error.error.statusText ||
              "Something went wrong"
          );
        },
        onSuccess: () => {
          toast.success("Session revoked");
          router.invalidate();
          refetch();
        },
      }
    );
  }

  return (
    <div className="space-y-4">
      <section className="flex justify-between px-2 py-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg sm:text-lg">
            {currentSessionBrowserInfo}
          </h2>

          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-xs">
              <strong>Created At:</strong>{" "}
              {formatDate(new Date(currentSession?.createdAt || ""))}
            </p>
            <p className="text-muted-foreground text-xs">
              <strong>Expires At:</strong>{" "}
              {formatDate(new Date(currentSession?.expiresAt || ""))}
            </p>
          </div>
        </div>

        <Badge className="size-fit">Current</Badge>
      </section>

      <Separator />

      <section className="space-y-4 px-2">
        {otherSessions && otherSessions?.length > 0 && (
          <>
            <div className="flex justify-between gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg sm:text-lg">Other Sessions</h2>
                <p className="text-muted-foreground text-xs">
                  View other sessions that are currently active.
                </p>
              </div>

              <BetterAuthActionButton
                action={() => revokeOtherSessions()}
                className="size-fit cursor-pointer rounded-full"
                requireAreYouSure
                variant="destructive"
              >
                <DoorOpenIcon className="size-4" />{" "}
                <span className="text-xs max-sm:hidden">Revoke All</span>
              </BetterAuthActionButton>
            </div>

            <div className="flex flex-col gap-2">
              {otherSessions?.map((session: Session) => (
                <Card
                  className="flex! flex-row! justify-between"
                  key={session.id}
                >
                  <CardHeader className="flex-1">
                    <CardTitle>
                      {getBrowserInfo(UAParser(session.userAgent || ""))}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-px text-xs">
                      <p>
                        <strong>Created At:</strong>{" "}
                        {formatDate(new Date(session.createdAt || ""))}
                      </p>
                      <p>
                        <strong>Expires At:</strong>{" "}
                        {formatDate(new Date(session.expiresAt || ""))}
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BetterAuthActionButton
                      action={() => revokeSession(session.token || "")}
                      aria-label="Revoke Session"
                      className="size-fit cursor-pointer rounded-full"
                      requireAreYouSure
                      variant="destructive"
                    >
                      <TrashIcon className="size-4" />
                    </BetterAuthActionButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {otherSessions?.length === 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">
              No other sessions found.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
