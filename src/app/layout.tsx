import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planit",
  description: "Plan your day with Planit",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "relative min-h-screen w-screen overflow-x-hidden font-sans antialiased",
          geistSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
