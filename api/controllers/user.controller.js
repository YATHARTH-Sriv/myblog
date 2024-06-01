import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import HttpError from "../models/error.models.js"

const registeruser=async (req,res,next)=>{
    
        const {username,password}=req.body
        if(!username || !password){
            return next(new HttpError("fill details please",400))
        }
        const newusername= username.toLowerCase()

        const salt= await bcrypt.genSalt(10)
        const hashpass= await bcrypt.hash(password,salt)
        const newuser=await User.create({username:newusername,password:hashpass})
        res.status(201).json(newuser)
        
    
}


const login=async (req,res,next)=>{
    try {
        const {username,password}=req.body
        if(!username || !password){
            return next(new HttpError("fill details please",400))
        }
        const newusername= username.toLowerCase()
        const user=await User.findOne({ username: newusername})
        if(!user){
            return next(new HttpError("invalid cred",400))
        }
        const comparepass= await bcrypt.compare(password, user.password)
        if(!(comparepass)){
            return next(new HttpError("invalid pass",200))
        }
        const {_id:id}= user._id
        const name= user.username
        const token= jwt.sign({id,name}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.status(201).json({ token, id,name})
    } catch (error) {
        return next(new HttpError("Login failed",400))
    }
}


const getuser=async(req,res,next)=>{
    try {
        const {id}= req.params
        console.log(id)
        const user= await User.findById(id).select("-password")
        console.log(user.username)
        if(!user){
            return next(new HttpError("user not found",402))
        }
        res.status(201).json(user)

    } catch (error) {
        return next( new HttpError(" cannot get details of rquested user",400))
    }
}


const changeAvatar=(req,res,next)=>{
    res.json("profile change of user")
}

const edit=(req,res,next)=>{
    res.json("edit user")
} 

export {registeruser,login,getuser,changeAvatar,edit}