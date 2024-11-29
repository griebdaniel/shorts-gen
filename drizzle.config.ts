import type { Config } from "drizzle-kit";

export default {
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-dark-violet-a5cijgtk.us-east-2.aws.neon.tech",
    user: "shorts_gen_owner",
    password: "WEbXux63ykIa",
    database: "shorts_gen",
    ssl: true,
  },
} satisfies Config;
