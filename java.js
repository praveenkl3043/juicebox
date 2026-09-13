let cart = [];
fetch("http://127.0.0.1:5000/api/products")
    .then(response => response.json())
    .then(products => {
        console.log("Products from Python:", products);
    })
    .catch(error => {
        console.error("Backend connection failed:", error);
    });
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


juiceButton.addEventListener("click", function () {

    fetch("http://127.0.0.1:5000/api/products")
        .then(response => response.json())
        .then(products => {

            mainContent.innerHTML = `
                <h2>Juice</h2>

                <div class="product-container">

                    ${products.map(function (product) {

                        return `
                            <div class="product-card">

                                <img src="${product.image}"
                                     alt="${product.name}">

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
            console.error("Error loading products:", error);
        });

});
fruitshakesButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>Fruit shakes</h2>

        <div class="product-container">

            <div class="product-card">
            <img src="images/fruitshake/strawberryshake.jpeg" alt="FreshLemon Juice">
                <h3>STRAWBERRY</h3>
                <p>₹80</p>
                <button onclick="addToCart('STRAWBERRY', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">STRAWBERRY</span>
    <span class="product-type">(P)</span></h3>
                <p>₹50</p>
                <button onclick="addToCart('STRAWBERRY(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/monstermangoshake.jpeg" alt="Papaya Juice">
                <h3>MONSTER MANGO SHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('MONSTER MANGO SHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/papayap.jpeg" alt="papayap">
                <h3 class="product-name">
    <span class="product-title">MONSTER MANGO SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('MONSTER MANGO SHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/kiwishake.jpeg" alt="Watermelon Juice">
                <h3>KIWI SHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('KIWI SHAKE', 50)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/watermelonp.jpeg" alt="watermelonp">
                <h3 class="product-name">
    <span class="product-title">KIWI SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('KIWI SHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/Datesshake.jpeg" alt="Amla Juice">
                <h3>DATES SHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('DATES SHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">DATES SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('DATES SHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/dragonfruitshake.jpeg" alt="Betroot Juice">
                <h3>DRAGON FRUIT SHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('DRAGON FRUIT SHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/beetrootp.jpeg" alt="beetrootp">
                <h3 class="product-name">
    <span class="product-title">DRAGON FRUIT SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('DRAGON FRUIT SHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/avacodashake.jpeg" alt="PineApple Juice">
                <h3>AVOCADO SHAKE</h3>
                <p>₹90</p>
                <button onclick="addToCart('AVOCADO SHAKE', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/pineapplep.jpeg" alt="pineapplep">
                <h3 class="product-name">
    <span class="product-title">AVOCADO SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹100</p>
                <button onclick="addToCart('AVOCADO SHAKE(P)', 100)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/fruitshake/dryfruitshake.jpeg" alt="MuskMelon Juice">
                <h3>DRY FRUIT SHAKE</h3>
                <p>₹90</p>
                <button onclick="addToCart('DRY FRUIT SHAKE', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/muskmelonp.jpeg" alt="muskmelonp">
                <h3 class="product-name">
    <span class="product-title">DRY FRUIT SHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹100</p>
                <button onclick="addToCart('DRY FRUIT SHAKE(P)', 100)">
    Add to Cart
</button>
            
            </div>

        </div>
    `;
});
milkshakesButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>MILK SHAKES</h2>

        <div class="product-container">

            <div class="product-card">
            <img src="images/milkshakes/rosemilk.jpeg" alt="FreshLemon Juice">
                <h3>ROSE MILK</h3>
                <p>₹50</p>
                <button onclick="addToCart('ROSE MILK', 50)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">ROSE MILK</span>
    <span class="product-type">(P)</span></h3>
                <p>₹60</p>
                <button onclick="addToCart('ROSE MILK(P)', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/coldcoffee.jpeg" alt="Papaya Juice">
                <h3>COLD COFFEE</h3>
                <p>₹70</p>
                <button onclick="addToCart('COLD COFFEE', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/papayap.jpeg" alt="papayap">
                <h3 class="product-name">
    <span class="product-title">COLD COFFEE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹80</p>
                <button onclick="addToCart('COLD COFFEE(P)', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/chococoffee.jpeg" alt="Watermelon Juice">
                <h3>CHOCO COFFEE</h3>
                <p>₹80</p>
                <button onclick="addToCart('CHOCO COFFEE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/watermelonp.jpeg" alt="watermelonp">
                <h3 class="product-name">
    <span class="product-title">CHOCO COFFEE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('CHOCO COFFEE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/choclatemilkshake.jpeg" alt="Amla Juice">
                <h3>CHOCOLATE MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('CHOCOLATE MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">CHOCOLATE MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('CHOCOLATE MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/vannilamilkshake.jpeg" alt="Betroot Juice">
                <h3>VANNILA MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('VANNILA MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/beetrootp.jpeg" alt="beetrootp">
                <h3 class="product-name">
    <span class="product-title">VANNILA MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('VANNILA MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/butterscotchmilkshake.jpeg" alt="PineApple Juice">
                <h3>BUTTERSCOTH MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('BUTTERSCOTH MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/pineapplep.jpeg" alt="pineapplep">
                <h3 class="product-name">
    <span class="product-title">BUTTERSCOTH MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('BUTTERSCOTH MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/blackcurrentmilkshake.jpeg" alt="MuskMelon Juice">
                <h3>BLACK CURRENT MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('BLACK CURRENT MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/muskmelonp.jpeg" alt="muskmelonp">
                <h3 class="product-name">
    <span class="product-title">BLACK CURRENT MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('BLACK CURRENT MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/pisthamilkshake.jpeg" alt="Chikoo Juice">
                <h3>PISTA MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('PISTA MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/chikoop.jpeg" alt="chikoop">
                <h3 class="product-name">
    <span class="product-title">PISTA MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('PISTA MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/Lycheemilkshake.jpeg" alt="Banana Juice">
                <h3>LYCHEE MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('LYCHEE MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/bananap.jpeg" alt="bananap">
                <h3 class="product-name">
    <span class="product-title">LYCHEE MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('LYCHEE MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/milkshakes/oreomilkshake.jpeg" alt="Carrot Juice">
                <h3>OREO MILKSHAKE</h3>
                <p>₹80</p>
                <button onclick="addToCart('OREO MILKSHAKE', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/carrotp.jpeg" alt="carrotp">
                <h3 class="product-name">
    <span class="product-title">OREO MILKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('OREO MILKSHAKE(P)', 90)">
    Add to Cart
</button>
            
            </div>

        </div>
    `;
});
thickshakesButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>THICK SHAKES</h2>

        <div class="product-container">

            <div class="product-card">
            <img src="images/Thickshake/browinethickshake.jpeg" alt="FreshLemon Juice">
                <h3>BROWINE THICKSHAKE</h3>
                <p>₹120</p>
                <button onclick="addToCart('BROWINE THICKSHAKE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">BROWINE THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹130</p>
                <button onclick="addToCart('BROWINE THICKSHAKE(P)', 130)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/kitkatshake.jpeg" alt="Papaya Juice">
                <h3>KITKAT THICKSHAKE</h3>
                <p>₹120</p>
                <button onclick="addToCart('KITKAT THICKSHAKE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/papayap.jpeg" alt="papayap">
                <h3 class="product-name">
    <span class="product-title">KITKAT THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹130</p>
                <button onclick="addToCart('KITKAT THICKSHAKE(P)', 130)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/peanutthickshake.jpeg" alt="Watermelon Juice">
                <h3>PEANUT THICKSHAKE</h3>
                <p>₹120</p>
                <button onclick="addToCart('PEANUT THICKSHAKE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/watermelonp.jpeg" alt="watermelonp">
                <h3 class="product-name">
    <span class="product-title">PEANUT THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹130</p>
                <button onclick="addToCart('PEANUT THICKSHAKE(P)', 130)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/bubblegumthickshake.jpeg" alt="Amla Juice">
                <h3>BUBBLE GUM THICKSHAKE</h3>
                <p>₹120</p>
                <button onclick="addToCart('BUBBLE GUM THICKSHAKE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">BUBBLE GUM THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹130</p>
                <button onclick="addToCart('BUBBLE GUM THICKSHAKE(P)', 130)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/darkchoclatethickshake.jpeg" alt="Betroot Juice">
                <h3>DARK CHOCOLATE THICKSHAKE</h3>
                <p>₹120</p>
                <button onclick="addToCart('DARK CHOCOLATE THICKSHAKE', 120)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/beetrootp.jpeg" alt="beetrootp">
                <h3 class="product-name">
    <span class="product-title">DARK CHOCOLATE THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹130</p>
                <button onclick="addToCart('DARK CHOCOLATE THICKSHAKE(P)', 130)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/whitechoclatethickshae.jpeg" alt="PineApple Juice">
                <h3>WHITE CHOCOLATE THICKSHAKE</h3>
                <p>₹150</p>
                <button onclick="addToCart('WHITE CHOCOLATE THICKSHAKE', 150)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/pineapplep.jpeg" alt="pineapplep">
                <h3 class="product-name">
    <span class="product-title">WHITE CHOCOLATE THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹160</p>
                <button onclick="addToCart('WHITE CHOCOLATE THICKSHAKE(P)', 160)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Thickshake/lotusbiscoffthickshake.jpeg" alt="MuskMelon Juice">
                <h3>LOTUS BISCOFF THICKSHAKE</h3>
                <p>₹150</p>
                <button onclick="addToCart('LOTUS BISCOFF THICKSHAKE', 150)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/muskmelonp.jpeg" alt="muskmelonp">
                <h3 class="product-name">
    <span class="product-title">LOTUS BISCOFF THICKSHAKE</span>
    <span class="product-type">(P)</span></h3>
                <p>₹160</p>
                <button onclick="addToCart('LOTUS BISCOFF THICKSHAKE(P)', 160)">
    Add to Cart
</button>
            
            </div>

        </div>
    `;
});
lemonspecialButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>LEMON SPECIALS</h2>

        <div class="product-container">

            <div class="product-card">
            <img src="images/Lemonspecials/pineapplelemon.jpeg" alt="FreshLemon Juice">
                <h3>PINEAPPLE LEMON</h3>
                <p>₹60</p>
                <button onclick="addToCart('PINEAPPLE LEMON', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">PINEAPPLE LEMON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹70</p>
                <button onclick="addToCart('PINEAPPLE LEMON(P)', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Lemonspecials/grapelemon.jpeg" alt="Papaya Juice">
                <h3>GRAPE LEMON</h3>
                <p>₹60</p>
                <button onclick="addToCart('GRAPE LEMON', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/papayap.jpeg" alt="papayap">
                <h3 class="product-name">
    <span class="product-title">GRAPE LEMON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹70</p>
                <button onclick="addToCart('GRAPE LEMON(P)', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Lemonspecials/mintlemon.jpeg" alt="Watermelon Juice">
                <h3>MINT LEMON</h3>
                <p>₹60</p>
                <button onclick="addToCart('MINT LEMON', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/watermelonp.jpeg" alt="watermelonp">
                <h3 class="product-name">
    <span class="product-title">MINT LEMON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹70</p>
                <button onclick="addToCart('MINT LEMON(P)', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/Lemonspecials/gingerlemon.jpeg" alt="Amla Juice">
                <h3>GINGER LEMON</h3>
                <p>₹60</p>
                <button onclick="addToCart('GINGER LEMON', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">GINGER LEMON</span>
    <span class="product-type">(P)</span></h3>
                <p>₹70</p>
                <button onclick="addToCart('GINGER LEMON(P)', 70)">
    Add to Cart
</button>
            </div>

        </div>
    `;
});
mocktailsButton.addEventListener("click", function() {
    mainContent.innerHTML = `
        <h2>MOCKTAILS</h2>

        <div class="product-container">

            <div class="product-card">
            <img src="/images/mojito/greenapplemojito.jpeg" alt="FreshLemon Juice">
                <h3>GREEN APPLE MOJITO</h3>
                <p>₹60</p>
                <button onclick="addToCart('GREEN APPLE MOJITO', 60)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/freshlemonparcel.jpeg" alt="freshlemonparcel">
                <h3 class="product-name">
    <span class="product-title">GREEN APPLE MOJITO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹70</p>
                <button onclick="addToCart('GREEN APPLE MOJITO(P)', 70)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="/images/mojito/bluelagonmojito.jpeg" alt="Papaya Juice">
                <h3>BLUE LAGON MOJITO</h3>
                <p>₹80</p>
                <button onclick="addToCart('BLUE LAGON MOJITO', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/papayap.jpeg" alt="papayap">
                <h3 class="product-name">
    <span class="product-title">BLUE LAGON MOJITO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('BLUE LAGON MOJITO(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="/images/mojito/vrginmojito.jpeg" alt="Watermelon Juice">
                <h3>VIRGIN MOJITO</h3>
                <p>₹80</p>
                <button onclick="addToCart('VIRGIN MOJITO', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/watermelonp.jpeg" alt="watermelonp">
                <h3 class="product-name">
    <span class="product-title">VIRGIN MOJITO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('VIRGIN MOJITO(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="/images/mojito/watermelonmojito.jpeg" alt="Amla Juice">
                <h3>WATERMELON MOJITO</h3>
                <p>₹80</p>
                <button onclick="addToCart('WATERMELON MOJITO', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">WATERMELON MOJITO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('WATERMELON MOJITO(P)', 90)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="/images/mojito/strawberrymojito.jpeg" alt="Amla Juice">
                <h3>STRAWBERRY MOJITO</h3>
                <p>₹80</p>
                <button onclick="addToCart('STRAWBERRY MOJITO', 80)">
    Add to Cart
</button>
            </div>
            <div class="product-card">
            <img src="images/juiceparcel/amlap.jpeg" alt="amlap">
                <h3 class="product-name">
    <span class="product-title">STRAWBERRY MOJITO</span>
    <span class="product-type">(P)</span></h3>
                <p>₹90</p>
                <button onclick="addToCart('STRAWBERRY MOJITO(P)', 90)">
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