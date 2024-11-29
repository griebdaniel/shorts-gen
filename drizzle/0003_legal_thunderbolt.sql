CREATE TABLE IF NOT EXISTS "font_styles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image_url" text NOT NULL,
	"font_family" text NOT NULL,
	"font_weight" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
