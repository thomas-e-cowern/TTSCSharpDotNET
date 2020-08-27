var shoppingList = [];

shoppingList.push("pop tarts");
shoppingList.push("ramen noodles");
shoppingList.push("chips");
shoppingList.push("salsa");
shoppingList.push("coffee");

console.log("My shopping list: " + shoppingList);

shoppingList.push("fruit loops");

console.log("My shopping list: " + shoppingList);

var index = shoppingList.indexOf("coffee");
shoppingList[index] = "fair trade coffee";

console.log("My shopping list: " + shoppingList);

var chipsIndex = shoppingList.indexOf("chips");
var salsaIndex = shoppingList.indexOf("salsa");
shoppingList[chipsIndex] = "rice";
shoppingList[salsaIndex] = "beans";

console.log("My shopping list: " + shoppingList);

var shoppingCart = [];

var itemToCart = shoppingList.splice(shoppingList.length - 1, 1);
shoppingCart.push(itemToCart);

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

itemToCart = shoppingList.splice(0, 1);
shoppingCart.push(itemToCart);

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

let x = shoppingList.length;
while (x > 0 ) {
  itemToCart = shoppingList.splice(0, 1);
  shoppingCart.push(itemToCart);
  x--;
}

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

var sortedShoppingCart = shoppingCart.sort();
var reverseSortedShoppingCart = sortedShoppingCart.reverse();

console.log(reverseSortedShoppingCart.join(" , "));

