import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const voices = pgTable("voices", {
  voiceId: serial("voice_id").primaryKey(),
  voiceLabel: text("voice_label").notNull(),
  voiceUrl: varchar("voice_url", { length: 256 }).notNull(),
});

export const styles = pgTable("styles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// For TypeScript type safety
export type Voice = typeof voices.$inferSelect;
export type InsertVoice = typeof voices.$inferInsert;
export type Style = typeof styles.$inferSelect;
