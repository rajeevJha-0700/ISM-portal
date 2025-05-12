import {sensor} from "../model/sensorSchema.js";
import { user } from "../model/userSchema.js";
import dotenv from "dotenv";
dotenv.config();
export const sensor_Registration = async(req,res)=>{
    const {sensor_name,sensor_type,sensor_Id,location} = req.body;
    const userId = req.myUser.id;
    console.log(userId);
    console.log(req.body);
    try {
        const SENSOR = new sensor({sensor_name,sensor_type,sensor_Id,location,users:userId});//accepts object only
        await SENSOR.save();
        return res.status(201).json({message:"new sensor saved successfully"});
    } catch (error) {
        console.log("can't register this sensor...",error);
        return res.status(500).json({response:"internal server error"});
    }
};

export const getAllSensors = async(req,res)=>{
    try {
        const userId = req.myUser.id;
        console.log(userId);
    const sensors = await sensor.find({users:userId});
    
    res.render("mySensors",{sensors});
    } catch (error) {
         console.log("Error fetching user sensors", error);
        res.status(500).send("Server error");
    }
}

import { SensorData } from "../model/sensorActivitiesSchema.js";

export const saveSensorData = async(req,res)=>{
    console.log("request hit..")
   let {sensor_Id,data,time} = req.body;
   console.log(time);
   time = new Date(time);
   console.log(time);
   console.log(req.body);
      try {
       const newValue = await SensorData({sensor_Id,data,time});
         await newValue.save();
         console.log(`data received from ${sensor_Id}`);
         return res.status(201).json({message:`data received from ${sensor_Id}`});
   } catch (error) {
      console.log("failed to receive data from the sensor...",error);
      return res.status(400).json({message:"no response"});
   }
}

export const sensorActivities = async(req,res)=>{
    const userId = req.myUser.id;
    try {
        const sensors = await sensor.find({users:userId})
        console.log(sensors);
        const sensorIds = sensors.map(s => s.sensor_Id);
        console.log(sensorIds);
        const tenMinAgo = new Date(Date.now() - 10 * 60 * 1000);
   console.log(tenMinAgo);
  // Fetch last 10 min data for all those sensors
  const data = await SensorData.find({
    sensor_Id: { $in: sensorIds },
    time: { $gte: tenMinAgo }
  }).sort({ time: 1 });

  // Group data by sensor_Id
  const groupedData = {};
  for (const entry of data) {
    if (!groupedData[entry.sensor_Id]) {
      groupedData[entry.sensor_Id] = [];
    }
    groupedData[entry.sensor_Id].push({
        ...entry._doc,
    data: Number(entry.data),
    });
  }
   console.log(groupedData);
  res.render("sensorActivities", { sensorDataMap: groupedData });
   console.log("ejs link activated")
    } catch (error) {
        console.log("some error occured...",error);
    }
}
