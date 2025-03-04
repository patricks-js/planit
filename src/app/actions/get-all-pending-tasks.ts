"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq, not } from "drizzle-orm";
import { headers } from "next/headers";

export async function getAllPendingTasks() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const userTasks = await db
    .select()
    .from(tasks)
    .where(
      and(eq(tasks.userId, session.user.id), not(eq(tasks.status, "done"))),
    );

  return {
    userTasks,
  };
}
