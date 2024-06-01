import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log("monogodb connnected")
        console.log(connection.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB