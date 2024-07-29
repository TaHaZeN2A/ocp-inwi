import { config } from 'dotenv';
import { defineConfig} from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
    schema: "./database/schema.ts",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE!,

    },
    verbose: true,
    strict: true,
});