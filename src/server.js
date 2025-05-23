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

import cookieParser from "cookie-parser";
app.use(cookieParser());

app.use(express.static("public"));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile("./index.html",{root:"public"});
})
// import { verifyMail } from "./controller/mailVerificationController.js";
// app.get("/verify-mail",verifyMail);
//router section
import sensor_router from "./routes/sensor_routes.js";
import user_router from "./routes/user_routes.js";
app.use("/api/sensor",sensor_router); //this is a sensor route and all sensor related dealings are on this way
app.use("/api/user",user_router);//all user related things will be on this route


//server side rendering of mySensors.ejs file
import path from "path";
app.set("view engine","ejs");
app.set("views", path.join(path.resolve(), "src/views"));
import {getAllSensors,saveSensorData,sensorActivities} from "./controller/sensorControllers.js";
import { verifyUser } from "./middleware/authMiddleware.js";
app.get("/your_sensors", verifyUser, getAllSensors);
app.get("/sensor-activities",verifyUser,sensorActivities);
app.post("/save-sensor-data",verifyUser,saveSensorData);

//test sensor

app.get('/test-sensor', (req, res) => {
 res.send("<h1>test-sensor page<h1>");
});

server.listen(port,host,()=>{
    console.log("server started...")
})