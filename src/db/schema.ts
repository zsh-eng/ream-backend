import * as authSchema from "@/db/auth-schema"; // This will be generated in a later step

// Combine all schemas here for migrations
export const schema = {
  ...authSchema,
  // other tables
} as const;

export * from "./auth-schema";
