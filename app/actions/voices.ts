"use server";

import { db } from "@/app/db";
import { voices } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function getVoices() {
  return await db.select().from(voices);
}

export async function getVoiceById(id: number) {
  const result = await db.select().from(voices).where(eq(voices.voiceId, id));
  return result[0];
}

export async function createVoice(voice: {
  voiceLabel: string;
  voiceUrl: string;
}) {
  return await db.insert(voices).values(voice).returning();
}
