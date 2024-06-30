CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"title" varchar(30) NOT NULL,
	"date" varchar(20) NOT NULL,
	"description" text NOT NULL,
	"responsibility" text NOT NULL,
	CONSTRAINT "experiences_title_unique" UNIQUE("title")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	"experience_id" integer NOT NULL,
	"technology" varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "additionalData" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"experience" text NOT NULL,
	"education" text NOT NULL,
	"english" text NOT NULL,
	"ukrainian" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "paragraphs" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"paragraph" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "technologies" ADD CONSTRAINT "technologies_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experiences"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
