import pkg from '@prisma/client'
import "./setup"

const { PrismaClient } = pkg
const client = new PrismaClient()

export default client
