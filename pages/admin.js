// Initialize products from localStorage or empty array
let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let registeredUser = JSON.parse(localStorage.getItem("user"));

// Load admin dashboard statistics and list products on load
document.addEventListener("DOMContentLoaded", () => {
    updateDashboardStats();
    displayProducts();
});

function displayProducts() {
    let box = document.getElementById("admin-products");
    if (!box) return;
    box.innerHTML = "";

    if (products.length === 0) {
        box.innerHTML = "<h2 style='grid-column: 1/-1; text-align: center; color: #888; font-weight: 400;'>No Products Added Yet</h2>";
        return;
    }

    products.forEach((item, index) => {
        box.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <div style="display:flex; justify-content:center; gap:10px; margin-top:15px;">
                    <button class="admin-btn-edit" onclick="openEditModal(${index})">Edit</button>
                    <button class="admin-btn-delete" onclick="deleteProduct(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function addProduct() {
    let name = document.getElementById("pname").value.trim();
    let price = parseFloat(document.getElementById("pprice").value);
    let image = document.getElementById("pimage").value.trim();

    if (!name || isNaN(price) || !image) {
        alert("Please enter all valid product details.");
        return;
    }

    let product = {
        name: name,
        price: price,
        image: image
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added successfully!");
    
    // Clear form inputs
    document.getElementById("pname").value = "";
    document.getElementById("pprice").value = "";
    document.getElementById("pimage").value = "";

    displayProducts();
    updateDashboardStats();
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts();
        updateDashboardStats();
    }
}

// Edit Modal Functions
function openEditModal(index) {
    let modal = document.getElementById("editModal");
    let product = products[index];

    if (!modal || !product) return;

    document.getElementById("edit-index").value = index;
    document.getElementById("edit-pname").value = product.name;
    document.getElementById("edit-pprice").value = product.price;
    document.getElementById("edit-pimage").value = product.image;

    modal.style.display = "flex";
}

function closeEditModal() {
    let modal = document.getElementById("editModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function saveEditProduct() {
    let index = parseInt(document.getElementById("edit-index").value);
    let name = document.getElementById("edit-pname").value.trim();
    let price = parseFloat(document.getElementById("edit-pprice").value);
    let image = document.getElementById("edit-pimage").value.trim();

    if (isNaN(index) || !name || isNaN(price) || !image) {
        alert("Please enter valid product details.");
        return;
    }

    // Update product
    products[index] = {
        name: name,
        price: price,
        image: image
    };

    localStorage.setItem("products", JSON.stringify(products));
    alert("Product details updated successfully!");
    closeEditModal();
    displayProducts();
    updateDashboardStats();
}

function updateDashboardStats() {
    let productCountElem = document.getElementById("product-count");
    let orderCountElem = document.getElementById("order-count");
    let userCountElem = document.getElementById("user-count");

    if (productCountElem) {
        productCountElem.innerText = products.length;
    }
    if (orderCountElem) {
        orderCountElem.innerText = orders.length;
    }
    if (userCountElem) {
        // Mocks registered users: check if there's a user object in localStorage
        userCountElem.innerText = registeredUser ? 1 : 0;
    }
}

// Close modal if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById("editModal");
    if (event.target === modal) {
        closeEditModal();
    }
}