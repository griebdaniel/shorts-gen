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

export const backgroundMusic = pgTable("background_music", {
  musicId: serial("music_id").primaryKey(),
  musicLabel: text("music_label").notNull(),
  musicUrl: varchar("music_url", { length: 256 }).notNull(),
});

export const fontStyles = pgTable("font_styles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  fontFamily: text("font_family").notNull(),
  fontWeight: text("font_weight").notNull(),
  sampleText: text("sample_text").notNull().default("Your Video Title"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const overlays = pgTable("overlays", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const videoKinds = pgTable("video_kinds", {
  id: serial("id").primaryKey(),
  value: text("value").notNull(),
  label: text("label").notNull(),
});

// For TypeScript type safety
export type Voice = typeof voices.$inferSelect;
export type InsertVoice = typeof voices.$inferInsert;
export type Style = typeof styles.$inferSelect;
export type BackgroundMusic = typeof backgroundMusic.$inferSelect;
export type InsertBackgroundMusic = typeof backgroundMusic.$inferInsert;
export type FontStyle = typeof fontStyles.$inferSelect;
export type Overlay = typeof overlays.$inferSelect;
export type VideoKind = typeof videoKinds.$inferSelect;
