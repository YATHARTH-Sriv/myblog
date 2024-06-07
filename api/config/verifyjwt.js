import HttpError from "../models/error.models.js"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const verifyJWT = async(req, _, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
        
         console.log(token);
        
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)
        const name=decodedToken.name
    
        const user=await User.findOne({ username: name})
        console.log(user)

    
        req.user = user;
        next()
    } catch (error) {
        return next( new HttpError( "Invalid access token",401))
    }
    
}