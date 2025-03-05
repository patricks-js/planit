import Link from "next/link";

import { AuthFormFooter } from "@/features/auth/components/auth-form-footer";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { SocialAuthButtons } from "@/features/auth/components/social-auth-buttons";

export default function SigninPage() {
  return (
    <div className="max-w-md flex-1 space-y-6">
      <header className="space-y-1 text-center">
        <h2 className="font-bold text-3xl leading-relaxed tracking-tight">
          Bem-vindo de volta!
        </h2>
        <p className="text-muted-foreground text-sm">
          Não tem uma conta ainda?{" "}
          <Link
            href="/sign-up"
            className="text-blue-500 hover:underline"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <SignInForm />
      <SocialAuthButtons />
      <AuthFormFooter />
    </div>
  );
}
