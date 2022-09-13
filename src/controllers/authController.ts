import { Request, Response } from "express";
import authService from "../services/authService.js";
import { SignupBody, TypeAction } from "../types/authInterface.js";

async function signup(req: Request, res: Response) {
  const { email, password } = req.body as SignupBody
  const action = "signup" as TypeAction

  await authService.verifyIfEmailExists(email, action)
  const hashPassword: string = await authService.encryptPassword(password)
  await authService.createUser(email, hashPassword)

  res.status(200).send("User created");
}

const authController = {
  signup
}

export default authController;