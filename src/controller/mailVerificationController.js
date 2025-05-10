import { tokenVerifier } from "../utils/jwt.js";
import { user } from "../model/userSchema.js";
import { Hash } from "../utils/passwordHashing.js";
import dotenv from "dotenv";
dotenv.config()
export const verifyMail = async(req,res)=>{
    console.log("hii")
    const token = req.query.token;
   try{
     const decoded = tokenVerifier(token);
     const {username,email,password} = decoded; 
     const H_password = await Hash(password);
       
     const USER = new user({username,email,H_password});
     await USER.save();
     console.log("new user saved");
     return res.status(201).json("successfully registered");
    
   }catch(err){
    console.log("email cannot be verified ...",err);
    return res.status(500);
   }

}