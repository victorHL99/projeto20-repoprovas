import { faker } from "@faker-js/faker"
import { SignBody, SignupInterface } from '../../src/types/authInterface';

export const userFactory = {
  createUserData(
    email = faker.internet.email(),
    password = faker.internet.password(),
    confirmPassword = password
  ): SignupInterface {
    return {
      email,
      password,
      confirmPassword
    }
  }
}