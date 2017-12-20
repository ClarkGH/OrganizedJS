// Create a function that will determine whether a number is prime or not
// function isPrime(num) {

// }

// Pseudocode Hints:
/* 
  1. If a number is prime, all numbers (aside from 1 and the number itself) will leave a remainder when acting as divisors. (eg, 13%2 !== 0)
  2. The number cannot and will not be divisible by any number from 2 leading up to itself.
  3. 0 is not a prime number.
*/

// Answer:
// This can be done recursively or iteratively, here is a simple iterative brute force answer

function isPrime(num) {
  var divisor = 2;
  if (num === 0) {
    return false;
  }

  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

// Can you improve this algorithm?

// Hints for speeding up:
/* 
  1. Numbers are never divisible by numbers bigger than half
  2. If a number is not divisible by 3, it will not be divisible by any number greater than a third of its value
  3. You can determine if a number is prime or not by checking up to a third of the number. (eg. check up to 97/3)
*/