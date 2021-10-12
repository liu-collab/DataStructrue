function isPrime(num) {
  const temp = parseInt(Math.sqrt(num));
  console.log(temp);
  for (let i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(123));
console.log(isPrime(41));
console.log(isPrime(54));
