"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { Label } from "@/components/ui/label";

export function SignInForm() {
  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            {/* TODO: Add a link to reset password */}
          </div>

          <InputPassword
            id="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
