import type { User } from "better-auth";
import {
  BoltIcon,
  ChartNetwork,
  ChevronDownIcon,
  Sparkles,
  UserRoundIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProfileMenuLogout } from "./profile-menu-logout";

type ProfileMenuProps = {
  userInfo: User;
};

export async function ProfileMenu({ userInfo }: ProfileMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <Avatar>
          <AvatarImage
            src={userInfo.image || "/default-avatar.png"}
            alt={
              userInfo.name ? `${userInfo.name}'s profile image` : "User avatar"
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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex min-w-0 items-center gap-2">
          <div className="w-fit rounded-full bg-secondary p-2">
            <UserRoundIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <span className="truncate font-medium text-foreground text-sm">
              {userInfo.name}
            </span>
            <span className="truncate font-normal text-muted-foreground text-xs">
              {userInfo.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoltIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Configurações</span>
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
