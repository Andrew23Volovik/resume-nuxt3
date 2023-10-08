import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const paragraphs = sqliteTable('paragraphs', {
  id: integer('id').primaryKey(),
  paragraph: text('paragraph').notNull(),
});

export type Paragraph = InferSelectModel<typeof paragraphs>;
export type InsertParagraph = InferInsertModel<typeof paragraphs>;

export const additionalData = sqliteTable('additionalData', {
  id: integer('id').primaryKey(),
  Experience: text('experience').notNull(),
  Education: text('education').notNull(),
  English: text('english').notNull(),
  Ukrainian: text('ukrainian').notNull(),
});

export type AdditionalData = InferSelectModel<typeof additionalData>;
export type InsertAdditionalData = InferInsertModel<typeof additionalData>;

export type AdditionalDataReturn = Omit<AdditionalData, 'id'>;
