import mongoose from "mongoose";
const formSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },

    
},{timestamps:true});
export const Form = mongoose.model("Form",formSchema);