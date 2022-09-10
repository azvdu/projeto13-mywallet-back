import { Router } from "express";
import { home } from "../controller/walletController.js";

const walletRouter = Router();
walletRouter.get("/wallet", home)
walletRouter.post("/wallet", )

export default walletRouter;