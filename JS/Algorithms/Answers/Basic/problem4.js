// Reverse an integer's order

// simple solution
function reverseNum(number) {
  // reverse the digits without the minus sign, then put the sign back
  return Math.sign(number) * parseInt(Math.abs(number).toString().split('').reverse().join(''));
}