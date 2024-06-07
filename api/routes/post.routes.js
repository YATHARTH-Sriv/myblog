import { Router } from "express";
import {createPost,editPost,getAllPost,getPost,deletePost, getPostsByUser} from "../controllers/posts.controller.js"
import multer from "multer";
import { storage } from "../config/cloudinary.js";
import { verifyJWT } from "../config/verifyjwt.js";

  
const upload = multer({ storage: storage});


const postrouter=Router()





postrouter.post("/",upload.single('thumbnail'),verifyJWT,createPost)
postrouter.patch("/:id",editPost)
postrouter.get("/",getAllPost)
postrouter.get("/:id",getPost)
postrouter.delete("/:id",verifyJWT,deletePost)
postrouter.get("/users/:id",verifyJWT,getPostsByUser)

export default postrouter