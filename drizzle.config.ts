import { Config } from 'drizzle-kit';
import 'dotenv/config';

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;
if (!PGPASSWORD && !PGUSER && !PGDATABASE && !PGPASSWORD) {
  throw new Error('Missing environment variables');
}
export default {
  schema: './db/schema/*.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: PGHOST as string,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE as string,
    ssl: true,
  },
} satisfies Config;
