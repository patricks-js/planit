import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className="flex h-dvh items-center justify-center">{children}</main>
  );
}
