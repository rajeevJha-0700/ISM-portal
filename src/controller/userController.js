import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import { user } from "../model/userSchema.js";
import { tokenGenerator, tokenVerifier } from "../utils/jwt.js";
import { Hash, passwordVerifier } from "../utils/passwordHashing.js";
//import { transporter } from "../services/mailService.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
       try {
//        const token = tokenGenerator(username, email, password);
//         //verification through mail
//         const mailObject = {
//             from: process.env.SERVICE_PROVIDER_MAIL,
//             to: email,
//             subject: "USER VERIFICATION (FROM ISM)",
//             html: `
//   <h2>Click the button below to verify your email</h2>
//   <a href="https://google.com" 
//      style="
//        display: inline-block;
//        padding: 10px 20px;
//        background-color: #007bff;
//        color: white;
//        text-decoration: none;
//        border-radius: 5px;
//        font-weight: bold;
//        font-family: sans-serif;
//      ">
//      Verify Email
//   </a>
// `

            
//         };
//         await transporter.sendMail(mailObject); //link is sent to the provided mail 
        
    //now when user will click on the link the url will become verify-mail and as app gets verify-mail , verifyMail() will get triggered , also url now have token , so we can decode that token and that token has username , email and password and there inside verifyMail() we can hash the password and save it to the database
     
   //remove it when you will restart mail verification
   const H_password = await Hash(password);
   const USER = new user({username,email,H_password});
   await USER.save();
   const id = USER._id; //_id is the default id provided to each entries in mongo database
   const token = tokenGenerator(username,email,id);
   console.log("new user saved");
    
   res.cookie("token",token,{
    httpOnly:true,
    maxAge:7*24*60*60*1000
   })
   return res.status(201).json(token);

  } catch (err) {
    console.log("user cannot be registered...", err);
    return res.status(500);
  }
};
