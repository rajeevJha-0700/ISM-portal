import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
const tokenKey = process.env.KEY_JWT;

export const tokenGenerator = (username,email,password)=>{
    try {
        return jwt.sign({username:username,email:email,password:password},tokenKey,{expiresIn:"30d"});
    } catch (error) {
        console.log("cannot generate token...",error);
    }
}

export const tokenVerifier = (tokenFromClient)=>{
    return jwt.verify(tokenFromClient,tokenKey);
};