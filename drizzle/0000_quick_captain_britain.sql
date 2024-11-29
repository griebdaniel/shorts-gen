CREATE TABLE IF NOT EXISTS "voices" (
	"voice_id" serial PRIMARY KEY NOT NULL,
	"voice_label" text NOT NULL,
	"voice_url" varchar(256) NOT NULL
);
