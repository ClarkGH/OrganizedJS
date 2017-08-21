// Currying with bind

// example 5
// copy and paste into console

function sum(num1, num2) {
  return num1 + num2;
}

var plusTwo = sum.bind(this, 2); // notice the binding of scope

console.log(plusTwo(2));
console.log(plusTwo(4));

// what do you see being printed?
// why do you think that is?