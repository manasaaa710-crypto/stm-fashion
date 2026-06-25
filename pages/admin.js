let products =
JSON.parse(localStorage.getItem("products")) || [];



let box =
document.getElementById("admin-products");



displayProducts();



function addProduct(){


let product={


name:
document.getElementById("pname").value,


price:
document.getElementById("pprice").value,


image:
document.getElementById("pimage").value


};



products.push(product);



localStorage.setItem(
"products",
JSON.stringify(products)
);



location.reload();


}




function displayProducts(){


box.innerHTML="";



products.forEach((item,index)=>{


box.innerHTML += `


<div class="product-card">


<img src="${item.image}">


<h3>${item.name}</h3>


<p>₹${item.price}</p>


<button onclick="deleteProduct(${index})">

Delete

</button>


</div>


`;


});


}



function deleteProduct(index){


products.splice(index,1);



localStorage.setItem(
"products",
JSON.stringify(products)
);



location.reload();


}
// Dashboard Count


let orders =
JSON.parse(localStorage.getItem("orders")) || [];



let users =
JSON.parse(localStorage.getItem("user")) || [];




document.getElementById("product-count").innerHTML =
products.length;



document.getElementById("order-count").innerHTML =
orders.length;



if(users.name){

document.getElementById("user-count").innerHTML =
1;

}
else{

document.getElementById("user-count").innerHTML =
0;

}