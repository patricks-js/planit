"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
import { signInSchema, type SignInSchemaType } from "../schemas";

const SOCIAL_ICONS_SIZE = 16;

export function SignInForm() {
  const router = useRouter();
  const [isSignInFormLoading, setIsSignInFormLoading] = useState(false);
  const [isOAuthProviderLoading, setIsOAuthProviderLoading] = useState(false);
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleGoogleSignIn() {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/inbox",
      },
      {
        onRequest: (ctx) => {
          setIsOAuthProviderLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("Login realizado com sucesso!");
        },
        onError: (ctx) => {
          toast.error("Ocorreu um erro ao realizar o login!");
          console.error(ctx.error.message);
        },
        onResponse(ctx) {
          setIsOAuthProviderLoading(false);
        },
      },
    );
  }

  async function handleGithubSignIn() {
    await authClient.signIn.social(
      {
        provider: "github",
        callbackURL: "/inbox",
      },
      {
        onRequest: (ctx) => {
          setIsOAuthProviderLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("Login realizado com sucesso!");
        },
        onError: (ctx) => {
          toast.error("Ocorreu um erro ao realizar o login!");
          console.error(ctx.error.message);
        },
        onResponse(ctx) {
          setIsOAuthProviderLoading(false);
        },
      },
    );
  }

  async function onSubmit({ email, password }: SignInSchemaType) {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          setIsSignInFormLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("Login realizado com sucesso!");
          form.reset();
          router.push("/inbox");
        },
        onError: (ctx) => {
          toast.error("Ocorreu um erro ao realizar o login!");
          console.error(ctx.error.message);
        },
        onResponse(ctx) {
          setIsSignInFormLoading(false);
        },
      },
    );
  }

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
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

          <Button
            type="submit"
            disabled={isSignInFormLoading || isOAuthProviderLoading}
            className="w-full"
          >
            {isSignInFormLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                <TextShine as="span">Entrando...</TextShine>
              </>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </Form>

      <div className="grid gap-2">
        <Button
          variant="outline"
          onClick={() => handleGoogleSignIn()}
          disabled={isSignInFormLoading || isOAuthProviderLoading}
          className="w-full"
        >
          <Image
            src="/google.svg"
            alt="Google brand"
            width={SOCIAL_ICONS_SIZE}
            height={SOCIAL_ICONS_SIZE}
          />
          Entrar com Google
        </Button>

        <Button
          variant="outline"
          onClick={() => handleGithubSignIn()}
          disabled={isSignInFormLoading || isOAuthProviderLoading}
          className="w-full"
        >
          <Image
            src="/github_dark.svg"
            alt="Github brand"
            width={SOCIAL_ICONS_SIZE}
            height={SOCIAL_ICONS_SIZE}
          />
          Entrar com Github
        </Button>
      </div>
    </div>
  );
}
