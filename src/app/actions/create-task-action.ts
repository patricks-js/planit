"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { authActionClient } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  title: zfd.text(z.string().min(3)),
  description: zfd.text(z.coerce.string()).optional(),
  dueDate: zfd.text(z.coerce.date()),
});

export const createTaskAction = authActionClient
  .schema(schema)
  .action(async ({ parsedInput, ctx }) => {
    const { title, description, dueDate } = parsedInput;

    const [task] = await db
      .insert(tasks)
      .values({
        title,
        description: description,
        dueDate: dueDate,
        userId: ctx.userId,
      })
      .returning({
        id: tasks.id,
        title: tasks.title,
        dueAt: tasks.dueDate,
        status: tasks.status,
        userId: tasks.userId,
      });

    revalidatePath("/(dashboard)/", "layout");

    return { task };
  });
