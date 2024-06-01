import connectDB from "./db/index.js";
import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv";
import userrouter from "./routes/user.routes.js";
import postrouter from "./routes/post.routes.js";
import { Errorhandle, notFound } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config({
    path:"./env"
})
connectDB()
const app=express()
app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/users',userrouter)
app.use('/api/posts',postrouter)

app.use(notFound)
app.use(Errorhandle)

app.listen(8000)
