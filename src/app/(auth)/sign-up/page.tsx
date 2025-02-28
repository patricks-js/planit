import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpForm } from "./signup-form";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md space-y-5">
      <header className="mb-8 space-y-1 text-center">
        <h2 className="font-bold text-3xl leading-relaxed tracking-tight">
          Create Account
        </h2>
        <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-blue-500 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </header>
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          className="w-full"
        >
          Sign up with Google
        </Button>
        <Button
          size="lg"
          className="w-full"
        >
          Sign up with GitHub
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
      <SignUpForm />
      <p className="text-center text-muted-foreground text-sm">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
}
