import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        auth:{
            user: process.env.SERVICE_PROVIDER_MAIL,
            pass: process.env.MAIL_PASS_KEY
        }
    }
);