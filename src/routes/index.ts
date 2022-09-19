import { Router } from "express";

import authRouter from "./authRouter";
import testsRouter from "./testsRouter";

const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use("/tests", testsRouter);

export default indexRouter;