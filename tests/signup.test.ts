import supertest from 'supertest';
import app from '../src/app'
import client from '../src/config/database';

import { SignupInterface } from '../src/types/authInterface'

const EMAIL: string = `${new Date().getTime()}@test.com` // random email
const PASSWORD: string = '12345678'
const CONFIRM_PASSWORD: string = '12345678' // confirm password
const WRONG_PASSWORD: string = '12356789' // wrong password
const login = {
  email: EMAIL,
  password: PASSWORD,
  confirmPassword: CONFIRM_PASSWORD
} as SignupInterface

beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE users CASCADE`
})

describe("Signup Tests suite", () => {

  // sucess case
  it("should signup a new user", async () => {
    const response = await supertest(app).post(`/signup`).send(login)
    expect(response.statusCode).toBe(201)
    expect(response.text).toEqual("User created")
  })

  // fail case - email already exists
  it("should not signup a new user with the same email", async () => {
    await supertest(app).post(`/signup`).send(login)
    const response = await supertest(app).post(`/signup`).send(login)
    expect(response.statusCode).toBe(409)
    expect(response.text).toEqual('Email already exists')
  })

  // fail case - wrong email format
  it("should not signup a new user with a wrong email", async () => {
    const response = await supertest(app).post(`/signup`).send({ email: 'test', password: PASSWORD, confirmPassword: CONFIRM_PASSWORD })
    expect(response.statusCode).toBe(422)
    expect(response.text).toEqual('"email" must be a valid email')
  })

  // fail case - password and confirm password do not match
  it("should not signup a new user with a wrong password", async () => {
    const response = await supertest(app).post(`/signup`).send({ email: EMAIL, password: PASSWORD, confirmPassword: WRONG_PASSWORD })
    expect(response.statusCode).toBe(422)
    expect(response.text).toEqual('Passwords do not match')
  })

})

afterAll(async () => {
  await client.$disconnect()
})