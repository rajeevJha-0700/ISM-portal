import express from "express";
const router = express.Router(); //made a router 

//imports
import {sensor_Registration,getAllSensors} from "../controller/sensorControllers.js";
import { verifyUser } from "../middleware/authMiddleware.js";

//routing
 router.post("/sensor_Registration",verifyUser,sensor_Registration);
router.get("/your_sensors",verifyUser,getAllSensors);
export default router;