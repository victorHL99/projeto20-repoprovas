import { Router } from "express";

import authRouter from "./authRouter.js";
import testsRouter from "./testsRouter.js";

const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use("/tests", testsRouter);

export default indexRouter;