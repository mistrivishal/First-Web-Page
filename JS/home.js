var cart = JSON.parse(localStorage.getItem("myCart"))||[]

var length = cart.length;
var items = document.getElementById("icon");
items.innerText= `  ${length}`;
items.style.fontSize="18px";
items.style.color="orange"