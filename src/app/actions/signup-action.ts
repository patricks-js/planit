"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function signupAction(prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
    asResponse: true,
  });

  const data = await response.json();
  console.log(data);

  redirect("/inbox");
}
