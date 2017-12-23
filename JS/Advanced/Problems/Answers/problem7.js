// return whether or not a number is in the fibonacci sequence

// function isFibonacci(num) {

// }

// Hints
/* 
  1. Fibonacci numbers are numbers that follow the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
  2. Each following integer is the sum of the two previous integers
  3. Can you guess what the next number in the sequence would be?
*/

// Answer

function isFibonacci(num) {
  if (num === 0 || num === 1) {
    return true;
  }

  var fibNums = [0, 1, 1],
    i = 1,
    j = fibNums.length - 1;

  while (num >= fibNums[j]) {
    if (num === fibNums[j]) {
      return true;
    } else {
      fibNums.push( (fibNums[i] + fibNums[j]) );
      j = fibNums.length - 1;
      i++;
    }
  }

  return false;
}

// What is this solution's complexity?
// Can you make this faster?