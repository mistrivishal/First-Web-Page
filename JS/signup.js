document.querySelector("form").addEventListener("submit", signUpFun);

var userData = JSON.parse(localStorage.getItem("userCredentials"))||[]

function signUpFun() {
  event.preventDefault();
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var password = document.querySelector("#email").value
    var username = document.querySelector("#email").value
    

  if(name!==""&&email!==""&&password!==""&&username!==""){
    var userinput = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value,
        userName: document.querySelector("#user").value,
      };
      //console.log(userObj);
      userData.push(userinput);
      //console.log(userData)
      localStorage.setItem("userCredentials",JSON.stringify(userData))
    //   localStorage.clear();
    alert("Signup successfull")
    window.location.href = "login.html";
  }
  else{
      alert("Please fill the required data to continue")
  }
}