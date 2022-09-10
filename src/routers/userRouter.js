import { Router } from "express";
import { signIn, signUp } from "../controller/userController.js";
import { validationSignIn, validationSignUp } from "../middlewares/userMiddleware.js";

const userRouter = Router();
userRouter.post("/sign-up", validationSignUp, signUp)
userRouter.post("/sign-in", validationSignIn, signIn)

export default userRouter;