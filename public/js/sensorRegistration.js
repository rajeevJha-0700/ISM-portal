const sensorRegistrationForm = document.querySelector("form");
const sensorData = {};

sensorRegistrationForm.addEventListener("submit",async(evt)=>{
    evt.preventDefault();
    sensorData.sensor_name = evt.target.name.value;
    sensorData.sensor_type = evt.target.type.value;
    sensorData.sensor_id = evt.target.uid.value;
    sensorData.location = evt.target.location.value;
    try {
        let serverResponse = await fetch("/api/sensor/sensor_Registration",{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(sensorData)
    });
      
    if(serverResponse.ok){
       alert("sensor registered successfully");
       location.href = "./index.html";
    }else{
        console.log("oopsss")
    }
} catch (error) {
    alert("internal server error...");
    location.href = "./index.html"
  }
    
})
