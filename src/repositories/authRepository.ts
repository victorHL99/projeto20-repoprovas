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

const authRepository = {
  findUserByEmail,
  createUser
}

export default authRepository;