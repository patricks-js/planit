import { pgTable } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { user } from "./auth";

export const tasks = pgTable("tasks", (t) => ({
  id: t.serial().primaryKey().notNull(),
  ownerId: t
    .text()
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  title: t.text().notNull(),
  completed: t.boolean().default(false).notNull(),
  dueAt: t.timestamp("due_at").notNull(),
}));

export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
export const updateTaskSchema = createUpdateSchema(tasks);
