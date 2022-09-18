import { Router } from 'express';

import testsController from '../controllers/testsController.js';
import schemaValidate from "../middlewares/schemaValidate.js";
import tokenValidate from '../middlewares/tokenValidate.js';

import testsSchema from '../schemas/testsSchema.js';

const testsRouter = Router();

testsRouter.post("/create", schemaValidate(testsSchema.createTestSchema), tokenValidate, testsController.createTest);

export default testsRouter;