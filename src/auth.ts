import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";

export function createAuth(d1: D1Database) {
  const db = drizzle(d1);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    // ... other config
  });
}
