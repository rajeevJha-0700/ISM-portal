import mongoose from "mongoose";

const sensorDataFromMicroController = new mongoose.Schema(
    {
        sensor_Id:{
            type:"String",
            required:true
        },
        data:{
            type:"String",
            required:true,
        }, 
        time:{
            type:Date,
            required:true
        },
        
    },
    {
        timestamps:true
    }
);

export const SensorData = mongoose.model("Data",sensorDataFromMicroController);
