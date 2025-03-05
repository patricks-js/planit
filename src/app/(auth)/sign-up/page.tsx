import Link from "next/link";
import { SignUpForm } from "./signup-form";

export default function SignupPage() {
  return (
    <div className="max-w-md flex-1 space-y-8">
      <header className="space-y-1 text-center">
        <h2 className="font-bold text-3xl leading-relaxed tracking-tight">
          Criar uma conta
        </h2>
        <p className="text-muted-foreground text-sm">
          Você já possui uma conta?{" "}
          <Link
            href="/sign-in"
            className="text-blue-500 hover:underline"
          >
            Entrar
          </Link>
        </p>
      </header>
      <SignUpForm />
    </div>
  );
}
