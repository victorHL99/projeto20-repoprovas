import { Request, Response } from "express";
import testsService from "../services/testsService.js";
import { CreateTestInterface } from "../types/testsInterface.js";

async function createTest(req: Request, res: Response) {
  const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body as CreateTestInterface;

  // verify if teacherDisciplineId exists
  await testsService.verifyIfTeacherDisciplineIdExists(teacherDisciplineId);
  // verify if categoryId exists
}

const testsController = {
  createTest
}

export default testsController;