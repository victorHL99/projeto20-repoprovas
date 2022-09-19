import { faker } from "@faker-js/faker"
import { CreateTestInterface } from "../../src/types/testsInterface"

export const testFactory = {
  createTestData(
    name = faker.lorem.words(3),
    pdfUrl = faker.internet.url(),
    categoryId = 1,
    teacherDisciplineId = 1
  ): CreateTestInterface {
    return {
      name,
      pdfUrl,
      categoryId,
      teacherDisciplineId
    }
  },
}