"use client";

import { authClient } from "@/lib/auth-client";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function ProfileMenuLogout() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }

  return (
    <DropdownMenuItem onClick={() => handleSignOut()}>
      <LogOutIcon
        size={16}
        className="opacity-60"
        aria-hidden="true"
      />
      <span>Logout</span>
    </DropdownMenuItem>
  );
}
