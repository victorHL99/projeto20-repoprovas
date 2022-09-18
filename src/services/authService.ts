import authRepository from "../repositories/authRepository.js";
import { TypeAction } from "../types/authInterface.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function verifyIfEmailExists(email: string, action: TypeAction) {
  const resultEmail = await authRepository.findUserByEmail(email)

  if (action === "signup") {
    if (resultEmail) {
      throw {
        type: 'conflict',
        message: 'Email already exists',
      }
    }
  }

  if (action === "signin") {
    if (!resultEmail) {
      throw {
        type: 'unauthorized',
        message: 'Email or password incorrect',
      }
    }
  }

  return resultEmail
}

async function encryptPassword(password: string) {
  const saltRounds = 10
  const hashPassword = await bcrypt.hash(password, saltRounds)

  return hashPassword
}

async function comparePassword(password: string, hashPassword: string) {
  const result = await bcrypt.compare(password, hashPassword)

  if (!result) {
    throw {
      type: 'unauthorized',
      message: 'Email or password incorrect',
    }
  }
}

async function generateToken(email: string, JWT_KEY: string) {
  const token = jwt.sign({ email }, JWT_KEY)
  return token
}

async function createUser(email: string, password: string) {
  await authRepository.createUser(email, password)
}

async function verifyIfExistTokenWithSameUserId(userId: number) {
  const result = await authRepository.findTokenByUserId(userId)

  if (result) {
    throw {
      type: 'conflict',
      message: 'Token already exists',
    }
  }
}

async function deleteTokenWithSameUserId(userId: number) {
  await authRepository.deleteTokenWithSameUserId(userId)
}

async function createToken(token: string, userId: number) {
  await authRepository.createToken(token, userId)
}

const authService = {
  verifyIfEmailExists,
  encryptPassword,
  createUser,
  comparePassword,
  generateToken,
  verifyIfExistTokenWithSameUserId,
  deleteTokenWithSameUserId,
  createToken
}

export default authService;