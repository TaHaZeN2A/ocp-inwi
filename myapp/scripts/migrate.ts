import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate} from "drizzle-orm/neon-http/migrator";

config({ path: ".env" });

export const sql = neon(process.env.DATABASE!);
export const db = drizzle(sql);

const main = async () => {
    try {
        await migrate(db, { migrationsFolder:".drizzle"});
    }
    catch (e) {
        console.error("Error migrating database", e);
        process.exit(1);
    }
};
main();