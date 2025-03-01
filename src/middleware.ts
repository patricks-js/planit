import { getSessionCookie } from "better-auth";
import { type NextRequest, NextResponse } from "next/server";
import { createRouteMatcher } from "./lib/utils";

const isProtectedRoute = createRouteMatcher([
  "/inbox",
  "/today",
  "/someday",
  "/completed",
  "/projects",
]);

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie && isProtectedRoute(request)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (sessionCookie && !isProtectedRoute(request)) {
    return NextResponse.redirect(new URL("/inbox", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
