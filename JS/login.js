document.querySelector("form").addEventListener("submit", loginFun);
var RegUser = JSON.parse(localStorage.getItem("userCredentials"));
//console.log(RegUser);

function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;
  //console.log(email, pass);

  for (var i = 0; i < RegUser.length; i++) {
    console.log(RegUser[i]);
    if (
      RegUser[i].email == enteredEmail &&
      RegUser[i].password == enteredPass
    ) {
      alert("login successfull");
      window.location.href = "/index.html";
      break;
    } else {
        alert("Wrong Credentials please try again");
    }
  }
}