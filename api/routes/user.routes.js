import { Router } from "express";
import { changeAvatar, edit, getuser, login, registeruser } from "../controllers/user.controller.js";
import auth from "../middleware/auth.middleware.js";
const userrouter=Router()

userrouter.post("/register",registeruser)
userrouter.post("/login",login)
userrouter.get("/profile",getuser)
userrouter.post("/edit",auth,edit)
userrouter.patch("/change-avatar",changeAvatar)

export default userrouter