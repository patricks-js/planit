"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { Label } from "@/components/ui/label";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Nome</Label>
          <Input
            id="first-name"
            placeholder="John"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="surname">Sobrenome</Label>
          <Input
            id="surname"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Senha</Label>
        <InputPassword
          id="password"
          name="password"
          placeholder="••••••••"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Confirme sua senha</Label>
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
        {loading ? (
          <Loader2
            size={16}
            className="animate-spin"
          />
        ) : (
          "Criar conta"
        )}
      </Button>
    </div>
  );
}
