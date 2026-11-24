// Partial application with bind
// (people often call this currying, but currying is turning sum(a, b) into sum(a)(b))

// example 5
// copy and paste into console

function sum(num1, num2) {
  return num1 + num2;
}

var plusTwo = sum.bind(null, 2); // sum doesn't use 'this', so we pass null. The 2 gets locked in as num1

console.log(plusTwo(2));
console.log(plusTwo(4));

// what do you see being printed?
// why do you think that is?