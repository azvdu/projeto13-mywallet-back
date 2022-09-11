import { Router } from "express";
import { newExit, newGain, wallet } from "../controller/walletController.js";
import { validationNewExit, validationNewGain } from "../middlewares/walletMiddleware.js";

const walletRouter = Router();
walletRouter.get("/wallet", wallet)
walletRouter.post("/gain", validationNewGain, newGain)
walletRouter.post("/exit", validationNewExit, newExit)

export default walletRouter;