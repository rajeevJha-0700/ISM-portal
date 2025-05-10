import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);

import {databaseConnection} from "./database_configuration/connectDB.js";
databaseConnection();

import dotenv from "dotenv";
dotenv.config();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile("./index.html",{root:"public"});
})
import { verifyMail } from "./controller/mailVerificationController.js";
app.get("/verify-mail",verifyMail);
//router section
import sensor_router from "./routes/sensor_routes.js";
import user_router from "./routes/user_routes.js";
app.use("/api/sensor",sensor_router); //this is a sensor route and all sensor related dealings are on this way
app.use("/api/user",user_router);//all user related things will be on this route



server.listen(port,host,()=>{
    console.log("server started...")
})