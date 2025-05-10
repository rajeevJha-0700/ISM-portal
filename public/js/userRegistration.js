 console.log("hello")
const form = document.querySelector("#signup-form");
let signupFormData = {};

form.addEventListener("submit",async(evt)=>{
    evt.preventDefault();
    signupFormData = {
        username: evt.target.name.value,
        email: evt.target.email.value,
        password: evt.target.password.value
    }

    console.log(signupFormData);

    try {
        const serverResponse = await fetch("api/user/signup",{
              method: "POST",
              headers:{
                "content-type":"application/json"
              },
              body: JSON.stringify(signupFormData)
        })
        const ans = await serverResponse.json();
        console.log(ans);
        if(serverResponse.ok){
            console.log("successfully registerd");
        }else{
            console.log("there is some problem")
        }
    } catch (error) {
        alert("something went wrong...")
        console.log(error);
    }
})
