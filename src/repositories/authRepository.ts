import client from '../config/database.js'

async function findUserByEmail(email: string) {
  const user = await client.user.findUnique({
    where: {
      email
    }
  })

  return user
}

async function createUser(email: string, password: string) {
  await client.user.create({
    data: {
      email,
      password
    }
  })
}

async function findTokenByUserId(userId: number) {
  const token = await client.session.findFirst({
    where: {
      userId
    }
  })

  return token
}

async function deleteTokenWithSameUserId(userId: number) {
  await client.session.deleteMany({
    where: {
      userId
    }
  })
}

async function createToken(token: string, userId: number) {
  await client.session.create({
    data: {
      token,
      userId
    }
  })
}

const authRepository = {
  findUserByEmail,
  createUser,
  findTokenByUserId,
  deleteTokenWithSameUserId,
  createToken
}

export default authRepository;