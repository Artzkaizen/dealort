// dotenv.config({ path: '../../.env' });

import { createContext } from "@dealort/api/context";
import { appRouter } from "@dealort/api/routers/index";
import { auth } from "@dealort/auth";
import { env } from "@dealort/utils/env";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

// Initialize Arcjet protection

app.use(logger());

// Apply Arcjet protection to all routes
app.use("*", async (c, next) => {
  // Skip Arcjet if no key is configured (for local development)
  if (!env.ARCJET_KEY) {
    await next();
    return;
  }

  // Create adapter context for Arcjet
  let body: string | undefined;
  try {
    body = await c.req.text();
  } catch {
    body = undefined;
  }

  const decision = await aj.protect(
    {
      method: c.req.method,
      path: new URL(c.req.url).pathname,
      headers: c.req.raw.headers,
      ip:
        c.req.header("x-forwarded-for") ||
        c.req.header("x-real-ip") ||
        undefined,
      getBody: async () => body,
    },
    {}
  );
  if (decision.isDenied()) {
    return c.text("Access Denied", 403);
  }
  await next();
});

app.use(
  "*",
  cors({
    origin: env.CORS_ORIGIN || "",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c) => c.text("OK"));

export const apiHandler = new OpenAPIHandler(appRouter, {
  plugins: [
    new OpenAPIReferencePlugin({
      schemaConverters: [new ZodToJsonSchemaConverter()],
    }),
  ],
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

app.use("/*", async (c, next) => {
  const context = await createContext({ context: c });

  const rpcResult = await rpcHandler.handle(c.req.raw, {
    prefix: "/rpc",
    context,
  });

  if (rpcResult.matched) {
    return c.newResponse(rpcResult.response.body, rpcResult.response);
  }

  const apiResult = await apiHandler.handle(c.req.raw, {
    prefix: "/api-reference",
    context,
  });

  if (apiResult.matched) {
    return c.newResponse(apiResult.response.body, apiResult.response);
  }

  await next();
});

export default app;
