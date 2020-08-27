// Create an array to represent your shopping list with the following items: 'pop tarts',
//  'ramen noodles', 'chips', 'salsa', and 'coffee'.
var shoppingList = [];

shoppingList.push("pop tarts");
shoppingList.push("ramen noodles");
shoppingList.push("chips");
shoppingList.push("salsa");
shoppingList.push("coffee");


console.log("My shopping list: " + shoppingList);

// Add 'fruit loops' to the list.
shoppingList.push("fruit loops");

console.log("My shopping list: " + shoppingList);

// Update 'coffee' to 'fair trade coffee'
var index = shoppingList.indexOf("coffee");
shoppingList[index] = "fair trade coffee";

console.log("My shopping list: " + shoppingList);

// Replace 'chips' and 'salsa' with 'rice' and 'beans'
var chipsIndex = shoppingList.indexOf("chips");
var salsaIndex = shoppingList.indexOf("salsa");
shoppingList[chipsIndex] = "rice";
shoppingList[salsaIndex] = "beans";

console.log("My shopping list: " + shoppingList);

// Create an empty array to represent your shopping cart.
var shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart
var itemToCart = shoppingList.splice(shoppingList.length - 1, 1);
shoppingCart.push(itemToCart);

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

// Remove the first item from your shopping list and add it to the cart
itemToCart = shoppingList.splice(0, 1);
shoppingCart.push(itemToCart);

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

// Write a 'while' loop that takes items from your shopping list 
// and moves them to your cart until there are no items left on the list.
let x = shoppingList.length;
while (x > 0 ) {
  itemToCart = shoppingList.splice(0, 1);
  shoppingCart.push(itemToCart);
  x--;
}

console.log("My shopping cart: " + shoppingCart);
console.log("My shopping list: " + shoppingList);

// Sort the items in your cart alphabetically... backwards
var sortedShoppingCart = shoppingCart.sort();
var reverseSortedShoppingCart = sortedShoppingCart.reverse();

// Print the list of items in your shopping cart to the console as comma separated string.
console.log(reverseSortedShoppingCart.join(" , "));

