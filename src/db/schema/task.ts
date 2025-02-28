import { pgTable } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const tasks = pgTable("tasks", (t) => ({
  id: t.serial().primaryKey().notNull(),
  ownerId: t
    .text()
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  title: t.text().notNull(),
  completed: t.boolean().default(false),
  dueAt: t.timestamp("due_at"),
}));
