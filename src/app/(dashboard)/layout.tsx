import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className="h-dvh">{children}</main>
    </>
  );
}
