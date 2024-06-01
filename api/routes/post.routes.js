import { Router } from "express";
import {createPost,editPost,getAllPost,getPost,deletePost,getUserPost} from "../controllers/posts.controller.js"
import auth from "../middleware/auth.middleware.js";

const postrouter=Router()


postrouter.post("/",createPost)
postrouter.patch("/:id",editPost)
postrouter.get("/",getAllPost)
postrouter.get("/:id",getPost)
postrouter.delete("/:id",deletePost)
postrouter.get("/users/:id",getUserPost)

export default postrouter