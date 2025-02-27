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
        {children}
      </main>
    </>
  );
}
