import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import {
  BoltIcon,
  ChartNetwork,
  ChevronDownIcon,
  RotateCcw,
  Sparkles,
  UserRoundIcon,
} from "lucide-react";
import { headers } from "next/headers";
import { ProfileMenuLogout } from "./profile-menu-logout";

export async function ProfileMenu() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    console.log({ session });

    return (
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full"
      >
        <span className="sr-only">
          Error loading profile. Please try again.
        </span>
        <RotateCcw className="size-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 hover:bg-transparent"
        >
          <Avatar>
            <AvatarImage
              src={session.user.image || "/default-avatar.png"}
              alt={
                session.user.name
                  ? `${session.user.name}'s profile image`
                  : "User avatar"
              }
              className="rounded-full"
            />
            <AvatarFallback>
              <UserRoundIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
            </AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate font-medium text-foreground text-sm">
            {session.user.name}
          </span>
          <span className="truncate font-normal text-muted-foreground text-xs">
            {session.user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoltIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ChartNetwork
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Activity Log</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Sparkles
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Upgrade to Premium</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <ProfileMenuLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
