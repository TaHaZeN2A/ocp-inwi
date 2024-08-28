import {  pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

function truncateSeconds(date: Date): Date {
    date.setSeconds(0, 0); // Set seconds and milliseconds to 0
    return date;
}


export const pcap_file = pgTable("pcap_file", {
id: serial("id").primaryKey(),
name: text("name").notNull(),
Uploadthing_url: text("Uploadthing_url").notNull(),
file_size: integer("file_size"),
createdAt: timestamp("createdAt", { precision: 0 }).notNull().default(truncateSeconds(new Date())),
userId: text("userId").notNull(),
});
export const analysis_result = pgTable("analysis_result", {
    id: serial("id").primaryKey(),
    fileId: serial("fileId").notNull().references(() => pcap_file.id),
    analysisData: text("analysisData").notNull(),
    createdAt: timestamp("createdAt", { precision: 0 }).notNull().default(truncateSeconds(new Date())),
});
export const chart_data = pgTable("chart_data", {
    id: serial("id").primaryKey(),
    labels: text("labels").array().notNull(),
    datasets: text("datasets").array().notNull(),
});
export const dataset = pgTable("dataset", {
    id: serial("id").primaryKey(),
    label: text("label").notNull(),
    data: integer("data").array().notNull(),
    borderColor: text("borderColor").notNull(),
    backgroundColor: text("backgroundColor").notNull(),
});

export const insertPcapSchema = createInsertSchema(pcap_file);