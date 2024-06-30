import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const paragraphs = pgTable('paragraphs', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  paragraph: text('paragraph').notNull(),
});

export type Paragraphs = typeof paragraphs.$inferSelect;

export const additionalData = pgTable('additionalData', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  Experience: text('experience').notNull(),
  Education: text('education').notNull(),
  English: text('english').notNull(),
  Ukrainian: text('ukrainian').notNull(),
});

export type AdditionalData = typeof additionalData.$inferSelect;

export type AdditionalDataReturn = Omit<AdditionalData, 'id' | 'created_at' | 'updated_at'>;
