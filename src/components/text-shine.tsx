"use client";

import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type TextShineProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
} & PropsWithChildren;

export function TextShine({ as: Component = "p", children }: TextShineProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
        ease: "linear",
      }}
      className={cn(
        "bg-[linear-gradient(110deg,#bfbfbf,35%,#000,50%,#bfbfbf,75%,#bfbfbf)] dark:bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)]",
        "bg-[length:200%_100%] bg-clip-text font-medium text-sm text-transparent",
      )}
    >
      {children}
    </MotionComponent>
  );
}
