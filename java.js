let cart = [];
const juiceButton = document.getElementById("juiceButton");
const mainContent = document.getElementById("mainContent");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");


juiceButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>Juice</h2>

        <div class="product-container">

            <div class="product-card">
                <h3>Apple Juice</h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>

            <div class="product-card">
                <h3>Banana Juice</h3>
                <p>₹70</p>
                <button onclick="addToCart('Banana Juice', 70)">
    Add to Cart
</button>
            </div>

            <div class="product-card">
                <h3>Beetroot Juice</h3>
                <p>₹70</p>
                <button onclick="addToCart('Beetroot Juice', 70)">
    Add to Cart
</button>
            </div>

            <div class="product-card">
                <h3>Carrot Juice</h3>
                <p>₹70</p>
                <button onclick="addToCart('Carrot Juice', 70)">
    Add to Cart
</button>
            </div>

            <div class="product-card">
                <h3>Chikoo Juice</h3>
                <p>₹70</p>
                <button onclick="addToCart('Chikoo Juicee', 70)">
    Add to Cart
</button>>
            </div>

        </div>
    `;
});

function addToCart(name, price) {

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

}
function displayCart() {

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(function(item) {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

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
    `;

    const upiButton = document.getElementById("upiButton");

    upiButton.addEventListener("click", function() {

        const total = cart.reduce(function(sum, item) {

            return sum + (item.price * item.quantity);
        
        }, 0);
        const upiUrl = `upi://pay?pa=lalpraveenkl@okhdfcbank&pn=Juice%20Box&am=${total}&cu=INR`;
        
        window.location.href = upiUrl;

    });

}