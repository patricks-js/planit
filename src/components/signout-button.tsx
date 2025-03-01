"use client";

import { signOutAction } from "@/app/actions/signout-action";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function SignOutButton() {
  return (
    <Button
      variant="secondary"
      onClick={() => signOutAction()}
      className="cursor-pointer rounded-full"
    >
      <LogOut
        size={16}
        className="opacity-60"
      />
    </Button>
  );
}
