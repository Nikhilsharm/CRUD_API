import mongoose from "mongoose";

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.Global_URl);
        console.log('MongoDB Connected')
    } catch (error) {
        console.log('error occured',error)
    }
}

export default connectDB;