// Create a function that will determine whether a number is prime or not
function isPrime(num) {

}

// Pseudocode Hints:
/* 
  1. If a number is prime, all numbers (aside from 1 and the number itself) will leave a remainder when acting as divisors. (eg, 13%2 !== 0)
  2. The number cannot and will not be divisible by any number from 2 leading up to itself.
  3. 0 and 1 are not prime numbers.
*/

// Answer:
// This can be done recursively or iteratively, here is a simple iterative brute force answer

function isPrime(num) {
  var divisor = 2;
  if (!Number.isInteger(num) || num < 2) { // 0, 1, negatives, and decimals aren't prime
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
  1. Numbers are never divisible by numbers bigger than half (other than themselves)
  2. Divisors come in pairs: 36 = 4 * 9, and one of each pair is always at most the square root (6)
  3. So you only need to check divisors up to Math.sqrt(num). (eg. check up to 9 for 97)
*/
