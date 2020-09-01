var billedAmount = 100.00;

function gratuity (amount) {
  return (amount * 0.2).toFixed(2);
}

function totalWithGrat (amount) {
  return (parseFloat(gratuity(amount)) + amount).toFixed(2);
}

console.log(gratuity(billedAmount));
console.log("your total including gratuity is: " + totalWithGrat(billedAmount));