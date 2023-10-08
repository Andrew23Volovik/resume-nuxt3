import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const experiences = sqliteTable('experiences', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  date: text('date').notNull(),
  descr: text('descr').notNull(),
  responsibility: text('responsibility').notNull(),
  technologies: text('technologies', { mode: 'json' }).$type<string[]>().notNull(),
});

export type Experiences = InferSelectModel<typeof experiences>;
export type InsertExperiences = InferInsertModel<typeof experiences>;
