import { Request, Response } from "express";
import testsService from "../services/testsService.js";
import { CreateTestInterface } from "../types/testsInterface.js";

async function createTest(req: Request, res: Response) {
  const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body as CreateTestInterface;

  // verify if teacherDisciplineId exists
  await testsService.verifyIfTeacherDisciplineIdExists(teacherDisciplineId);

  // verify if pdfUrl exists
  await testsService.verifyIfPdfUrlExists(pdfUrl);

  // verify if name already exist with same teacherDisciplineId
  await testsService.verifyIfNameExists(name, teacherDisciplineId);

  // verify if categoryId exists
  await testsService.verifyIfCategoryIdExists(categoryId);

  const test = {
    name,
    pdfUrl,
    categoryId,
    teacherDisciplineId,
  };


  // create test
  await testsService.createTest(test);

  res.status(201).send("Test created");
}

const testsController = {
  createTest
}

export default testsController;