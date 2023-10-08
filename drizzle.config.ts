import { Config } from 'drizzle-kit';

export default {
  schema: './db/schema/*.ts',
  out: './db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: 'libsql://resume-andrew23volovik.turso.io',
    authToken:
      'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTAyVDEwOjIyOjI5Ljc4NTIyNTkxNVoiLCJpZCI6IjkwYjVmYWQzLTYxMGQtMTFlZS05OTAzLWJhZmU2NjdjODUwOCJ9.ZSu8lqms8LgTu5wJvii0IhB_ZvXXilmyo8UogBPiD1GuHseuyAi2cPkKtzCVjq4xWtUHaSCJZu7FXtuH8wpaBQ',
  },
} satisfies Config;
