import { Router } from 'express';

import testsController from '../controllers/testsController';
import schemaValidate from "../middlewares/schemaValidate";
import tokenValidate from '../middlewares/tokenValidate';

import testsSchema from '../schemas/testsSchema';

const testsRouter = Router();

testsRouter.post("/create", schemaValidate(testsSchema.createTestSchema), tokenValidate, testsController.createTest);
testsRouter.get("/discipline", tokenValidate, testsController.getAllTestsByDiscipline);

export default testsRouter;