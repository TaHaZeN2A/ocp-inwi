CREATE TABLE IF NOT EXISTS "pcap_file" (
	"id" serial PRIMARY KEY NOT NULL,
	"Uploadthing_url" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" text NOT NULL
);
