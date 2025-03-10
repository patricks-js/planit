"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const menuNavigation = [
  {
    label: "Inbox",
    path: "/inbox",
  },
  {
    label: "Hoje",
    path: "/today",
  },
  {
    label: "Algum dia",
    path: "/someday",
  },
  {
    label: "Completas",
    path: "/completed",
  },
  // * Feature
  // {
  //   label: "Projects",
  //   path: "/projects",
  // },
];

export default function Submenu() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="border-b bg-card">
      <nav className="px-6">
        <ul className="flex items-baseline gap-2 text-sm">
          {menuNavigation.map((item) => (
            <li
              key={item.path}
              className="relative py-1"
            >
              <Button
                variant="ghost"
                asChild
              >
                <Link
                  href={item.path}
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground",
                    isActive(item.path) && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </Button>
              <div
                className={cn(
                  "-bottom-px absolute left-0 hidden h-0.5 w-full bg-primary",
                  isActive(item.path) && "block",
                )}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
