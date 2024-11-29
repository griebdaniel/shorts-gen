"use server";

import { db } from "@/app/db";
import { videoKinds } from "@/app/db/schema";

export async function getVideoKinds() {
  return await db.select().from(videoKinds);
}
