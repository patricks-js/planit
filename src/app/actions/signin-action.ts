"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function signinAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  redirect("/inbox");
}
