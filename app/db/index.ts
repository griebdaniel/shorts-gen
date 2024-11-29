import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

// It's better to use environment variables for the connection string
const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://shorts_gen_owner:WEbXux63ykIa@ep-dark-violet-a5cijgtk.us-east-2.aws.neon.tech/shorts_gen?sslmode=require";

const pool = new Pool({ connectionString });

export const db = drizzle(pool);
