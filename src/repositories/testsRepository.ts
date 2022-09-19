import client from '../config/database'
import { CreateTestInterface } from '../types/testsInterface.js'

async function findTeacherDisciplineById(teacherDisciplineId: number) {
  const result = await client.teacherDiscipline.findFirst({
    where: {
      id: teacherDisciplineId
    }
  })

  return result
}

async function findCategoryById(categoryId: number) {
  const result = await client.category.findFirst({
    where: {
      id: categoryId
    }
  })

  return result
}

async function findPdfUrl(pdfUrl: string) {
  const result = await client.test.findFirst({
    where: {
      pdfUrl
    }
  })

  return result
}

async function findName(name: string, teacherDisciplineId: number) {
  const result = await client.test.findFirst({
    where: {
      name,
      teacherDisciplineId
    }
  })

  return result
}

async function createTest(test: CreateTestInterface) {
  const result = await client.test.create({
    data: test
  })

  return result
}

const testsRepository = {
  findTeacherDisciplineById,
  findCategoryById,
  findPdfUrl,
  findName,
  createTest
}

export default testsRepository;