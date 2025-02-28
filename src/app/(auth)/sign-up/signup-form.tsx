"use client";

import { signUpAction } from "@/app/actions/signup-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import { useStateAction } from "next-safe-action/stateful-hooks";

export function SignUpForm() {
  const { execute, isPending } = useStateAction(signUpAction, {});

  return (
    <form
      action={execute}
      className="space-y-4"
    >
      <Label className="flex w-full flex-col items-start gap-2">
        Full Name
        <Input
          name="name"
          placeholder="John Doe"
        />
      </Label>
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
        type="submit"
        disabled={isPending}
        className="w-full"
      >
        {isPending ? <Loader className="animate-spin" /> : "Sign up"}
      </Button>
    </form>
  );
}
