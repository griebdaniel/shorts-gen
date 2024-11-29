"use server";

import { db } from "@/app/db";
import { backgroundMusic } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function getBackgroundMusic() {
  return await db.select().from(backgroundMusic);
}

export async function getBackgroundMusicById(id: number) {
  const result = await db
    .select()
    .from(backgroundMusic)
    .where(eq(backgroundMusic.musicId, id));
  return result[0];
}

export async function createBackgroundMusic(music: {
  musicLabel: string;
  musicUrl: string;
}) {
  return await db.insert(backgroundMusic).values(music).returning();
}
