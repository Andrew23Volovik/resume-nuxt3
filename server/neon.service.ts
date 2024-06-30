import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const { pgUser, pgPassword, pgHost, pgDatabase } = useRuntimeConfig();

const sql = neon(`postgresql://${pgUser}:${pgPassword}@${pgHost}/${pgDatabase}?sslmode=require`);
export const db = drizzle(sql);
