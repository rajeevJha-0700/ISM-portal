import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function databaseConnection() {
    try{
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("successfully connected to database");
    }catch(err){
       console.log("can't connect to database....", err);
    }
}