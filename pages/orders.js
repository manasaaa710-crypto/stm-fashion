let orders =
JSON.parse(localStorage.getItem("orders")) || [];



let box =
document.getElementById("order-list");



if(orders.length===0){

box.innerHTML =
"<h2>No Orders Found</h2>";

}



orders.forEach(order=>{


box.innerHTML += `


<div class="product-card">


<h3>Order</h3>


<p>Date: ${order.date}</p>


<p>Total: ₹${order.total}</p>



<h4>Products:</h4>


${order.items.map(item=>`

<p>
${item.name} - ₹${item.price}
</p>

`).join("")}



</div>


`;



});