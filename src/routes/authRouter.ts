import { Router } from "express";

import authController from "../controllers/authController.js";
import schemaValidate from "../middlewares/schemaValidate.js";
import authSchema from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", schemaValidate(authSchema.authSchemaSignup), authController.signup);

export default authRouter;