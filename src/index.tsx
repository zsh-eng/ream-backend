import { Hono } from "hono";
import { renderer } from "./renderer";
import { createAuth } from "@/auth"; // Adjust path to your auth/index.ts

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  const auth = createAuth();
  return auth.handler(c.req.raw);
});

export default app;
