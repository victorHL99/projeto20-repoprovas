import supertest from 'supertest';
import app from '../src/app'

import { SignBody } from '../src/types/authInterface';

const EMAIL: string = `${new Date().getTime()}@test.com` // random email
console.log(EMAIL)
const PASSWORD: string = '12345678' // random password
const login = {
  email: EMAIL,
  password: PASSWORD,
} as SignBody





describe("Signin Tests suite", () => {
  it("say hello", () => {
    expect(1).toBe(1)
  })

})