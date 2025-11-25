import "dotenv/config";
import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod/v4";

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]).optional(),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    CORS_ORIGIN: z.string().min(1),
    DATABASE_URL: z.string().startsWith("file:").min(1), // Use startsWith to validate the prefix
  },

  client: {
    // NEXT_PUBLIC_VITE_SERVER_URL: z.string().min(1),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_VITE_SERVER_URL: process.env.VITE_SERVER_URL,
    // NEXT_PUBLIC_SUBDOMAIN: process.env.NEXT_PUBLIC_SUBDOMAIN,
  },
});
