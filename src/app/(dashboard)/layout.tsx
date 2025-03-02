import { Header } from "@/components/header";
import Submenu from "@/components/submenu";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Planit - App",
  description:
    "Planit is a task management app that helps you stay organized and productive.",
};

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
