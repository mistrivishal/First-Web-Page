var cardData = [
    {
        CardNo:"1111111111111111",
        date: "2022-08",
        CVV: "170",
        otp: "12345",
    }
]
var data = [    cardData.CardNo,cardData.date,cardData.CVV]
document.querySelector("form").addEventListener("submit", makePayment);


function makePayment() {
    event.preventDefault();
    console.log("inside");
    var card = document.querySelector("#cardNo").value
    var name = document.querySelector("#name").value
    var date = document.querySelector("#date").value
    var CVV = document.querySelector("#CVV").value
    
    console.log(date)
    for (var i = 0; i < cardData.length; i++) {
        console.log(cardData[i]);
        if (
          cardData[i].CardNo == card &&
          cardData[i].date == date &&
          cardData[i].CVV == CVV
        ) {
          alert("OTP send on registered phone number");
          window.location.href = "/HTML/otp.html";
          break;
        } else {
            alert(`Please fill all valid card details to place the order`);
            window.location.href = "/HTML/details.html";
        }
      }
}