import { uuidV4 } from "ethers"
import HttpError from "../models/error.models.js"
import Post from "../models/post.models.js"
import User from "../models/user.model.js"




const createPost= async(req,res,next)=>{
   try {
    const {title,content,description}=req.body
    const{id}=req.body
    console.log(title)
     if(!title, !content, !description ){
        return next(new HttpError("fill in details and give thumbnail too",402))
     }
     console.log(title)
     const newPost= await Post.create({title,description,content})
             if(!newPost){
                 return next(new HttpError("new post cannot be created",402))
             }
             const user=await User.findById(id)
             const updatedcount= user.post + 1
             await User.findByIdAndUpdate(id, {post: updatedcount})
             res.status(201).json(newPost)
    //  const {thumbnail}=req.files
     
    //  if(thumbnail.size > 2000000){
    //     return next( new HttpError("thumbnail size too big",402))
    //  }
    //  let filename=thumbnail.name
    //  let splittedFilename = filename.split(".")
    //  let newFilename= splittedFilename[0] + uuidV4() + "." + splittedFilename[splittedFilename.length - 1]
    //  thumbnail.mv(path.join(__dirname, "..", './uploads', newFilename), async(err)=>{
    //     if(err){
    //         return next(new HttpError(err))
    //     }else{
    //         const newPost= await Post.create({title,description,content, thumbnail: newFilename, creator: req.user.id})
    //         if(!newPost){
    //             return next(new HttpError("new post cannot be created",402))
    //         }
    //         const user=await User.findById(req.user.id)
    //         const updatedcount= user.post + 1
    //         await User.findByIdAndUpdate(req.user.id, {post: updatedcount})
    //         res.status(201).json(newPost)
    //     }
     
   } catch (error) {
      return next(new HttpError("could not create a post",500))
   }
}

const getAllPost= async(req,res,next)=>{
    res.json("get post")
}

const editPost= async(req,res,next)=>{
    res.json("edit post")
}

const getPost= async(req,res,next)=>{
    res.json(" get single post")
}

const getUserPost= async(req,res,next)=>{
    res.json(" get user  post")
}

const deletePost= async(req,res,next)=>{
    res.json(" delete a post")
}

export  {createPost,editPost,getAllPost,getPost,deletePost,getUserPost}

