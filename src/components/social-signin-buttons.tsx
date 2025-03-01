"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "./ui/button";

const SOCIAL_ICONS_SIZE = 20;

export function SocialSignInButtons() {
  async function handleGoogleAuth() {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  async function handleGithubAuth() {
    await authClient.signIn.social({
      provider: "github",
    });
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        type="button"
        variant="secondary"
        size="lg"
        onClick={handleGoogleAuth}
        className="w-full"
      >
        <Image
          src="/google.svg"
          alt="Google brand"
          width={SOCIAL_ICONS_SIZE}
          height={SOCIAL_ICONS_SIZE}
        />
      </Button>
      <Button
        type="button"
        variant="secondary"
        size="lg"
        onClick={handleGithubAuth}
        className="w-full"
      >
        <Image
          src="/github_dark.svg"
          alt="Github brand"
          width={SOCIAL_ICONS_SIZE}
          height={SOCIAL_ICONS_SIZE}
        />
      </Button>
    </div>
  );
}
