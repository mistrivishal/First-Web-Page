var otp = "12345"

document.querySelector("form").addEventListener("submit",confirm)

function confirm(){
    event.preventDefault();
    var inputotp = document.querySelector("#otp").value
    console.log(inputotp)
    if(otp==inputotp){
        alert("Payment succesfull")
        window.location.href="/HTML/order.html"
    }
}