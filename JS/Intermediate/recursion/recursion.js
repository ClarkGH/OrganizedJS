// Recursion is similar to iteration, uses a base-case to prevent stack overflow or infinite loops

// run in console and go line by line
function recursiveFactorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}