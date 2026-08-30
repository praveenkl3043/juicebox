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
            <img src="images/Juice/FreshLemon Juice.jpeg" alt="FreshLemon Juice">
                <h3>FRESH LEMON</h3>
                <p>₹40</p>
                <button onclick="addToCart('FreshLemon Juice', 40)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">FRESH LEMON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹50</p>
                <button onclick="addToCart('freshlemonparcel', 50)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Papaya Juice.jpeg" alt="Papaya Juice">
                <h3>PAPAYA</h3>
                <p>₹50</p>
                <button onclick="addToCart('Papaya Juice', 50)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">PAPAYA</span>
    <span class="product-type">(P)</span></h3>
                <p>₹60</p>
                <button onclick="addToCart('Apple Juice', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Watermelon Juice.jpeg" alt="Watermelon Juice">
                <h3>WATER MELON</h3>
                <p>₹50</p>
                <button onclick="addToCart('Watermelon Juice', 50)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">WATER MELON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹60</p>
                <button onclick="addToCart('Apple Juice', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Amla Juice.jpeg" alt="Amla Juice">
                <h3>AMLA</h3>
                <p>₹60</p>
                <button onclick="addToCart('Amla Juice', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">AMLA</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Betroot Juice.jpeg" alt="Betroot Juice">
                <h3>BEETROOT</h3>
                <p>₹70</p>
                <button onclick="addToCart('Betroot Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">BEETROOT</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/PineApple Juice.jpeg" alt="PineApple Juice">
                <h3>PINEAPPLE</h3>
                <p>₹70</p>
                <button onclick="addToCart('PineApple Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">PINEAPPLE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/MuskMelon Juice.jpeg" alt="MuskMelon Juice">
                <h3>MUSK MELON</h3>
                <p>₹70</p>
                <button onclick="addToCart('MuskMelon Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">MUSK MELON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Chikoo Juice.jpeg" alt="Chikoo Juice">
                <h3>CHIKOO</h3>
                <p>₹70</p>
                <button onclick="addToCart('Chikoo Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">CHIKOO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Banana Juice.jpeg" alt="Banana Juice">
                <h3>BANANA</h3>
                <p>₹70</p>
                <button onclick="addToCart('Banana Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">BANANA</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Carrot Juice.jpeg" alt="Carrot Juice">
                <h3>CARROT</h3>
                <p>₹70</p>
                <button onclick="addToCart('Carrot Juice', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">CARROT</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Grape Juice.jpeg" alt="Grape Juice">
                <h3>GRAPE</h3>
                <p>₹80</p>
                <button onclick="addToCart('Grape Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">GRAPE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3>Apple Juice</h3>
                <p>₹80</p>
                <button onclick="addToCart('Apple Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">APPLE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Pomogrante Juice.jpeg" alt="Pomogrante Juice">
                <h3>POMEGRANATE</h3>
                <p>₹110</p>
                <button onclick="addToCart('Pomogrante Juice', 110)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">POMEGRANATE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹120</p>
                <button onclick="addToCart('Apple Juice', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Orange Juice.jpeg" alt="Orange Juice">
                <h3>ORANGE</h3>
                <p>₹110</p>
                <button onclick="addToCart('Orange Juice', 110)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">ORANGE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹120</p>
                <button onclick="addToCart('Apple Juice', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Mosambi Juice.jpeg" alt="Mosambi Juice">
                <h3>MOSAMBI</h3>
                <p>₹80</p>
                <button onclick="addToCart('Mosambi Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
            <h3 class="product-name">
    <span class="product-title">MOSAMBI</span>
    <span class="product-type">(P)</span></h3>    
            <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Mango Juice.jpeg" alt="Mango Juice">
                <h3>MANGO</h3>
                <p>₹80</p>
                <button onclick="addToCart('Mango Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">MANGO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Fig Juice.jpeg" alt="Fig Juice">
                <h3>FIG</h3>
                <p>₹80</p>
                <button onclick="addToCart('Fig Juice', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">FIG</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('Apple Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/MixedFruit Juice.jpeg" alt="MixedFruit Juice">
                <h3>MIXED FRUIT</h3>
                <p>₹90</p>
                <button onclick="addToCart('MixedFruit Juice', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="MixedFruit Juice(P)">
                <h3 class="product-name">
    <span class="product-title">MIXED FRUIT</span>
    <span class="product-type">(P)</span></h3>
                <p>₹100</p>
                <button onclick="addToCart('MixedFruit Juice(P)', 100)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/ABC Juice.jpeg" alt="ABC Juice">
                <h3 class="product-name">
    <span class="product-title">ABC</span>
    <span class="product-description">(APPLE,BEETROOT,CARROT)</span>
               </h3>
                <p>₹110</p>
                <button onclick="addToCart('ABC Juice', 110)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="ABC Juice(P)">
                <h3 class="product-name">
    <span class="product-title">ABC</span>
    <span class="product-description">(APPLE,BEETROOT,CARROT)</span>
    <span class="product-type">(P)</span>
               </h3>
                <p>₹120</p>
                <button onclick="addToCart('ABC Juice(P)', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/CARRAJGE Juice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">CARRANGE</span>
    <span class="product-description">()</span>
               </h3>
                <p>₹120</p>
                <button onclick="addToCart('CARRANGE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Juice/Applejuice.jpeg" alt="Apple Juice">
                <h3 class="product-name">
    <span class="product-title">CARRANGE</span>
    <span class="product-description">(CARROT,ORANGE)</span>
    <span class="product-type">(P)</span>
               </h3>
                <p>₹130</p>
                <button onclick="addToCart('CARRANGE(P)', 130)">
    Add to Cart
</button>
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
    updateMobileCart();

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