"use server";

import { db } from "@/app/db";
import { styles } from "@/app/db/schema";

export async function getStyles() {
  return await db.select().from(styles);
}
