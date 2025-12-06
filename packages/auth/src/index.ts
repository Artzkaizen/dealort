import { passkey } from "@better-auth/passkey";
import { db } from "@dealort/db";
import * as schema from "@dealort/db/schema/auth";
import { env } from "@dealort/utils/env";
import { type BetterAuthOptions, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware } from "better-auth/api";
import { twoFactor } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { sendWelcomeEmail } from "./emails/service";

export const auth = betterAuth<BetterAuthOptions>({
  appName: "Dealort",
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  trustedOrigins: [env.CORS_ORIGIN],
  // emailAndPassword: {
  //   enabled: true,
  //   requireEmailVerification: true,
  // },
  // emailVerification: {
  //   sendOnSignUp: true,
  // },
  user: {
    additionalFields: {
      theme: {
        type: "string",
        required: true,
        defaultValue() {
          return "system";
        },
      },
    },
  },
  socialProviders: {
    google: {
      prompt: "consent",
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: () => ({
        theme: "system",
      }),
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
      mapProfileToUser: () => ({
        theme: "system",
      }),
    },
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },
  plugins: [passkey(), twoFactor(), tanstackStartCookies()],
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path.startsWith("/sign-up")) {
        const user = ctx.context.newSession?.user ?? {
          name: ctx.context.user?.name ?? "",
          email: ctx.context.user?.email ?? "",
        };
        if (user != null) {
          await sendWelcomeEmail({
            to: user.email as string,
            name: user.name as string,
          });
        }
      }
    }),
  },
  // Email notifications (welcome & security warnings) are handled via middleware
  // in apps/server/src/index.ts which intercepts auth responses
});
