"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function getTodayTasks() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const todayTasks = await db
    .select()
    .from(tasks)
    .where(
      and(
        eq(tasks.userId, session.user.id),
        eq(tasks.dueDate, new Date(new Date().toISOString().split("T")[0])),
      ),
    );

  return {
    todayTasks,
  };
}
