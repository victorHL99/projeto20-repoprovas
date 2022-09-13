import pkg from '@prisma/client'
import "./setup.js"

const { PrismaClient } = pkg
const client = new PrismaClient()

export default client
