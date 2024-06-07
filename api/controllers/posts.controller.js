
import HttpError from "../models/error.models.js"
import Post from "../models/post.models.js"
import User from "../models/user.model.js";


    const createPost = async (req, res, next) => {
        try {
          const { title, content, description } = req.body;
          console.log('Title:', title);
          console.log('Content:', content);
          console.log('Description:', description);
          console.log('File:', req.file);
      
          if (!title || !content || !description || !req.file) {
            return next(new HttpError("Fill in details and give thumbnail too", 402));
          }
          const imageoriginal=req.file.originalname
          const imagePath = req.file.path;
      
        //   const imagePath = `/uploads/${req.file.filename}`; // Use req.file.filename to get the correct file path
          console.log('Image Path:', imagePath);
          console.log(imageoriginal)
        //   const imageurl=await uploadonCloudinary(imageoriginal)
          const newPost = await Post.create({
            title,
            description,
            content,
            thumbnail: imagePath,
            creator: req.user.id
          });
          
          console.log('New Post:', newPost);
          res.json(newPost);
        } catch (error) {
          console.error('Error:', error);
          return next(new HttpError("Post cannot be created", 400));
        }
      };









const getAllPost= async(req,res,next)=>{
    try {
        
        res.status(201).json(await Post.find())
    } catch (error) {
        return next(new HttpError((error)))
    }
}

const editPost= async(req,res,next)=>{
    try {
        let { title, content, description} = req.body
        let updatedpost
        const postid=req.params.id
        if (!title || !content || !description ) {
            return next(new HttpError("Fill in details ", 402));
        } 
        updatedpost=await Post.findByIdAndUpdate(postid, {title,content,description}, {new: true})
        if(!updatedpost){
            console.log("could not be updated")
            return next(new HttpError("could not be updated try again"))
        }
        res.status(201).json(updatedpost)

    } catch (error) {
        return next(new HttpError("post cannot be edited"))
    }

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

const getPostsByUser = async (req, res, next) => {
    try {
      const {id}=req.params
      const posts=await Post.find({ creator: id}).sort({ createdAt: -1})
      res.status(200).json(posts)
      
    } catch (error) {
      console.error('Error:', error);
      return next(new HttpError('Fetching posts failed, please try again later', 500));
    }
  };

const deletePost= async(req,res,next)=>{
    try {
        const postid=req.params.id
        const post= await Post.findById(postid)
        await Post.findByIdAndDelete(postid)
        res.json("post was deleted")
    } catch (error) {
        return next(new HttpError("post cannot be deleted"))
    }
}

export  {createPost,editPost,getAllPost,getPost,deletePost,getPostsByUser}

