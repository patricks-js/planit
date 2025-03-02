import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planit - Get Early Access",
  description:
    "Boost your productivity with Planit! Join our waitlist to be the first to access AI-powered task management and time tracking.",
};

const LOGO_SIZE = 42;
const SOCIAL_ICONS_SIZE = 24;

export default function WaitListPage() {
  return (
    <div className="relative flex h-dvh items-center justify-center bg-background">
      <header className="absolute top-0 mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-10 md:px-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={LOGO_SIZE}
          height={LOGO_SIZE}
        />
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/patricks-js/planit"
            target="_blank"
          >
            <Image
              src="/github_dark.svg"
              alt="Github brand"
              width={SOCIAL_ICONS_SIZE}
              height={SOCIAL_ICONS_SIZE}
              className="opacity-80 duration-200 hover:opacity-100"
            />
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 md:px-6">
        <div className="max-w-xl text-center">
          <h5 className="mb-2 text-muted-foreground text-xs md:text-base">
            🚀 Aumente sua produtividade com o <strong>Planit!</strong>
          </h5>
          <h1 className="mb-4 bg-gradient-to-br from-neutral-400 to-black bg-clip-text font-semibold text-3xl text-transparent tracking-tight md:text-5xl dark:from-white dark:to-neutral-600">
            Entre na Lista de Espera para o Planit
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Descubra um novo jeito de organizar suas tarefas e acompanhar seu
            tempo sem esforço. Seja um dos primeiros a testar o Planit e otimize
            seu fluxo de trabalho como nunca antes.
          </p>
        </div>
        <form>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Your email address"
              className="h-12 text-base placeholder:text-base"
            />
            <Button
              size="lg"
              className="h-12"
            >
              Join Waitlist
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export function TextGradient() {
  return (
    <h1 className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text font-semibold text-base text-transparent dark:from-white dark:to-neutral-600">
      Text Gradient
    </h1>
  );
}
