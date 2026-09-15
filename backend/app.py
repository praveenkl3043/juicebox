from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
CORS(app)


products = [
    {
        "id": 1,
        "name": "FreshLemon Juice",
        "display_name": "FRESH LEMON",
        "price": 40,
        "image": "images/Juice/FreshLemon Juice.jpeg"
    },
    {
        "id": 2,
        "name": "freshlemonparcel",
        "display_name": "FRESH LEMON",
        "price": 50,
        "image": "images/juiceparcel/freshlemonparcel.jpeg"
    },
    {
    "id": 3,
    "name": "Papaya Juice",
    "display_name": "PAPAYA",
    "price": 50,
    "image": "images/Juice/Papaya Juice.jpeg"
},
{
    "id": 4,
    "name": "papayap",
    "display_name": "PAPAYA",
    "price": 60,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 5,
    "name": "Watermelon Juice",
    "display_name": "WATERMELON",
    "price": 50,
    "image": "images/Juice/Watermelon Juice.jpeg"
},
{
    "id": 6,
    "name": "watermelonp",
    "display_name": "WATERMELON (P)",
    "price": 60,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 7,
    "name": "Amla Juice",
    "display_name": "AMLA",
    "price": 60,
    "image": "images/Juice/Amla Juice.jpeg"
},
{
    "id": 8,
    "name": "amlaP",
    "display_name": "AMLA",
    "price": 90,
    "image": "images/juiceparcel/amlaP.jpeg"
},
{
    "id": 9,
    "name": "Beetroot Juice",
    "display_name": "BEETROOT",
    "price": 70,
    "image": "images/Juice/Betroot Juice.jpeg"
},
{
        "id": 10,
        "name": "beetrootp",
        "display_name": "BEETROOT (P)",
        "price": 80,
        "image": "images/juiceparcel/beetrootp.jpeg"
    },
    {
        "id": 11,
        "name": "PineApple Juice",
        "display_name": "PINEAPPLE",
        "price": 70,
        "image": "images/Juice/PineApple Juice.jpeg"
    },
    {
        "id": 12,
        "name": "pineapplep",
        "display_name": "PINEAPPLE (P)",
        "price": 80,
        "image": "images/juiceparcel/pineapplep.jpeg"
    },
    {
        "id": 13,
        "name": "MuskMelon Juice",
        "display_name": "MUSK MELON",
        "price": 70,
        "image": "images/Juice/MuskMelon Juice.jpeg"
    },
    {
        "id": 14,
        "name": "muskmelonp",
        "display_name": "MUSK MELON (P)",
        "price": 80,
        "image": "images/juiceparcel/muskmelonp.jpeg"
    },
    {
        "id": 15,
        "name": "Chikoo Juice",
        "display_name": "CHIKOO",
        "price": 70,
        "image": "images/Juice/Chikoo Juice.jpeg"
    },
    {
        "id": 16,
        "name": "chikoop",
        "display_name": "CHIKOO (P)",
        "price": 80,
        "image": "images/juiceparcel/chikoop.jpeg"
    },
    {
        "id": 17,
        "name": "Banana Juice",
        "display_name": "BANANA",
        "price": 70,
        "image": "images/Juice/Banana Juice.jpeg"
    },
    {
        "id": 18,
        "name": "bananap",
        "display_name": "BANANA (P)",
        "price": 80,
        "image": "images/juiceparcel/bananap.jpeg"
    },
    {
        "id": 19,
        "name": "Carrot Juice",
        "display_name": "CARROT",
        "price": 70,
        "image": "images/Juice/Carrot Juice.jpeg"
    },
    {
        "id": 20,
        "name": "carrotp",
        "display_name": "CARROT (P)",
        "price": 80,
        "image": "images/juiceparcel/carrotp.jpeg"
    },
    {
        "id": 21,
        "name": "Grape Juice",
        "display_name": "GRAPE",
        "price": 80,
        "image": "images/Juice/Grape Juice.jpeg"
    },
    {
        "id": 22,
        "name": "grapep",
        "display_name": "GRAPE (P)",
        "price": 90,
        "image": "images/juiceparcel/grapep.jpeg"
    },
    {
        "id": 23,
        "name": "Apple Juice",
        "display_name": "Apple Juice",
        "price": 80,
        "image": "images/Juice/Applejuice.jpeg"
    },
    {
        "id": 24,
        "name": "applep",
        "display_name": "APPLE (P)",
        "price": 90,
        "image": "images/juiceparcel/applep.jpeg"
    },
    {
        "id": 25,
        "name": "Pomogrante Juice",
        "display_name": "POMEGRANATE",
        "price": 110,
        "image": "images/Juice/Pomogrante Juice.jpeg"
    },
    {
        "id": 26,
        "name": "pomograntep",
        "display_name": "POMEGRANATE (P)",
        "price": 120,
        "image": "images/juiceparcel/pomograntep.jpeg"
    },
    {
        "id": 27,
        "name": "Orange Juice",
        "display_name": "ORANGE",
        "price": 110,
        "image": "images/Juice/Orange Juice.jpeg"
    },
    {
        "id": 28,
        "name": "orangep",
        "display_name": "ORANGE (P)",
        "price": 120,
        "image": "images/juiceparcel/orangep.jpeg"
    },
    {
        "id": 29,
        "name": "Mosambi Juice",
        "display_name": "MOSAMBI",
        "price": 80,
        "image": "images/Juice/Mosambi Juice.jpeg"
    },
    {
        "id": 30,
        "name": "mosambip",
        "display_name": "MOSAMBI (P)",
        "price": 90,
        "image": "images/juiceparcel/mosambip.jpeg"
    },
    {
        "id": 31,
        "name": "Mango Juice",
        "display_name": "MANGO",
        "price": 80,
        "image": "images/Juice/Mango Juice.jpeg"
    },
    {
        "id": 32,
        "name": "mangop",
        "display_name": "MANGO (P)",
        "price": 90,
        "image": "images/juiceparcel/mangop.jpeg"
    },
    {
        "id": 33,
        "name": "Fig Juice",
        "display_name": "FIG",
        "price": 80,
        "image": "images/Juice/Fig Juice.jpeg"
    },
    {
        "id": 34,
        "name": "figp",
        "display_name": "FIG (P)",
        "price": 90,
        "image": "images/juiceparcel/figp.jpeg"
    },
    {
        "id": 35,
        "name": "MixedFruit Juice",
        "display_name": "MIXED FRUIT",
        "price": 90,
        "image": "images/Juice/MixedFruit Juice.jpeg"
    },
    {
        "id": 36,
        "name": "mixedfruitp",
        "display_name": "MIXED FRUIT (P)",
        "price": 100,
        "image": "images/juiceparcel/mixedfruitp.jpeg"
    },
    {
        "id": 37,
        "name": "ABC Juice",
        "display_name": "ABC (APPLE,BEETROOT,CARROT)",
        "price": 110,
        "image": "images/Juice/ABC Juice.jpeg"
    },
    {
        "id": 38,
        "name": "abcp",
        "display_name": "ABC (APPLE,BEETROOT,CARROT) (P)",
        "price": 120,
        "image": "images/juiceparcel/abcp.jpeg"
    },
    {
        "id": 39,
        "name": "CARRANGE",
        "display_name": "CARRANGE (CARROT,ORANGE)",
        "price": 120,
        "image": "images/Juice/CARRAJGE Juice.jpeg"
    },
    {
        "id": 40,
        "name": "carrangep",
        "display_name": "CARRANGE (CARROT,ORANGE) (P)",
        "price": 130,
        "image": "images/juiceparcel/carrangep.jpeg"
    },
    # Fruit Shakes
{
    "id": 41,
    "name": "strawberryshake",
    "display_name": "STRAWBERRY",
    "price": 80,
    "image": "images/fruitshake/strawberryshake.jpeg"
},
{
    "id": 42,
    "name": "strawberryshakep",
    "display_name": "STRAWBERRY (P)",
    "price": 90,
    "image": "images/juiceparcel/freshlemonparcel.jpeg"
},
{
    "id": 43,
    "name": "monstermangoshake",
    "display_name": "MONSTER MANGO SHAKE",
    "price": 80,
    "image": "images/fruitshake/monstermangoshake.jpeg"
},
{
    "id": 44,
    "name": "monstermangoshakep",
    "display_name": "MONSTER MANGO SHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 45,
    "name": "kiwishake",
    "display_name": "KIWI SHAKE",
    "price": 80,
    "image": "images/fruitshake/kiwishake.jpeg"
},
{
    "id": 46,
    "name": "kiwishakep",
    "display_name": "KIWI SHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 47,
    "name": "datesshake",
    "display_name": "DATES SHAKE",
    "price": 80,
    "image": "images/fruitshake/Datesshake.jpeg"
},
{
    "id": 48,
    "name": "datesshakep",
    "display_name": "DATES SHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/amlap.jpeg"
},
{
    "id": 49,
    "name": "dragonfruitshake",
    "display_name": "DRAGON FRUIT SHAKE",
    "price": 80,
    "image": "images/fruitshake/dragonfruitshake.jpeg"
},
{
    "id": 50,
    "name": "dragonfruitshakep",
    "display_name": "DRAGON FRUIT SHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/beetrootp.jpeg"
},
{
    "id": 51,
    "name": "avocadashake",
    "display_name": "AVOCADO SHAKE",
    "price": 90,
    "image": "images/fruitshake/avacodashake.jpeg"
},
{
    "id": 52,
    "name": "avocadashakep",
    "display_name": "AVOCADO SHAKE (P)",
    "price": 100,
    "image": "images/juiceparcel/pineapplep.jpeg"
},
{
    "id": 53,
    "name": "dryfruitshake",
    "display_name": "DRY FRUIT SHAKE",
    "price": 90,
    "image": "images/fruitshake/dryfruitshake.jpeg"
},
{
    "id": 54,
    "name": "dryfruitshakep",
    "display_name": "DRY FRUIT SHAKE (P)",
    "price": 100,
    "image": "images/juiceparcel/muskmelonp.jpeg"
},
{
    "id": 55,
    "name": "rosemilk",
    "display_name": "ROSE MILK",
    "price": 50,
    "image": "images/milkshakes/rosemilk.jpeg"
},
{
    "id": 56,
    "name": "rosemilkp",
    "display_name": "ROSE MILK (P)",
    "price": 60,
    "image": "images/juiceparcel/freshlemonparcel.jpeg"
},
{
    "id": 57,
    "name": "coldcoffee",
    "display_name": "COLD COFFEE",
    "price": 70,
    "image": "images/milkshakes/coldcoffee.jpeg"
},
{
    "id": 58,
    "name": "coldcoffeep",
    "display_name": "COLD COFFEE (P)",
    "price": 80,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 59,
    "name": "chococoffee",
    "display_name": "CHOCO COFFEE",
    "price": 80,
    "image": "images/milkshakes/chococoffee.jpeg"
},
{
    "id": 60,
    "name": "chococoffeep",
    "display_name": "CHOCO COFFEE (P)",
    "price": 90,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 61,
    "name": "chocolatemilkshake",
    "display_name": "CHOCOLATE MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/choclatemilkshake.jpeg"
},
{
    "id": 62,
    "name": "chocolatemilkshakep",
    "display_name": "CHOCOLATE MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/amlap.jpeg"
},
{
    "id": 63,
    "name": "vanillamilkshake",
    "display_name": "VANNILA MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/vannilamilkshake.jpeg"
},
{
    "id": 64,
    "name": "vanillamilkshakep",
    "display_name": "VANNILA MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/beetrootp.jpeg"
},
{
    "id": 65,
    "name": "butterscotchmilkshake",
    "display_name": "BUTTERSCOTH MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/butterscotchmilkshake.jpeg"
},
{
    "id": 66,
    "name": "butterscotchmilkshakep",
    "display_name": "BUTTERSCOTH MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/pineapplep.jpeg"
},
{
    "id": 67,
    "name": "blackcurrentmilkshake",
    "display_name": "BLACK CURRENT MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/blackcurrentmilkshake.jpeg"
},
{
    "id": 68,
    "name": "blackcurrentmilkshakep",
    "display_name": "BLACK CURRENT MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/muskmelonp.jpeg"
},
{
    "id": 69,
    "name": "pisthamilkshake",
    "display_name": "PISTA MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/pisthamilkshake.jpeg"
},
{
    "id": 70,
    "name": "pisthamilkshakep",
    "display_name": "PISTA MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/chikoop.jpeg"
},
{
    "id": 71,
    "name": "lycheemilkshake",
    "display_name": "LYCHEE MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/Lycheemilkshake.jpeg"
},
{
    "id": 72,
    "name": "lycheemilkshakep",
    "display_name": "LYCHEE MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/bananap.jpeg"
},
{
    "id": 73,
    "name": "oreomilkshake",
    "display_name": "OREO MILKSHAKE",
    "price": 80,
    "image": "images/milkshakes/oreomilkshake.jpeg"
},
{
    "id": 74,
    "name": "oreomilkshakep",
    "display_name": "OREO MILKSHAKE (P)",
    "price": 90,
    "image": "images/juiceparcel/carrotp.jpeg"
},
{
    "id": 75,
    "name": "browinethickshake",
    "display_name": "BROWINE THICKSHAKE",
    "price": 120,
    "image": "images/Thickshake/browinethickshake.jpeg"
},
{
    "id": 76,
    "name": "browinethickshakep",
    "display_name": "BROWINE THICKSHAKE (P)",
    "price": 130,
    "image": "images/juiceparcel/freshlemonparcel.jpeg"
},
{
    "id": 77,
    "name": "kitkatshake",
    "display_name": "KITKAT THICKSHAKE",
    "price": 120,
    "image": "images/Thickshake/kitkatshake.jpeg"
},
{
    "id": 78,
    "name": "kitkatshakep",
    "display_name": "KITKAT THICKSHAKE (P)",
    "price": 130,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 79,
    "name": "peanutthickshake",
    "display_name": "PEANUT THICKSHAKE",
    "price": 120,
    "image": "images/Thickshake/peanutthickshake.jpeg"
},
{
    "id": 80,
    "name": "peanutthickshakep",
    "display_name": "PEANUT THICKSHAKE (P)",
    "price": 130,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 81,
    "name": "bubblegumthickshake",
    "display_name": "BUBBLE GUM THICKSHAKE",
    "price": 120,
    "image": "images/Thickshake/bubblegumthickshake.jpeg"
},
{
    "id": 82,
    "name": "bubblegumthickshakep",
    "display_name": "BUBBLE GUM THICKSHAKE (P)",
    "price": 130,
    "image": "images/juiceparcel/amlap.jpeg"
},
{
    "id": 83,
    "name": "darkchocolatethickshake",
    "display_name": "DARK CHOCOLATE THICKSHAKE",
    "price": 120,
    "image": "images/Thickshake/darkchoclatethickshake.jpeg"
},
{
    "id": 84,
    "name": "darkchocolatethickshakep",
    "display_name": "DARK CHOCOLATE THICKSHAKE (P)",
    "price": 130,
    "image": "images/juiceparcel/beetrootp.jpeg"
},
{
    "id": 85,
    "name": "whitechocolatethickshake",
    "display_name": "WHITE CHOCOLATE THICKSHAKE",
    "price": 150,
    "image": "images/Thickshake/whitechoclatethickshae.jpeg"
},
{
    "id": 86,
    "name": "whitechocolatethickshakep",
    "display_name": "WHITE CHOCOLATE THICKSHAKE (P)",
    "price": 160,
    "image": "images/juiceparcel/pineapplep.jpeg"
},
{
    "id": 87,
    "name": "lotusbiscoffthickshake",
    "display_name": "LOTUS BISCOFF THICKSHAKE",
    "price": 150,
    "image": "images/Thickshake/lotusbiscoffthickshake.jpeg"
},
{
    "id": 88,
    "name": "lotusbiscoffthickshakep",
    "display_name": "LOTUS BISCOFF THICKSHAKE (P)",
    "price": 160,
    "image": "images/juiceparcel/muskmelonp.jpeg"
},
{
    "id": 89,
    "name": "pineapplelemon",
    "display_name": "PINEAPPLE LEMON",
    "price": 60,
    "image": "images/Lemonspecials/pineapplelemon.jpeg"
},
{
    "id": 90,
    "name": "pineapplelemonp",
    "display_name": "PINEAPPLE LEMON (P)",
    "price": 70,
    "image": "images/juiceparcel/freshlemonparcel.jpeg"
},
{
    "id": 91,
    "name": "grapelemon",
    "display_name": "GRAPE LEMON",
    "price": 60,
    "image": "images/Lemonspecials/grapelemon.jpeg"
},
{
    "id": 92,
    "name": "grapelemonp",
    "display_name": "GRAPE LEMON (P)",
    "price": 70,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 93,
    "name": "mintlemon",
    "display_name": "MINT LEMON",
    "price": 60,
    "image": "images/Lemonspecials/mintlemon.jpeg"
},
{
    "id": 94,
    "name": "mintlemonp",
    "display_name": "MINT LEMON (P)",
    "price": 70,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 95,
    "name": "gingerlemon",
    "display_name": "GINGER LEMON",
    "price": 60,
    "image": "images/Lemonspecials/gingerlemon.jpeg"
},
{
    "id": 96,
    "name": "gingerlemonp",
    "display_name": "GINGER LEMON (P)",
    "price": 70,
    "image": "images/juiceparcel/amlap.jpeg"
},
{
    "id": 97,
    "name": "greenapplemojito",
    "display_name": "GREEN APPLE MOJITO",
    "price": 60,
    "image": "images/mojito/greenapplemojito.jpeg"
},
{
    "id": 98,
    "name": "greenapplemojitop",
    "display_name": "GREEN APPLE MOJITO (P)",
    "price": 70,
    "image": "images/juiceparcel/freshlemonparcel.jpeg"
},
{
    "id": 99,
    "name": "bluelagonmojito",
    "display_name": "BLUE LAGON MOJITO",
    "price": 80,
    "image": "images/mojito/bluelagonmojito.jpeg"
},
{
    "id": 100,
    "name": "bluelagonmojitop",
    "display_name": "BLUE LAGON MOJITO (P)",
    "price": 90,
    "image": "images/juiceparcel/papayap.jpeg"
},
{
    "id": 101,
    "name": "virginmojito",
    "display_name": "VIRGIN MOJITO",
    "price": 80,
    "image": "images/mojito/vrginmojito.jpeg"
},
{
    "id": 102,
    "name": "virginmojitop",
    "display_name": "VIRGIN MOJITO (P)",
    "price": 90,
    "image": "images/juiceparcel/watermelonp.jpeg"
},
{
    "id": 103,
    "name": "watermelonmojito",
    "display_name": "WATERMELON MOJITO",
    "price": 80,
    "image": "images/mojito/watermelonmojito.jpeg"
},
{
    "id": 104,
    "name": "watermelonmojitop",
    "display_name": "WATERMELON MOJITO (P)",
    "price": 90,
    "image": "images/juiceparcel/amlap.jpeg"
},
{
    "id": 105,
    "name": "strawberrymojito",
    "display_name": "STRAWBERRY MOJITO",
    "price": 80,
    "image": "images/mojito/strawberrymojito.jpeg"
},
{
    "id": 106,
    "name": "strawberrymojitop",
    "display_name": "STRAWBERRY MOJITO (P)",
    "price": 90,
    "image": "images/juiceparcel/amlap.jpeg"
}
]
for product in products:
    if product["id"] <= 40:
        product["category"] = "Juice"
    elif product["id"] <= 54:
        product["category"] = "Fruit shakes"
    elif product["id"] <= 74:
        product["category"] = "Milk shakes"
    elif product["id"] <= 88:
        product["category"] = "Thick shakes"
    elif product["id"] <= 96:
        product["category"] = "Lemon specials"
    else:
        product["category"] = "Mocktails"
def init_db():
    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    # Orders table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            items TEXT NOT NULL,
            total REAL NOT NULL,
            payment TEXT NOT NULL,
            date TEXT NOT NULL
        )
    """)

       # Shops table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS shops (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'active',
            shop_status TEXT NOT NULL DEFAULT 'open'
        )
    """)

    try:
        cursor.execute("""
            ALTER TABLE shops
            ADD COLUMN shop_status TEXT NOT NULL DEFAULT 'open'
        """)
    except sqlite3.OperationalError:
        pass

    # Users table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            role TEXT NOT NULL,
            shop_id INTEGER,
            FOREIGN KEY (shop_id) REFERENCES shops(id)
        )
    """)

    # Create the first shop
    cursor.execute("""
        INSERT OR IGNORE INTO shops (id, name, status)
        VALUES (1, 'Juice Box', 'active')
    """)

    # Create Server Admin
    cursor.execute("""
        INSERT OR IGNORE INTO users
        (username, password, role, shop_id)
        VALUES ('serveradmin', 'admin123', 'server_admin', NULL)
    """)

    # Create Shop Owner
    cursor.execute("""
        INSERT OR IGNORE INTO users
        (username, password, role, shop_id)
        VALUES ('shopowner', 'shop123', 'shop_owner', 1)
    """)

    conn.commit()
    conn.close()


init_db()

@app.route("/api/orders", methods=["POST"])
def create_order():

    order = request.json

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO orders (items, total, payment, date)
        VALUES (?, ?, ?, ?)
    """, (
        json.dumps(order["items"]),
        order["total"],
        order["payment"],
        order["date"]
    ))

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Order saved successfully"
    }), 201

@app.route("/api/login", methods=["POST"])
def login():

    data = request.json

    username = data.get("username")
    password = data.get("password")

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, username, role, shop_id
        FROM users
        WHERE username = ? AND password = ?
    """, (username, password))

    user = cursor.fetchone()

    conn.close()

    if user is None:
        return jsonify({
            "message": "Invalid username or password"
        }), 401

    return jsonify({
        "message": "Login successful",
        "user": {
            "id": user[0],
            "username": user[1],
            "role": user[2],
            "shop_id": user[3]
        }
    }), 200

@app.route("/api/products")
def get_products():
    return jsonify(products)
@app.route("/api/admin/today")
def admin_today():

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT COUNT(*), COALESCE(SUM(total), 0)
        FROM orders
        WHERE DATE(date) = DATE('now', 'localtime')
    """)

    result = cursor.fetchone()

    conn.close()

    return jsonify({
        "orders": result[0],
        "sales": result[1]
    })
@app.route("/api/admin/analysis")
def admin_analysis():

    start_time = request.args.get("start")
    end_time = request.args.get("end")

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT items, total
        FROM orders
        WHERE DATE(date) = DATE('now', 'localtime')
        AND TIME(date) >= TIME(?)
        AND TIME(date) < TIME(?)
    """, (start_time, end_time))

    orders = cursor.fetchall()

    conn.close()

    total_sales = 0
    total_orders = len(orders)
    total_items = 0
    product_sales = {}

    for items_json, order_total in orders:

        total_sales += order_total

        items = json.loads(items_json)

        for item in items:

            name = item["name"]
            quantity = item["quantity"]
            price = item["price"]

            total_items += quantity

            if name not in product_sales:
                product_sales[name] = {
                    "quantity": 0,
                    "sales": 0
                }

            product_sales[name]["quantity"] += quantity
            product_sales[name]["sales"] += price * quantity

    products = []

    for name, data in product_sales.items():

        products.append({
            "name": name,
            "quantity": data["quantity"],
            "sales": data["sales"]
        })

    products.sort(
        key=lambda x: x["sales"],
        reverse=True
    )

    return jsonify({
        "start": start_time,
        "end": end_time,
        "total_sales": total_sales,
        "total_orders": total_orders,
        "total_items": total_items,
        "products": products
    })
@app.route("/api/admin/shops")
def admin_shops():

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            shops.id,
            shops.name,
            shops.status,
            users.username
        FROM shops
        LEFT JOIN users
            ON shops.id = users.shop_id
            AND users.role = 'shop_owner'
        ORDER BY shops.id
    """)

    rows = cursor.fetchall()

    conn.close()

    shops = []

    for row in rows:

        shops.append({
            "id": row[0],
            "name": row[1],
            "status": row[2],
            "owner": row[3]
        })

    return jsonify(shops)
@app.route("/api/admin/shop-owners")
def admin_shop_owners():

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            users.id,
            users.username,
            users.role,
            shops.id,
            shops.name,
            shops.status
        FROM users
        LEFT JOIN shops
            ON users.shop_id = shops.id
        WHERE users.role = 'shop_owner'
        ORDER BY users.id
    """)

    rows = cursor.fetchall()

    conn.close()

    owners = []

    for row in rows:

        owners.append({
            "id": row[0],
            "username": row[1],
            "role": row[2],
            "shop_id": row[3],
            "shop_name": row[4],
            "shop_status": row[5]
        })

    return jsonify(owners)
@app.route("/api/admin/orders")
def admin_orders():

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, items, total, payment, date
        FROM orders
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    orders = []

    for row in rows:

        orders.append({
            "id": row[0],
            "items": json.loads(row[1]),
            "total": row[2],
            "payment": row[3],
            "date": row[4]
        })

    return jsonify(orders) 

@app.route("/api/shop/status")
def get_shop_status():

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT shop_status
        FROM shops
        WHERE id = 1
    """)

    result = cursor.fetchone()

    conn.close()

    if result is None:
        return jsonify({
            "message": "Shop not found"
        }), 404

    return jsonify({
        "status": result[0]
    })   
@app.route("/api/shop/status", methods=["POST"])
def update_shop_status():

    data = request.json

    shop_status = data.get("status")

    if shop_status not in ["open", "break", "closed"]:
        return jsonify({
            "message": "Invalid shop status"
        }), 400

    conn = sqlite3.connect("juicebox.db")
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE shops
        SET shop_status = ?
        WHERE id = 1
    """, (shop_status,))

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Shop status updated",
        "status": shop_status
    })
 
if __name__ == "__main__":
    app.run(debug=True)

