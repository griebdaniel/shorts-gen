"use server";

import { db } from "@/app/db";
import { overlays } from "@/app/db/schema";

export async function getOverlays() {
  return await db.select().from(overlays);
}
