CREATE TABLE IF NOT EXISTS "analysis_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"fileId" serial NOT NULL,
	"analysisData" text NOT NULL,
	"createdAt" timestamp (0) DEFAULT '2024-08-28T14:19:00.000Z' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chart_data" (
	"id" serial PRIMARY KEY NOT NULL,
	"labels" text[] NOT NULL,
	"datasets" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dataset" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"data" integer[] NOT NULL,
	"borderColor" text NOT NULL,
	"backgroundColor" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "test";--> statement-breakpoint
ALTER TABLE "pcap_file" ALTER COLUMN "createdAt" SET DEFAULT '2024-08-28T14:19:00.000Z';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "analysis_result" ADD CONSTRAINT "analysis_result_fileId_pcap_file_id_fk" FOREIGN KEY ("fileId") REFERENCES "pcap_file"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
