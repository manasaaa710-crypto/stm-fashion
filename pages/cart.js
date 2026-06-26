function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    
    if (!box) return;
    
    box.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        box.innerHTML = "<h2 style='grid-column: 1/-1; text-align: center; color: #888; font-weight: 400;'>Your Cart is Empty</h2>";
        if (totalElement) totalElement.innerHTML = "Total Price : ₹0";
        return;
    }

    cart.forEach((item, index) => {
        let itemQty = item.quantity || 1;
        let itemSubtotal = item.price * itemQty;
        total += itemSubtotal;

        box.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price} each</p>
                <p style="font-size: 14px; color: #666; margin-top: 5px;">Subtotal: ₹${itemSubtotal}</p>
                
                <div class="cart-qty-container">
                    <button class="qty-btn" onclick="updateQty('${item.name}', -1)">-</button>
                    <span class="qty-val">${itemQty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.name}', 1)">+</button>
                </div>

                <button onclick="removeItem('${item.name}')" style="background: #e74c3c; margin-top: 10px;">
                    Remove
                </button>
            </div>
        `;
    });

    if (totalElement) {
        totalElement.innerHTML = "Total Price : ₹" + total;
    }
}

function updateQty(name, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(item => item.name === name);
    
    if (item) {
        item.quantity = (item.quantity || 1) + change;
        
        if (item.quantity < 1) {
            cart = cart.filter(i => i.name !== name);
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
        
        if (typeof updateCounts === "function") {
            updateCounts();
        }
    }
}

function removeItem(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    
    if (typeof updateCounts === "function") {
        updateCounts();
    }
}

// Checkout
let checkoutBtn = document.getElementById("checkout");
if (checkoutBtn) {
    checkoutBtn.onclick = function() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        let total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

        orders.push({
            items: cart,
            date: new Date().toLocaleString(),
            total: total
        });

        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.removeItem("cart");

        alert("Order placed successfully 🎉");
        
        // Update nav badge count
        if (typeof updateCounts === "function") {
            updateCounts();
        }
        
        window.location.href = "orders.html";
    }
}

// Load cart display on page load
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});
