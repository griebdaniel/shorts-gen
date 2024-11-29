"use server";

import { db } from "@/app/db";
import { fontStyles } from "@/app/db/schema";

export async function getFontStyles() {
  return await db.select().from(fontStyles);
}
