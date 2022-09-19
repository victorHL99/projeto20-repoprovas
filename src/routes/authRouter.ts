import { Router } from "express";

import authController from "../controllers/authController";
import schemaValidate from "../middlewares/schemaValidate";
import authSchema from "../schemas/authSchema"
const authRouter = Router();

authRouter.post("/signup", schemaValidate(authSchema.authSchemaSignup), authController.signup);
authRouter.post("/signin", schemaValidate(authSchema.authSchemaSignin), authController.signin);

export default authRouter;