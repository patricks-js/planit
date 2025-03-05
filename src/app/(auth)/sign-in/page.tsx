import { SignInForm } from "@/features/auth/components/sign-in-form";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="max-w-md flex-1 space-y-8">
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
    </div>
  );
}
