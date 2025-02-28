import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInForm } from "./signin-form";

export default function SigninPage() {
  return (
    <div className="mx-auto max-w-md space-y-5">
      <header className="mb-8 space-y-1 text-center">
        <h2 className="font-bold text-3xl leading-relaxed tracking-tight">
          Welcome back
        </h2>
        <p className="text-muted-foreground text-sm">
          Don't have an account yet?{" "}
          <Link
            href="/sign-up"
            className="text-blue-500 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </header>
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          className="w-full"
        >
          Sign in with Google
        </Button>
        <Button
          size="lg"
          className="w-full"
        >
          Sign in with GitHub
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground/60">
            or
          </span>
        </div>
      </div>
      <SignInForm />
      <p className="text-center text-muted-foreground text-sm">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
}
