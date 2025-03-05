import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  password: z
    .string()
    .min(4, {
      message: "Senha precisa de 4 caracteres mínimos",
    })
    .max(100, {
      message: "Senha só pode ter 100 caracteres máximos",
    }),
});
export type SignInSchemaType = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  firstName: z.string().min(3, {
    message: "Escreva seu primeiro nome",
  }),
  surname: z.string().min(3, {
    message: "Escreva seu sobrenome",
  }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  password: z
    .string()
    .min(4, {
      message: "Senha precisa de 4 caracteres mínimos",
    })
    .max(100, {
      message: "Senha só pode ter 100 caracteres máximos",
    }),
  confirmPassword: z
    .string()
    .min(4, {
      message: "Senha precisa de 4 caracteres mínimos",
    })
    .max(100, {
      message: "Senha só pode ter 100 caracteres máximos",
    }),
});
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
