import { pgTable, serial, timestamp, varchar, text, integer } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const experiences = pgTable('experiences', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
  title: varchar('title', { length: 30 }).notNull().unique(),
  date: varchar('date', { length: 20 }).notNull(),
  description: text('description').notNull(),
  responsibility: text('responsibility').notNull(),
});

export type Experiences = typeof experiences.$inferSelect;

export const technologies = pgTable('technologies', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at'),
  experience_id: integer('experience_id')
    .notNull()
    .references(() => experiences.id),
  technology: varchar('technology', { length: 30 }).notNull(),
});

export type Technologies = typeof technologies.$inferSelect;