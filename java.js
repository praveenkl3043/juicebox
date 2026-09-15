let cart = [];
fetch("http://127.0.0.1:5000/api/products")
    .then(response => response.json())
    .then(products => {
        console.log("Products from Python:", products);
    })
    .catch(error => {
        console.error("Backend connection failed:", error);
    });
let shopStatus = "open";    
const fruitshakesButton = document.getElementById("fruitshakesButton");
const juiceButton = document.getElementById("juiceButton");
const lemonspecialButton = document.getElementById("lemonspecialButton");
const thickshakesButton = document.getElementById("thickshakesButton");
const milkshakesButton = document.getElementById("milkshakesButton");
const mocktailsButton = document.getElementById("mocktailsButton");
const mainContent = document.getElementById("mainContent");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");


juiceButton.addEventListener("click", function() {
    loadProductsByCategory("Juice", "Juice");
});
function loadProductsByCategory(category, heading) {

    fetch("http://127.0.0.1:5000/api/products")
        .then(response => response.json())
        .then(products => {

            const filteredProducts = products.filter(function(product) {
                return product.category === category;
            });

            mainContent.innerHTML = `
                <h2>${heading}</h2>

                <div class="product-container">

                    ${filteredProducts.map(function(product) {

                        return `
                            <div class="product-card">

                                <img src="${product.image}"
                                     alt="${product.display_name}">

                                <h3>${product.display_name}</h3>

                                <p>₹${product.price}</p>

                                <button onclick="addToCart('${product.name}', ${product.price})">
                                    Add to Cart
                                </button>

                            </div>
                        `;

                    }).join("")}

                </div>
            `;
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
}
fruitshakesButton.addEventListener("click", function() {
    loadProductsByCategory("Fruit shakes", "Fruit shakes");
});

milkshakesButton.addEventListener("click", function() {
    loadProductsByCategory("Milk shakes", "MILK SHAKES");
});

thickshakesButton.addEventListener("click", function() {
    loadProductsByCategory("Thick shakes", "THICK SHAKES");
});
lemonspecialButton.addEventListener("click", function() {
    loadProductsByCategory("Lemon specials", "LEMON SPECIALS");
});
mocktailsButton.addEventListener("click", function() {
    loadProductsByCategory("Mocktails", "MOCKTAILS");
});

function addToCart(name, price) {

    if (shopStatus !== "open") {

        if (shopStatus === "break") {
            alert("⏸️ Shop is currently on break.");
        }

        else if (shopStatus === "closed") {
            alert("🔴 Shop is currently closed.");
        }

        return;
    }


    const existingItem = cart.find(function(item) {

        return item.name === name;

    });


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }


    console.log(cart);

    displayCart();
    updateMobileCart();

}
function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let totalItems = 0;
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some fresh juices to your cart.</p>
            </div>
        `;

    }

    cart.forEach(function(item) {

        total += item.price * item.quantity;
        totalItems += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-top">
                <h3>${item.name}</h3>
                <p>₹${item.price * item.quantity}</p>
                </div>

                <button onclick="decreaseQuantity('${item.name}')">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity('${item.name}')">
                    +
                </button>

            </div>
        `;
    });

    cartTotal.innerHTML = total;

    // Update cart header count
    const cartItemCount = document.getElementById("cartItemCount");

    if (totalItems === 1) {
        cartItemCount.textContent = "1 Item";
    } else {
        cartItemCount.textContent = totalItems + " Items";
    }
}
function updateMobileCart() {

    const mobileCartCount =
        document.getElementById("mobileCartCount");

    let totalItems = 0;

    cart.forEach(function(item) {
        totalItems += item.quantity;
    });

    if (totalItems === 1) {

        mobileCartCount.textContent = "1 Item added";

    } else {

        mobileCartCount.textContent =
            totalItems + " Items added";

    }
}
function increaseQuantity(name) {

    const item = cart.find(function(item) {

        return item.name === name;

    });

    item.quantity++;

    displayCart();

}
function decreaseQuantity(name) {

    const item = cart.find(function(item) {

        return item.name === name;

    });

    item.quantity--;

    if (item.quantity === 0) {

        cart = cart.filter(function(item) {

            return item.name !== name;

        });

    }

    displayCart();

}
checkoutButton.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        showPaymentOptions();

    }

});
function showPaymentOptions() {

    cartItems.innerHTML = `
        <h3>Select Payment Method</h3>

        <button id="upiButton">
            Pay using UPI
        </button>

        <button id="paymentDoneButton">
            ✅ Payment Completed
        </button>
    `;

    const upiButton = document.getElementById("upiButton");
    const paymentDoneButton = document.getElementById("paymentDoneButton");

    upiButton.addEventListener("click", function() {

        const total = cart.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0);

        const upiUrl =
            `upi://pay?pa=lalpraveenkl@okhdfcbank&pn=Juice%20Box&am=${total}&cu=INR`;

        window.location.href = upiUrl;
    });

    paymentDoneButton.addEventListener("click", function() {

        // Hide payment buttons
        upiButton.style.display = "none";
        paymentDoneButton.style.display = "none";

        // Show payment completed message
        cartItems.innerHTML = `
            <div class="payment-success">
                <h3>✅ Payment Completed</h3>
                <p>Your payment has been completed.</p>
            </div>
        `;

        // Hide checkout button
        checkoutButton.style.display = "none";

        // Show Generate Bill button
        document.getElementById("billSection").style.display = "block";
    });
}
function clearCart() {

    cart = [];

    displayCart();
    updateMobileCart();

}
function openCart() {

    const cartElement = document.getElementById("cart");

    cartElement.classList.add("cart-open");

}
function closeCart() {

    const cartElement = document.getElementById("cart");

    cartElement.classList.remove("cart-open");

}
function generateBill() {

    let billHTML = `
        <div class="bill">
            <h2>JUICE BOX</h2>
            <p>Bill</p>
            <hr>

            <p><strong>Bill No:</strong> JB${Date.now()}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

            <hr>

            <table>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
    `;

    let grandTotal = 0;
    fetch("http://127.0.0.1:5000/api/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        items: cart,
        total: cart.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0),
        payment: "UPI",
        date: new Date().toISOString()
    })
})
.then(response => response.json())
.then(data => {
    console.log("Order saved:", data);
})
.catch(error => {
    console.error("Error saving order:", error);
});

    cart.forEach(function(item) {

        let itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        billHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price}</td>
                <td>₹${itemTotal}</td>
            </tr>
        `;
    });

    billHTML += `
            </table>

            <hr>

            <h3>Total: ₹${grandTotal}</h3>

            <p><strong>Payment:</strong> UPI</p>

            <p>Thank you for visiting Juice Box!</p>

            <button onclick="window.print()">🖨 Print / Save PDF</button>
        </div>
    `;

    cartItems.innerHTML = billHTML;
}
document.getElementById("generateBillButton").addEventListener("click", function() {
    generateBill();
});
function loadShopStatus() {

    fetch("http://127.0.0.1:5000/api/shop/status")

        .then(response => response.json())

        .then(data => {

            shopStatus = data.status;

            const message = document.getElementById("shopStatusMessage");

            if (shopStatus === "open") {

                message.style.display = "none";

            }

            else if (shopStatus === "break") {

                message.style.display = "block";

                message.textContent =
                    "⏸️ Shop is currently on break. Please try again later.";

            }

            else if (shopStatus === "closed") {

                message.style.display = "block";

                message.textContent =
                    "🔴 Shop is currently closed. Please try again later.";

            }

        })

        .catch(error => {

            console.error("Error loading shop status:", error);

        });
}


loadShopStatus();