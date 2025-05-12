
const sensorRegistrationForm = document.querySelector("form");
const sensorData = {};

sensorRegistrationForm.addEventListener("submit",async(evt)=>{
    evt.preventDefault();
    sensorData.sensor_name = evt.target.name.value;
    sensorData.sensor_type = evt.target.type.value;
    sensorData.sensor_Id = evt.target.uid.value;
    sensorData.location = evt.target.location.value;
    try {
        let serverResponse = await fetch("/api/sensor/sensor_Registration",{
        method: "POST",
        credentials:"include",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(sensorData)
    });
    console.log(serverResponse.status)  
    if(serverResponse.ok){
       alert("sensor registered successfully");
       location.href = "./index.html";
    }else{
        alert("you are unauthorised");
        location.href = "./signup.html";
    }
} catch (error) {
    alert("internal server error...");
    location.href = "./index.html"
  }
    
})
