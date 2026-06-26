function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let box = document.getElementById("wishlist-items");
    
    if (!box) return;
    
    box.innerHTML = "";

    if (wishlist.length === 0) {
        box.innerHTML = "<h2 style='grid-column: 1/-1; text-align: center; color: #888; font-weight: 400;'>Your Wishlist is Empty</h2>";
        return;
    }

    wishlist.forEach((item, index) => {
        box.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
                    <button onclick="moveToCart('${item.name}', ${item.price}, '${item.image}')">
                        Add to Cart
                    </button>
                    <button onclick="removeWish('${item.name}')" style="background: #e74c3c;">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });
}

function removeWish(name) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(item => item.name !== name);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
    if (typeof updateCounts === "function") {
        updateCounts();
    }
}

function moveToCart(name, price, image) {
    if (typeof addCart === "function") {
        addCart(name, price, image);
        // Automatically remove from wishlist after adding to cart
        removeWish(name);
    } else {
        // Fallback if script.js isn't fully loaded
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({ name: name, price: price, image: image, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        removeWish(name);
        alert(name + " added to cart!");
        location.reload();
    }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    displayWishlist();
});