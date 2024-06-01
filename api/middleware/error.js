export const notFound=(req,res,next)=>{
    const error= new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}


export const Errorhandle = (er,req,res,next)=>{
    if(res.headerSent){
        return next(er)
    }

    res.status(er.code || 500 ).json({message: er.message || "An error occured"})
}

