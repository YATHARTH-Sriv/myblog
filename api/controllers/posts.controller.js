
import HttpError from "../models/error.models.js"
import Post from "../models/post.models.js"
import User from "../models/user.model.js"
import path from 'path';



const createPost= async(req,res,next)=>{

    const {title,content,description}=req.body
    console.log(title)
     if(!title, !content, !description ){
        return next(new HttpError("fill in details and give thumbnail too",402))
     }
     console.log(title)
     console.log(description)
     console.log(req.files)

    // -------------------------------------------------------------------------------
    // const {thumbnail} = req.files
    // console.log(thumbnail)
    // let filename= thumbnail.filename
    // console.log(filename)
    const newPost= await Post.create({title,description,content})
    if(!newPost){
        return next(new HttpError("Post was not created",422))
    }
    res.status(201).json(newPost)
    // let splittedFilename=filename.split('.')
    // let newfilename= splittedFilename[0] + "." + splittedFilename[splittedFilename.length - 1]
    // thumbnail.mv(path.join(__dirname,".","./uploads", filename),async(err)=>{
    //     if(err){
    //         return next(new HttpError(err))
    //     }else{
            
        
    

}






const getAllPost= async(req,res,next)=>{
    try {
        
        res.status(201).json(await Post.find())
    } catch (error) {
        return next(new HttpError((error)))
    }
}

const editPost= async(req,res,next)=>{
    res.json("edit post")
}

const getPost= async(req,res,next)=>{
    try {
        const id=req.params.id
        const post=await Post.findById(id)
        if(!post){
            return next(new HttpError("requested post does not exist",400))
        }
        res.status(201).json(post)
    } catch (error) {
        return next(new HttpError((error)))
    }
}

const getUserPost= async(req,res,next)=>{
    try {
        const creatorid=req.params.id
        const allpostsbyuser= await Post.find({creator:creatorid}).sort({updatedAt: -1})
        if(!allpostsbyuser){
            return next(HttpError("no post by this user",400))
        }
        res.status(201).json(allpostsbyuser)
    } catch (error) {
        return next(HttpError(error))
    }
}

const deletePost= async(req,res,next)=>{
    res.json(" delete a post")
}

export  {createPost,editPost,getAllPost,getPost,deletePost,getUserPost}

