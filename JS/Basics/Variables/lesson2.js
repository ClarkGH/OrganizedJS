//Hoisting

/* In javascript there is something called hoisting
  Function and variable declarations are processed before the code actually runs (this is called hoisting)
  Variable definitions are NEVER hoisted
*/

// Example 1: Undeclared variable
console.log(batman); //what do you expect to be logged here?

// Example 2: Declared variable
var batman = 'I\'m batman!';
console.log(batman); //what do you expect to be logged here?

// Example 3: Hoisted Variable declaration
console.log(batman); //what do you expect to be logged here?
var batman = 'I\'m batman!';

/* Compare and contrast */
// Run each example separately in the console and write down what they output.

// What do you see logged with each example?
// Why are they all different?
// Refer back to hoisting