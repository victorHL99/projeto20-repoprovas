import { CreateTestInterface } from './../types/testsInterface.js';
import testsRepository from "../repositories/testsRepository.js";

async function verifyIfTeacherDisciplineIdExists(teacherDisciplineId: number) {
  const result = await testsRepository.findTeacherDisciplineById(teacherDisciplineId);

  if (!result) {
    throw {
      type: 'not_found',
      message: 'TeacherDisciplineId not found',
    }
  }
}

async function verifyIfCategoryIdExists(categoryId: number) {
  const result = await testsRepository.findCategoryById(categoryId);

  if (!result) {
    throw {
      type: 'not_found',
      message: 'CategoryId not found',
    }
  }
}

async function verifyIfPdfUrlExists(pdfUrl: string) {
  const result = await testsRepository.findPdfUrl(pdfUrl);

  if (result) {
    throw {
      type: 'conflict',
      message: 'PdfUrl already exists',
    }
  }
}

async function verifyIfNameExists(name: string, teacherDisciplineId: number) {
  const result = await testsRepository.findName(name, teacherDisciplineId);

  if (result) {
    throw {
      type: 'conflict',
      message: 'Name already exists with same teacherDisciplineId',
    }
  }
}

async function createTest(test: CreateTestInterface) {
  const result = await testsRepository.createTest(test);

  return result;
}

const testsService = {
  verifyIfTeacherDisciplineIdExists,
  verifyIfCategoryIdExists,
  verifyIfPdfUrlExists,
  verifyIfNameExists,
  createTest

}

export default testsService;
