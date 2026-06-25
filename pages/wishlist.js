let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];



let box =
document.getElementById("wishlist-items");



if(wishlist.length === 0){

box.innerHTML =
"<h2>Wishlist is Empty</h2>";

}



wishlist.forEach(item=>{


box.innerHTML += `


<div class="product-card">


<img src="${item.image}">


<h3>${item.name}</h3>


<p>₹${item.price}</p>



<button onclick="removeWish('${item.name}')">

Remove

</button>


</div>


`;



});





function removeWish(name){


wishlist =
wishlist.filter(
item => item.name !== name
);



localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);



location.reload();


}