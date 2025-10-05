import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import { schema } from "./schema";

export async function getDb() {
  // Retrieves Cloudflare-specific context, including environment variables and bindings
  const { env } = await getCloudflareContext({ async: true });

  // Initialize Drizzle with your D1 binding (e.g., "DB" or "DATABASE" from wrangler.toml)
  return drizzle((env as CloudflareBindings).REAM_BACKEND_DB, {
    // Ensure "DATABASE" matches your D1 binding name in wrangler.toml
    schema,
    logger: true, // Optional
  });
}
