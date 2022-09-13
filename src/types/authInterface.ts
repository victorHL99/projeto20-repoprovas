import { User } from "@prisma/client";

export type SignupBody = Omit<User, "id">;

export type TypeAction = "login" | "signup";