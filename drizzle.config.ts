import { env } from "@/lib/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  verbose: process.env.NODE_ENV === "development",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
