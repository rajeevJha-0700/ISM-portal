import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
        type:"string",
        required:true
     },
     email:{
        type:"string",
        required:true,
        unique:true
     },
     H_password:{
        type:"string",
        required:true
     }
},{
    timestamps:true
});

export const user = mongoose.model("User",userSchema);//named export