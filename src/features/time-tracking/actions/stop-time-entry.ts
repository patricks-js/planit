"use server";

import { db } from "@/db";
import { insertTimeEntrySchema, timeEntries } from "@/db/schema/time-entries";
import { authActionClient } from "@/lib/safe-action";
import { and, eq, isNull } from "drizzle-orm";

export const stopTimeEntryAction = authActionClient
  .schema(insertTimeEntrySchema.pick({ taskId: true }))
  .action(async ({ parsedInput, ctx: { userId } }) => {
    const { taskId } = parsedInput;

    const [activeEntry] = await db
      .select()
      .from(timeEntries)
      .where(
        and(
          eq(timeEntries.userId, userId),
          eq(timeEntries.taskId, taskId),
          isNull(timeEntries.endTime),
        ),
      )
      .limit(1);

    if (!activeEntry) return null;

    const now = new Date();
    const startedAt = new Date(activeEntry.startTime);
    const durationMs = now.getTime() - startedAt.getTime();

    await db
      .update(timeEntries)
      .set({ endTime: now, durationMs })
      .where(eq(timeEntries.id, activeEntry.id));
  });
