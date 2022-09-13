import authRepository from "../repositories/authRepository.js";
import { TypeAction } from "../types/authInterface.js";
import bcrypt from 'bcrypt'

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

  if (action === "login") {
    if (!resultEmail) {
      throw {
        type: 'unauthorized',
        message: 'Email not exists',
      }
    }
  }
}

async function encryptPassword(password: string) {
  const saltRounds = 10
  const hashPassword = await bcrypt.hash(password, saltRounds)

  return hashPassword
}

async function createUser(email: string, password: string) {
  await authRepository.createUser(email, password)
}


const authService = {
  verifyIfEmailExists,
  encryptPassword,
  createUser
}

export default authService;