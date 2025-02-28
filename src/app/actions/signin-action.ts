"use server";

import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(z.string().min(8).max(100)),
});

type Credentials = z.infer<typeof schema>;

export const signInAction = actionClient
  .schema(schema)
  .stateAction<{ prevState?: Credentials; credentials: Credentials }>(
    async ({ parsedInput }) => {
      const { email, password } = parsedInput;

      await auth.api.signInEmail({
        body: {
          email,
          password,
        },
      });

      redirect("/inbox");
    },
  );
