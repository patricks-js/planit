import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
      <form className="space-y-4">
        <div className="flex items-center gap-4">
          <Label className="flex w-full flex-col items-start gap-2">
            First Name
            <Input placeholder="John" />
          </Label>
          <Label className="flex w-full flex-col items-start gap-2">
            Last Name
            <Input placeholder="Doe" />
          </Label>
        </div>
        <Label className="flex flex-col items-start gap-2">
          Email
          <Input
            placeholder="your@email.com"
            type="email"
          />
        </Label>
        <Label className="flex flex-col items-start gap-2">
          Password
          <Input
            placeholder="Strong password"
            type="password"
          />
        </Label>
        <Button
          size="lg"
          className="w-full"
        >
          Sign up
        </Button>
      </form>
      <p className="text-center text-muted-foreground text-sm">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </p>
    </div>
  );
}
