let cart = JSON.parse(localStorage.getItem("cart")) || [];


let box = document.getElementById("cart-items");

let total = 0;


if(cart.length === 0){

box.innerHTML = "<h2>Cart is Empty</h2>";

}



cart.forEach(item => {


box.innerHTML += `

<div class="product-card">

<img src="${item.image}">


<h3>${item.name}</h3>

<p>₹${item.price}</p>


<button onclick="removeItem('${item.name}')">
Remove
</button>


</div>

`;


total += item.price;


});



document.getElementById("total").innerHTML =
"Total Price : ₹" + total;



function removeItem(name){


cart = cart.filter(item => item.name !== name);


localStorage.setItem("cart",JSON.stringify(cart));


location.reload();


}
// Checkout

let checkoutBtn =
document.getElementById("checkout");


if(checkoutBtn){


checkoutBtn.onclick = function(){


alert("Order placed successfully 🎉");


localStorage.removeItem("cart");


window.location.href="../index.html";


}

}