import { clsx, type ClassValue } from "clsx";
import type { NextRequest } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createRouteMatcher = (routes: string[]) => {
  return (req: NextRequest) => {
    return routes.some((pattern) =>
      new RegExp(`^${pattern}$`).test(req.nextUrl.pathname),
    );
  };
};
