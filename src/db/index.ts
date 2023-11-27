import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

neonConfig.fetchConnectionCache = true;

export * from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
