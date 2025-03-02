"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { authActionClient } from "@/lib/safe-action";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  taskId: z.coerce.number().int().positive(),
});

export const markAsComplete = authActionClient
  .schema(schema)
  .action(async ({ parsedInput, ctx: { userId } }) => {
    const { taskId } = parsedInput;

    await db
      .update(tasks)
      .set({
        completed: true,
      })
      .where(and(eq(tasks.id, taskId), eq(tasks.ownerId, userId)));

    revalidatePath("/(dashboard)/", "layout");
  });
