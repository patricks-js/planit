"use server";

import { db } from "@/db";
import { insertTimeEntrySchema, timeEntries } from "@/db/schema/time-entries";
import { authActionClient } from "@/lib/safe-action";

export const startTimeEntryAction = authActionClient
  .schema(insertTimeEntrySchema.pick({ taskId: true }))
  .action(async ({ parsedInput, ctx: { userId } }) => {
    await db.insert(timeEntries).values({
      userId,
      taskId: parsedInput.taskId,
      startTime: new Date(),
    });
  });
