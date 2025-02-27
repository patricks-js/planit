import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return <main className="grid h-dvh place-content-center">{children}</main>;
}
