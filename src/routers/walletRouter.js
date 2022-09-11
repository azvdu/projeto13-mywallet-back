import { Router } from "express";
import { newTransaction, wallet } from "../controller/walletController.js";
import { validationNewTransaction} from "../middlewares/walletMiddleware.js";

const walletRouter = Router();
walletRouter.get("/wallet", wallet)
walletRouter.post("/transaction", validationNewTransaction, newTransaction)

export default walletRouter;