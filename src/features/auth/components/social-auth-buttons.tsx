"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

const SOCIAL_ICONS_SIZE = 16;

export function SocialAuthButtons() {
  return (
    <div className="grid gap-2">
      <Button
        variant="outline"
        className="w-full"
      >
        <Image
          src="/google.svg"
          alt="Google brand"
          width={SOCIAL_ICONS_SIZE}
          height={SOCIAL_ICONS_SIZE}
        />
        Entrar com Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
      >
        <Image
          src="/github_dark.svg"
          alt="Github brand"
          width={SOCIAL_ICONS_SIZE}
          height={SOCIAL_ICONS_SIZE}
        />
        Entrar com Github
      </Button>
    </div>
  );
}
