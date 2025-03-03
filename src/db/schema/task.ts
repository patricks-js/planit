import { pgEnum, pgTable } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import type { z } from "zod";

import { user } from "./auth";

// TODO: add priority based on the Eisenhower matrix
export const statusEnum = pgEnum("task_status", ["todo", "inProgress", "done"]);

export const tasks = pgTable("tasks", (t) => ({
  id: t.integer().generatedAlwaysAsIdentity().primaryKey().notNull(),
  userId: t
    .text()
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  title: t.text().notNull(),
  description: t.text(),
  status: statusEnum().default("todo").notNull(),
  dueDate: t.timestamp(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t.timestamp().defaultNow().notNull(),
}));

export const insertTaskSchema = createInsertSchema(tasks).omit({
  userId: true,
});
export type TInsertTaskSchema = z.infer<typeof insertTaskSchema>;

export const selectTaskSchema = createSelectSchema(tasks);
export type TSelectTaskSchema = z.infer<typeof selectTaskSchema>;

export const updateTaskSchema = createUpdateSchema(tasks);
export type TUpdateTaskSchema = z.infer<typeof updateTaskSchema>;
