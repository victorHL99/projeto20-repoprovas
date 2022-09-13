import { Request, Response } from "express";
import authService from "../services/authService.js";
import { SignBody, TypeAction } from "../types/authInterface.js";

async function signup(req: Request, res: Response) {
  const { email, password } = req.body as SignBody
  const action = "signup" as TypeAction

  await authService.verifyIfEmailExists(email, action)
  const hashPassword: string = await authService.encryptPassword(password)
  await authService.createUser(email, hashPassword)

  res.status(201).send("User created");
}

async function signin(req: Request, res: Response) {
  const { email, password } = req.body as SignBody
  const action = "signin" as TypeAction
  const JWT_KEY: string = process.env.JWT_SECRET_KEY

  const infoUser = await authService.verifyIfEmailExists(email, action)
  await authService.comparePassword(password, infoUser.password)
  const token = await authService.generateToken(infoUser.email, JWT_KEY) as string
  // await authService.verifyIfExistTokenWithSameUserId(infoUser.id) // TODO if exist, delete to analyze if it is necessary
  await authService.deleteTokenWithSameUserId(infoUser.id)
  await authService.createToken(token, infoUser.id)

  res.locals.token = token

  res.status(200).send(token);

}

const authController = {
  signup,
  signin
}

export default authController;