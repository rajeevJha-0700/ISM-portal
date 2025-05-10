import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
   sensor_name:{
        type:"string",
        required: true,
   },
   sensor_type:{
        type:"string",
        required: true,
   },
   sensor_id:{
         type:"string",
        required: true,
        unique: true,
   },
   location:{
        type:"string",
        required: true,
   }
},
{
    timestamps: true
});

export const sensor = mongoose.model("Sensor",sensorSchema) //named export