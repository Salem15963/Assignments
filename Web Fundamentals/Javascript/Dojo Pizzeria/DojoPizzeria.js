var pizza = {
    crustType:   ["deep dish","hand tossed","stuffed Crust","cracker Crust"],
    sauceType:  ["traditional", "marinara","white Garlic Sauce","buffalo Sauce"],
    cheeses:   ["mozzarella","feta","swiss cheese","blue cheese"],
    toppings:  ["pepperoni", "sausage" ,"mushrooms", "olives", "onions","chicken Cutlet","spinach"]
};
    
console.log(pizza);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara","mozzarella","feta",["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("stuffed Crust","white Garlic Sauce","swiss cheese","chicken Cutlet");
console.log(p3);

var p4 = pizzaOven("Cracker Crust","Buffalo Sauce","blue cheese","Spinach");
console.log(p4);