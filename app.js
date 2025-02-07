import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectDB from "./Database/db.js";
import userRoute from"./Routes/user.Route.js"
import cors from "cors";

dotenv.config({});
const PORT=process.env.PORT ||3000;
const app=express()
app.use(express.json())
app.use(cookieParser())

// Allow all origins
app.use(cors());

// database connection
connectDB();



//api routes
app.use("/api/user",userRoute);


app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})