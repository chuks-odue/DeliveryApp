// app.js

// This 'products' array is your master list of ALL food items.
// It will NOT be modified by filtering or searching.
// Ensure all food items have a 'foodType' property that matches your category names.
let products = [
    {
      id: 1,
      title: "pizza kässe",
      price: 29.99,
      description: "speacially prepared for Breakfast",
      image: "img/pizza 1.jpg",
      foodType: "Pizza"
    },
    {
      id: 2,
      title: "Crispy pizza",
      price: 24.99,
      description: "pototoes chips with a slice bread",
      image: "img/pizza 2.jpg",
      foodType: "Pizza"
    },
    {
      id: 3,
      title: "Chips ",
      price: 19.99,
      description: "chips and burger with chicken flavour ",
      image: "img/pizza-329523_640.jpg",
      foodType: "Pizza"
    },
    {
      id: 4,
      title: "peperon pizza",
      price: 25.99,
      description: "The best natural ingridents",
      image: "img/pexels-enginakyurt-2619970.jpg",
      foodType: "Pizza"
    },
    {
      id: 5,
      title: "Main-pizza",
      price: 29.99,
      description: "Delicious burger with curry sauce",
      image: "img/pizza-3.png",
      foodType: "Pizza"
    },
    {
      id: 6,
      title: "pizza",
      price: 39.99,
      description: "Bayerische Käase , the best from the  region",
      image: "img/pizza-15.jpg",
      foodType: "Pizza"
    },
    {
      id: 7,
      title: "Vegan pizza",
      price: 14.99,
      description: "",
      image: "img/pizza-6619201_1280.jpg",
      foodType: "Pizza"
    },
    {
      id: 8,
      title: "pizza",
      price: 16.99,
      description: "",
      image: "img/cheese-1869708_1280.jpg",
      foodType: "Pizza"
    },
    {
      id: 9,
      title: "pizza",
      price: 21.99,
      description: "",
      image: "img/gourmet-2446699_1280.jpg",
      foodType: "Pizza"
    },
    {
      id: 10,
      title: "pizza",
      price: 17.99,
      description: "",
      image: "img/pizza-5275191_1280.jpg",
      foodType: "Pizza"
    },
    {
      id: 11,
      title: "pizza",
      price: 26.99,
      description: "",
      image: "img/pizza-7863713_640.jpg",
      foodType: "Pizza"
    },
    {
      id: 12,
      title: "pizza Thorno",
      price: 21.99,
      description: "",
      image: "img/pexels-ikeen-james-1194926-2274787.jpg",
      foodType: "Pizza"
    },
    {
      id: 13,
      title: "Classic Beef Burger",
      price: 11.50,
      description: "Juicy beef patty, lettuce, tomato, onions, and pickles.",
      image: "img/cheese-burger-7323672_1280.jpg",
      foodType: "Burger"
    },
    {
      id: 14,
      title: "Chicken Crispy Burger",
      price: 10.99,
      description: "Crispy chicken fillet with fresh coleslaw.",
      image: "img/cheeseburger-7580676_640.jpg",
      foodType: "Burger"
    },
    {
      id: 15,
      title: "Veggie Supreme Burger",
      price: 9.99,
      description: "Plant-based patty with avocado and vegan mayo.",
      image: "img/food-1283108_640.jpg",
      foodType: "Burger"
    },
    {
      id: 16,
      title: "Double Stack Burger",
      price: 14.00,
      description: "Two beef patties, double cheese, and special sauce.",
      image: "img/new-burger.jpg",
      foodType: "Burger"
    },
    {
      id: 17,
      title: "BBQ Bacon Burger",
      price: 12.75,
      description: "Smoky BBQ sauce, crispy bacon, and onion rings.",
      image: "img/burger-8339491_1280.jpg",
      foodType: "Burger"
    },
    {
      id: 18,
      title: "Mushroom Swiss Burger",
      price: 12.00,
      description: "Sautéed mushrooms and melted Swiss cheese.",
      image: "img/burger-7419421_1280.jpg",
      foodType: "Burger"
    },
    {
      id: 19,
      title: "Spicy Jalapeno Burger",
      price: 11.75,
      description: "Kick of spice with fresh jalapeños and pepper jack.",
      image: "img/burger-7323697_1280.jpg",
      foodType: "Burger"
    },
    {
      id: 20,
      title: "Kids Mini Burger",
      price: 7.50,
      description: "Perfectly sized burger for our little customers.",
      image: "img/spicy-burger-7323694_1280.jpg",
      foodType: "Burger"
    },
    {
      id: 21,
      title: "French Fries Large",
      price: 4.50,
      description: "Extra large portion of our crispy golden fries.",
      image: "img/chips_fries_large.jpg",
      foodType: "Chips"
    },
    {
      id: 22,
      title: "Sweet Potato Fries",
      price: 5.50,
      description: "Deliciously sweet with a hint of salt.",
      image: "img/chips_sweetpotato_fries.jpg",
      foodType: "Chips"
    },
    {
      id: 23,
      title: "Potato Wedges",
      price: 4.00,
      description: "Thick-cut potato wedges, seasoned.",
      image: "img/chips_wedges.jpg",
      foodType: "Chips"
    },
    {
      id: 24,
      title: "Onion Rings",
      price: 5.00,
      description: "Crispy, battered onion rings.",
      image: "img/chips_onionrings.jpg",
      foodType: "Chips"
    },
    {
      id: 25,
      title: "Nachos with Cheese",
      price: 8.00,
      description: "Tortilla chips loaded with melted cheese.",
      image: "img/chips_nachos.jpg",
      foodType: "Chips"
    },
    {
      id: 26,
      title: "Cheesy Fries",
      price: 6.00,
      description: "Golden fries smothered in warm cheese sauce.",
      image: "img/chips_cheesy.jpg",
      foodType: "Chips"
    },
    {
      id: 27,
      title: "Garlic Parmesan Fries",
      price: 5.50,
      description: "Fries tossed in garlic and parmesan.",
      image: "img/chips_garlic.jpg",
      foodType: "Chips"
    },
    {
      id: 28,
      title: "Loaded Fries",
      price: 7.50,
      description: "Fries topped with bacon, cheese, and sour cream.",
      image: "img/chips_loaded.jpg",
      foodType: "Chips"
    },
    {
      id: 29,
      title: "Cola",
      price: 22.00,
      description: "Perfectly grilled salmon served with roasted vegetables.",
      image: "img/drink-462776_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 30,
      title: "Sanpellegrind",
      price: 16.00,
      description: "Rich and creamy chicken curry with rice.",
      image: "img/can-5864481_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 31,
      title: "Fanta",
      price: 17.50,
      description: "Tender beef slices with fresh Asian vegetables.",
      image: "img/can-6626782_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 32,
      title: "Coaktail",
      price: 14.00,
      description: "Layers of pasta, fresh vegetables, and rich tomato sauce.",
      image: "img/aperol-spritz-4507521_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 33,
      title: "Beer",
      price: 19.00,
      description: "Linguine pasta with garlic butter shrimp.",
      image: "img/beer-1998293_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 34,
      title: "Günzburger Beer",
      price: 13.00,
      description: "Crispy falafel, hummus, pita bread, and fresh salad.",
      image: "img/beer-3749664_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 35,
      title: "Pork Ribs",
      price: 25.00,
      description: "Slow-cooked pork ribs with a tangy BBQ glaze.",
      image: "img/liquor-5884_1280.jpg",
      foodType: "Main Dish"
    },
    {
      id: 36,
      title: "Chicken Alfredo",
      price: 16.50,
      description: "Creamy Alfredo pasta with grilled chicken.",
      image: "img/maindish_alfredo.jpg",
      foodType: "Main Dish"
    },
    {
      id: 37,
      title: "American Pancakes",
      price: 9.00,
      description: "Fluffy pancakes with maple syrup and berries.",
      image: "img/breakfast_pancakes.jpg",
      foodType: "Breakfast"
    },
    {
      id: 38,
      title: "Scrambled Eggs & Toast",
      price: 8.00,
      description: "Classic scrambled eggs with crispy toast.",
      image: "img/breakfast_eggs.jpg",
      foodType: "Breakfast"
    },
    {
      id: 39,
      title: "Breakfast Burrito",
      price: 10.00,
      description: "Filled with eggs, cheese, beans, and salsa.",
      image: "img/breakfast_burrito.jpg",
      foodType: "Breakfast"
    },
    {
      id: 40,
      title: "Fruit & Yogurt Bowl",
      price: 7.50,
      description: "Fresh seasonal fruits with Greek yogurt.",
      image: "img/breakfast_fruit.jpg",
      foodType: "Breakfast"
    },
    {
      id: 41,
      title: "Avocado Toast",
      price: 9.50,
      description: "Toasted bread with smashed avocado and spices.",
      image: "img/breakfast_avocado.jpg",
      foodType: "Breakfast"
    },
    {
      id: 42,
      title: "Belgian Waffles",
      price: 9.50,
      description: "Crispy waffles with whipped cream and chocolate.",
      image: "img/breakfast_waffles.jpg",
      foodType: "Breakfast"
    },
    {
      id: 43,
      title: "Oatmeal with Nuts",
      price: 6.00,
      description: "Warm oatmeal topped with assorted nuts and honey.",
      image: "img/breakfast_oatmeal.jpg",
      foodType: "Breakfast"
    },
    {
      id: 44,
      title: "Smoked Salmon Bagel",
      price: 12.00,
      description: "Toasted bagel with cream cheese and smoked salmon.",
      image: "img/breakfast_salmonbagel.jpg",
      foodType: "Breakfast"
    }
];
// NO OTHER CODE IN APP.JS