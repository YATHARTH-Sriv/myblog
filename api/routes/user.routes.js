import { Router } from "express";
import { changeAvatar, edit, getuser, login, registeruser } from "../controllers/user.controller.js";
import { verifyJWT } from "../config/verifyjwt.js";
const userrouter=Router()

userrouter.post("/register",registeruser)
userrouter.post("/login",login)
userrouter.get("/profile",verifyJWT,getuser)
userrouter.post("/edit",edit)
userrouter.patch("/change-avatar",changeAvatar)

export default userrouter