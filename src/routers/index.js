import { Router } from "express";
import userRouter from "./userRouter.js";
import walletRouter from "./walletRouter.js";

const router = Router();
router.use(userRouter);
router.use(walletRouter)

export default router;