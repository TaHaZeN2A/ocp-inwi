ALTER TABLE "analysis_result" ALTER COLUMN "createdAt" SET DEFAULT '2024-08-28T15:55:00.000Z';--> statement-breakpoint
ALTER TABLE "pcap_file" ALTER COLUMN "createdAt" SET DEFAULT '2024-08-28T15:55:00.000Z';--> statement-breakpoint
ALTER TABLE "pcap_file" ADD COLUMN "file_size" integer NOT NULL;