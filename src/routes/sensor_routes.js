import express from "express";
const router = express.Router(); //made a router 

//imports
import {sensor_Registration} from "../controller/sensorControllers.js";

//routing
 router.post("/sensor_Registration",sensor_Registration);

export default router;