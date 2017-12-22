// Find the prime factors of a given number

// Hints
/*
  1. Factors are the numbers that create the product when multiplied by one another.
  2. Review Problem 5 if confused
*/

function findPrimeFactors(num) {
  var divisor = 2,
    factors = [];

  while ( num > divisor ) {
    if ( num % divisor === 0 ) {
      factors.push(divisor);
    }
    divisor++;
  }
  return factors;
}