import { tokenVerifier } from "../utils/jwt.js";
import dotenv from "dotenv";
dotenv.config();


export const verifyUser = (req,res,next)=>{
       const token = req.cookies.token; //frontend has included credentials therefore you will get cookies also 

       if(!token){
        console.log("unauthorised user tried to access protected route...")
        return res.status(401).json({message:"unauthorised user"});
       };

       try{
     const decode = tokenVerifier(token);
     req.myUser = decode; //made a custom key myUser and stored all the data that i extracted , i.e, username,email,id
     next(); //this will take to another middleware or route 
       }catch(err){
         console.log("access denied...",err)
       }
}