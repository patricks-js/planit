import type { PropsWithChildren } from "react";

type SectionContainerProps = PropsWithChildren;

export function SectionContainer({ children }: SectionContainerProps) {
  return <section className="mx-auto max-w-4xl px-6 py-8">{children}</section>;
}
