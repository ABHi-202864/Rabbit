import { Router } from "express";
import jwt from "jsonwebtoken";
import { registerUser } from "../controllers/userControllers.js";


const userRouter = Router();
userRouter.post("/register", registerUser);

export default userRouter;