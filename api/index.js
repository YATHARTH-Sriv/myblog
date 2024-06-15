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


// app.use(cors({
//         origin: ['http://localhost:5173/', 'http://localhost:5173'],
//         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//         credentials: true, 
// },
// ))

app.use(cors({
        origin: 'https://myblog-ks4w.vercel.app', // Update to your specific origin
        methods: ['GET', 'POST', 'OPTIONS'],
}))

  
  
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/uploads', express.static('uploads'));

// app.use(express.static("public"))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req,res)=>{
    res.send("hello")
})



app.use('/api/users',userrouter)
app.use('/api/posts',postrouter)

app.use(notFound)
app.use(Errorhandle)

app.listen(process.env.PORT || 8000)
