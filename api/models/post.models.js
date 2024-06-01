import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true,"title is required"]  
        },
        description: {
            type: String,
            required: [true,"description is required"]
        },
        content: {
            type: String,
            required: [true,"some content is required"]
        },
        thumbnail: {
            type: String,
            
        },
        creator:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps:true}
)

const Post = mongoose.model("Post", postSchema)
export default Post;