import jwt from 'jsonwebtoken'
import HttpError from '../models/error.models.js'

const auth=async(req,res,next)=>{
    const Authorization= req.headers.Authorization || req.headers.Authorization
    if( Authorization && Authorization.startsWith("Bearer")){
        const token= Authorization.split(' ')[1]
        jwt.verify(token,process.env.JWT_SECRET, (err, info)=>{
            if(err){
                return next(new HttpError("unauthorized",400))
            }

            req.user= info
            next()
        })
    }else{
        return next(new HttpError("no token",402))
    }
}

export default auth