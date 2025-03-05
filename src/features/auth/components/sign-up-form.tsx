"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { TextShine } from "@/components/text-shine";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { signUpSchema, type SignUpSchemaType } from "../schemas";

export function SignUpForm() {
  const router = useRouter();
  const [isSignInFormLoading, setIsSignInFormLoading] = useState(false);

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({
    email,
    password,
    firstName,
    surname,
  }: SignUpSchemaType) {
    await authClient.signUp.email(
      {
        name: `${firstName} ${surname}`,
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          setIsSignInFormLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("Conta criada com sucesso!");
          form.reset();
          router.push("/inbox");
        },
        onError: (ctx) => {
          toast.error("Ocorreu um erro ao realizar criar a conta.");
          console.error(ctx.error.message);
        },
        onResponse(ctx) {
          setIsSignInFormLoading(false);
        },
      },
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primeiro nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Senha</FormLabel>
                {/* TODO: Add a link to reset password */}
              </div>
              <FormControl>
                <InputPassword
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Confirme sua senha</FormLabel>
              </div>
              <FormControl>
                <InputPassword
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSignInFormLoading}
          className="w-full"
        >
          {isSignInFormLoading ? (
            <>
              <Loader className="size-4 animate-spin" />
              <TextShine as="span">Carregando...</TextShine>
            </>
          ) : (
            "Criar conta"
          )}
        </Button>
      </form>
    </Form>
  );
}
