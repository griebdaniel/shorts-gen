ALTER TABLE "font_styles" ADD COLUMN "sample_text" text DEFAULT 'Your Video Title' NOT NULL;--> statement-breakpoint
ALTER TABLE "font_styles" DROP COLUMN IF EXISTS "image_url";