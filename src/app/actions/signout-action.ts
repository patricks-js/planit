"use server";

import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signOutAction = actionClient.action(async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
});
