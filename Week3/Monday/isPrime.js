function isPrime (number) {
  if (number < 1) {
    return false;
  } else if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPrime(4));