// Reverse an integer's order

// simple solution
function reverseNum(number) {
  return parseInt(number.toString().split('').reverse().join(''));
}