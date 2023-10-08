import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const { dataBaseURL, dataBaseAuth } = useRuntimeConfig();

export const client = createClient({
  url: dataBaseURL,
  authToken: dataBaseAuth,
});

export const db = drizzle(client);
