import {  pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";


export const test = pgTable("test", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
})

export const pcap_file = pgTable("pcap_file", {
id: serial("id").primaryKey(),
name: text("name").notNull(),
Uploadthing_url: text("Uploadthing_url").notNull(),
createdAt : timestamp("createdAt").notNull().defaultNow(),
userId: text("userId").notNull(),
});

export const insertPcapSchema = createInsertSchema(pcap_file);