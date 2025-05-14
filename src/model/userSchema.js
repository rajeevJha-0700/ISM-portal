import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
        type:"String",
        required:true
     },
     email:{
        type:"String",
        required:true,
        unique:true
     },
     H_password:{
        type:"String",
        required:true
     },
    
},{
    timestamps:true
});

export const user = mongoose.model("User",userSchema,"users");//named export