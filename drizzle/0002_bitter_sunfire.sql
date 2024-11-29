CREATE TABLE IF NOT EXISTS "background_music" (
	"music_id" serial PRIMARY KEY NOT NULL,
	"music_label" text NOT NULL,
	"music_url" varchar(256) NOT NULL
);
