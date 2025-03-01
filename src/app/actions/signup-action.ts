"use server";

import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  name: zfd.text(z.string().min(5)),
  email: zfd.text(z.string().email()),
  password: zfd.text(z.string().min(8).max(100)),
});

export const signUpAction = actionClient
  .schema(schema)
  .stateAction(async ({ parsedInput }) => {
    const { name, email, password } = parsedInput;

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    redirect("/inbox");
  });
