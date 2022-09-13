import { User } from "@prisma/client";

export type SignBody = Omit<User, "id">;

export type TypeAction = "signin" | "signup";