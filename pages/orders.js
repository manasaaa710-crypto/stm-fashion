let orders = JSON.parse(localStorage.getItem("orders")) || [];
let box = document.getElementById("order-list");

if (box) {
    box.innerHTML = "";

    if (orders.length === 0) {
        box.innerHTML = "<h2 style='grid-column: 1/-1; text-align: center; color: #888; font-weight: 400;'>No Orders Found</h2>";
    } else {
        // Reverse array to show recent orders first
        orders.slice().reverse().forEach((order, index) => {
            let orderHtml = `
                <div class="product-card" style="text-align: left; padding: 25px;">
                    <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #C9A227;">Order #${orders.length - index}</h3>
                    <p style="margin-top: 10px; font-size: 14px; color: #666;"><strong>Date:</strong> ${order.date}</p>
                    <p style="font-size: 16px; color: #111; margin-top: 5px;"><strong>Total paid:</strong> ₹${order.total}</p>
                    
                    <h4 style="margin-top: 15px; border-bottom: 1px solid #f9f9f9; padding-bottom: 5px; font-size: 14px;">Items ordered:</h4>
                    <div style="margin-top: 10px; max-height: 150px; overflow-y: auto;">
            `;

            order.items.forEach(item => {
                orderHtml += `
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; margin-bottom: 8px; background: #fafafa; padding: 6px 10px; border-radius: 4px;">
                        <span>${item.name} <strong>x${item.quantity || 1}</strong></span>
                        <span style="color: #C9A227; font-weight: 600;">₹${item.price * (item.quantity || 1)}</span>
                    </div>
                `;
            });

            orderHtml += `
                    </div>
                </div>
            `;
            box.innerHTML += orderHtml;
        });
    }
}