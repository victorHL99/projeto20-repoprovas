import supertest from 'supertest';
import app from '../src/app'
import client from '../src/config/database';

import { SignBody, SignupInterface } from '../src/types/authInterface';

const EMAIL: string = `${new Date().getTime()}@test.com` // random email
const PASSWORD: string = '12345678'
const login = {
  email: EMAIL,
  password: PASSWORD,
} as SignBody
const signup = {
  email: EMAIL,
  password: PASSWORD,
  confirmPassword: PASSWORD
} as SignupInterface

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE users CASCADE`
  await client.$executeRaw`TRUNCATE TABLE sessions CASCADE`
})

describe("Signin Tests suite", () => {

  // sucess case
  it("should carry out login", async () => {
    await supertest(app).post('/signup').send(signup)
    const response = await supertest(app).post('/signin').send(login)
    expect(response.statusCode).toBe(200)
    expect(response.text).not.toBeNull()
  })

  // fail case - email not found
  it("should not carry out login with a wrong email", async () => {
    const response = await supertest(app).post('/signin').send(login)
    expect(response.statusCode).toBe(401)
    expect(response.text).toEqual('Email or password incorrect')
  })

  // fail case - wrong password
  it("should not carry out login with a wrong password", async () => {
    await supertest(app).post('/signup').send(signup)
    const response = await supertest(app).post('/signin').send({ ...login, password: '123456789' })
    expect(response.statusCode).toBe(401)
    expect(response.text).toEqual('Email or password incorrect')
  })

  // fail case - wrong email format
  it("should not carry out login with a wrong email format", async () => {
    const response = await supertest(app).post('/signin').send({ ...login, email: 'test' })
    expect(response.statusCode).toBe(422)
    expect(response.text).toEqual('"email" must be a valid email')
  })

})

afterAll(async () => {
  await client.$disconnect()
})