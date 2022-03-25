var cart = JSON.parse(localStorage.getItem("myCart"))||[]

var length = cart.length;
  var items = document.getElementById("icon");
  items.innerText= `  ${length}`;
  items.style.fontSize="18px";
  items.style.color="orange"


var total = cart.reduce(function(sum,elem){
    return sum + +(elem.price)
},0)

var totaldis = cart.reduce(function(sum,elem){
    return sum + +(elem.strikedoffprice)
},0)

var discount = totaldis - total;

// total.style.fontWeight="600";
var items = cart.length;
var box2 = document.createElement("div")
box2.setAttribute("class","cartTotal")

var subTotal = document.createElement("h2");
subTotal.textContent = `Subtotal (${items} item): ₹ ${total}.00/-`;

var dis = document.createElement("p");
dis.textContent = `You save total: ₹ ${discount} hurray!`;

var thanks = document.createElement("p");
thanks.innerText="Proceed to Buy"

var btn1 = document.createElement("button");
btn1.innerText="Proceed to Buy"

box2.append(subTotal,dis,btn1)
document.querySelector("#remove2").append(box2);





if(JSON.parse(localStorage.getItem("myCart"))!==null&&JSON.parse(localStorage.getItem("myCart"))!==[]){
//   console.log(div)
  document.querySelector("#remove").innerHTML="";

  cart.map(function(elem,index) {
  var box = document.createElement("div");

  

  var img = document.createElement("img");
  img.src = elem.image_url;

  var name = document.createElement("h4");
  name.textContent = elem.name;

  var priceDiv = document.createElement("div");
  priceDiv.setAttribute("class","price1")

  var price = document.createElement("p");
  price.innerText = "₹ " + elem.price;

  var Sprice = document.createElement("p");
  Sprice.innerText = "₹ " + elem.strikedoffprice;
  Sprice.style.textDecoration="line-through"
  Sprice.style.fontSize="14px"
  Sprice.style.color="grey"
  Sprice.style.fontWeight="400"

   var discount =Math.floor(100 - ((+elem.price*100)/+elem.strikedoffprice))

  var disc = document.createElement("p")
  disc.innerText=`${discount}% off`
  disc.style.color="#5aa02c"
  disc.style.fontSize="13px"

  var btn = document.createElement("button")
  btn.innerText="Remove from Cart"
  btn.addEventListener("click",function(){
      removeFromcart(elem,index)
  })

  priceDiv.append(price,Sprice,disc,btn);

  box.append(img, name, priceDiv);

  document.querySelector("#container1").append(box);
});

    function removeFromcart(elem,index){
        cart.splice(index,1)
        localStorage.setItem("myCart",JSON.stringify(cart))
        window.location.reload()
    }
}
else {
        document.querySelector("#empty").innerHTML
        document.querySelector("#remove2").innerHTML="";
}