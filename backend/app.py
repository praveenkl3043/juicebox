from flask import Flask, jsonify
from flask_cors import CORS

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
    "display_name": "WATERMELON",
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
    }
]
for product in products:
    product["category"] = "Juice"

@app.route("/")
def home():
    return "JUICEBOX Backend is running!"


@app.route("/api/products")
def get_products():
    return jsonify(products)


if __name__ == "__main__":
    app.run(debug=True)