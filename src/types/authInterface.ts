import { User } from "@prisma/client";

export type SignBody = Omit<User, "id">;

export interface SignupInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

export type TypeAction = "signin" | "signup";