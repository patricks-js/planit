import Link from "next/link";

export function AuthFormFooter() {
  return (
    <div className="flex w-full justify-center border-t py-4">
      <p className="text-center text-muted-foreground text-xs">
        Powered by{" "}
        <Link
          href="https://better-auth.com"
          target="_blank"
          className="underline"
        >
          <span className="dark:text-orange-200/90">better-auth.</span>
        </Link>
      </p>
    </div>
  );
}
