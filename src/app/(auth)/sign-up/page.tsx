import { AuthMethodSeparator } from "@/components/auth-method-separator";
import { SocialSignInButtons } from "@/components/social-signin-buttons";
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
      <SocialSignInButtons />
      <AuthMethodSeparator />
      <SignUpForm />
      <p className="text-center text-muted-foreground text-sm">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
}
