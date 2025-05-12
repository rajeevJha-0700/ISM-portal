import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
   sensor_name:{
        type:"String",
        required: true,
   },
   sensor_type:{
        type:"String",
        required: true,
   },
   sensor_Id:{
         type:"String",
        required: true,
        unique: true,
   },
   location:{
        type:"String",
        required: true,
   },
   users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
},
{
    timestamps: true
});

export const sensor = mongoose.model("Sensor",sensorSchema) //named export