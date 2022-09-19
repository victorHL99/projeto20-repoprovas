import { Request, Response } from "express";
import testsService from "../services/testsService";
import { CreateTestInterface } from "../types/testsInterface";

async function createTest(req: Request, res: Response) {
  const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body as CreateTestInterface;

  // verify if teacherDisciplineId exists
  await testsService.verifyIfTeacherDisciplineIdExists(teacherDisciplineId);

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

async function getAllTestsByDiscipline(req: Request, res: Response) {
  const tests = await testsService.getAllTestsByDiscipline();

  return res.status(200).json(tests);
}

async function getAllTestsByTeacher(req: Request, res: Response) {
  const tests = await testsService.getAllTestsByTeacher();

  return res.status(200).json(tests);
}

const testsController = {
  createTest,
  getAllTestsByDiscipline,
  getAllTestsByTeacher
}

export default testsController;