import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';

if(!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set. Please check your .env configuration.');
    process.exit(1);
}

export const pool = new pg.pool(
    {
        connectionString:process.env.DATABASE_URL,
    }
)

export const db = drizzle(pool);