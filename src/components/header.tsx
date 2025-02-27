import { Badge } from "@/components/ui/badge";
import { Bell, Feather, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchCommandBox } from "./search-command-box";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

const LOGO_SIZE = 24;

export function Header() {
  return (
    <header className="flex items-center justify-between bg-card px-6 pt-4 pb-2">
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={LOGO_SIZE}
          height={LOGO_SIZE}
        />
        <h3 className="font-medium text-sm tracking-tight">
          John Doe's workspace
          <Badge
            variant="secondary"
            className="ml-1.5"
          >
            <Feather
              className="-ms-0.5 opacity-60"
              size={12}
              aria-hidden="true"
            />
            Free plan
          </Badge>
        </h3>
      </Link>
      <SearchCommandBox />
      <div className="flex items-center gap-4">
        <Button>Add new</Button>
        <Button
          variant="secondary"
          className="rounded-full"
        >
          <Bell
            size={16}
            className="opacity-60"
          />
        </Button>
        <Avatar className="size-9">
          <AvatarFallback>
            <UserRoundIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
