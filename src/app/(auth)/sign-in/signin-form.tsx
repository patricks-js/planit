"use client";

import { signInAction } from "@/app/actions/signin-action";
import { TextShine } from "@/components/text-shine";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import { useStateAction } from "next-safe-action/stateful-hooks";

export function SignInForm() {
  const { execute, isPending } = useStateAction(signInAction, {});

  return (
    <form
      action={execute}
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
        {isPending ? (
          <>
            <Loader className="animate-spin" />
            <TextShine as="span">Logging in...</TextShine>
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
