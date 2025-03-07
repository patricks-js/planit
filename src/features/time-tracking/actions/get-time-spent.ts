"use server";

import { db } from "@/db";
import { insertTimeEntrySchema, timeEntries } from "@/db/schema/time-entries";
import { authActionClient } from "@/lib/safe-action";
import { and, eq } from "drizzle-orm";

export const getTaskTimeSpent = authActionClient
  .schema(insertTimeEntrySchema.pick({ taskId: true }))
  .action(async ({ parsedInput, ctx: { userId } }) => {
    const { taskId } = parsedInput;

    const entries = await db
      .select({ durationMs: timeEntries.durationMs })
      .from(timeEntries)
      .where(
        and(eq(timeEntries.userId, userId), eq(timeEntries.taskId, taskId)),
      );

    return entries.reduce((total, entry) => total + entry.durationMs, 0);
  });
