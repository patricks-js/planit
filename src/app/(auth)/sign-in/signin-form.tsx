"use client";

import { signinAction } from "@/app/actions/signin-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export function SignInForm() {
  const [, action, isPending] = useActionState(signinAction, null);

  return (
    <form
      action={action}
      className="space-y-4"
    >
      <Label className="flex flex-col items-start gap-2">
        Email
        <Input
          name="email"
          placeholder="your@email.com"
          type="email"
        />
      </Label>
      <Label className="flex flex-col items-start gap-2">
        Password
        <Input
          name="password"
          placeholder="Strong password"
          type="password"
        />
      </Label>
      <Button
        size="lg"
        disabled={isPending}
        className="w-full"
      >
        Sign in
      </Button>
    </form>
  );
}
