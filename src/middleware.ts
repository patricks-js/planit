import { getSessionCookie } from "better-auth";
import { type NextRequest, NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];

// ! fix: enhance protected/public routes and adjust redirects

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const pathname = request.nextUrl.pathname;

  if (sessionCookie && authRoutes.some((route) => route === pathname)) {
    return NextResponse.redirect(new URL("/inbox", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/inbox", ...authRoutes],
};
