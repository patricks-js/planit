import { pgTable } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import type { z } from "zod";

import { user } from "./auth";
import { tasks } from "./task";

export const timeEntries = pgTable("time_entries", (t) => ({
  id: t.integer().generatedAlwaysAsIdentity().primaryKey().notNull(),
  userId: t
    .text()
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  taskId: t
    .integer()
    .references(() => tasks.id, { onDelete: "cascade" })
    .notNull(),
  durationMs: t.integer().default(0).notNull(),
  startTime: t.timestamp().notNull(),
  endTime: t.timestamp(),
}));

export const insertTimeEntrySchema = createInsertSchema(timeEntries);
export type TInsertTimeEntrySchema = z.infer<typeof insertTimeEntrySchema>;

export const selectTimeEntrySchema = createSelectSchema(timeEntries);
export type TSelectTimeEntrySchema = z.infer<typeof selectTimeEntrySchema>;

export const updateTimeEntrySchema = createUpdateSchema(timeEntries);
export type TUpdateTimeEntrySchema = z.infer<typeof updateTimeEntrySchema>;
