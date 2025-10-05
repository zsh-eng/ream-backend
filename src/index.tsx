import { Hono } from "hono";
import { renderer } from "./renderer";
import { createAuth } from "@/auth"; // Adjust path to your auth/index.ts

const app = new Hono<{
  Bindings: CloudflareBindings;
}>();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  // TODO: how to resolve this type error?
  const auth = createAuth(c.env, c.req.raw.cf);
  return auth.handler(c.req.raw);
});

export default app;
