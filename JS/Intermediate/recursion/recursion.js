// Recursion is similar to iteration, uses a base-case to prevent stack overflow or infinite loops

// run in console and go line by line
function recursiveFactorial(num) {
  if (num < 0 || !Number.isInteger(num)) {
    throw new RangeError('Factorial needs a whole number that is 0 or more');
  }

  if (num <= 1) { // 0! and 1! are both 1, this is the base case
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}