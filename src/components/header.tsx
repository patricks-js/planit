import type { Session, User } from "better-auth";
import { Feather } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { auth } from "@/lib/auth";
import { ProfileMenu } from "./profile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Skeleton } from "./ui/skeleton";

type AuthSession = {
  session: Session;
  user: User;
} | null;

type SessionAware = {
  sessionPromise: Promise<AuthSession>;
};

const LOGO_SIZE = 32;

export async function Header() {
  const sessionPromise = auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="flex items-center justify-between bg-card px-6 pt-4 pb-2">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
        </Link>
        <div className="h-5 w-px rotate-12 bg-muted-foreground/40" />
        <SessionAwareTitle sessionPromise={sessionPromise} />
      </div>
      <div className="flex items-center gap-4">
        {/* TODO: Notification  */}
        <ThemeSwitcher />
        <SessionAwareProfile sessionPromise={sessionPromise} />
      </div>
    </header>
  );
}

async function SessionAwareTitle({ sessionPromise }: SessionAware) {
  const session = await sessionPromise;

  if (!session || !session.user) {
    return <Skeleton className="h-4 w-36" />;
  }

  return (
    <div className="flex items-center gap-2">
      <h3 className="font-medium text-sm tracking-tight">
        {session.user.name}'s workspace
      </h3>
      <Badge
        variant="secondary"
        className="ml-1.5"
      >
        <Feather
          className="-ms-0.5 opacity-60"
          size={12}
          aria-hidden="true"
        />
        Plano Grátis
      </Badge>
    </div>
  );
}

async function SessionAwareProfile({ sessionPromise }: SessionAware) {
  const session = await sessionPromise;

  if (!session || !session.user) {
    return <Skeleton className="size-10 rounded-full" />;
  }

  return <ProfileMenu userInfo={session.user} />;
}
