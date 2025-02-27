import { Header } from "@/components/header";
import Submenu from "@/components/submenu";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className="h-dvh">
        <Submenu />
        <div className="px-6 py-8">{children}</div>
      </main>
    </>
  );
}
