"use client";

import { signOutAction } from "@/app/actions/auth-actions";
import { LogOutIcon } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function ProfileMenuLogout() {
  return (
    <DropdownMenuItem onClick={() => signOutAction()}>
      <LogOutIcon
        size={16}
        className="opacity-60"
        aria-hidden="true"
      />
      <span>Logout</span>
    </DropdownMenuItem>
  );
}
