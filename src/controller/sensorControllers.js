import {sensor} from "../model/sensorSchema.js";

export const sensor_Registration = async(req,res)=>{
    const {sensor_name,sensor_type,sensor_id,location} = req.body;
    console.log(req.body);
    try {
        const SENSOR = new sensor({sensor_name,sensor_type,sensor_id,location});//sensor model accepts object only
        await SENSOR.save();
        return res.status(201);
    } catch (error) {
        console.log("can't register this sensor...",error);
        return res.status(500).json({response:"internal server error"});
    }
};

