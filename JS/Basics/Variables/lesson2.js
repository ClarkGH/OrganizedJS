//Hoisting
'use strict'; //we're using strict mode to prevent accidental global variables, more on that later

/* In JavaScript there is something called hoisting
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

// Example 4: Hoisting and definitions
batman = 'I\'m still batman';
console.log(batman); //Will this example log anything different from the previous? Why?

var batman;

/* Compare and contrast */
// Run each example separately in the console and write down what they output.

// What do you see logged with each example?
// Why are they all different?
// Refer back to hoisting

/* Review

Look back at example 4. Notice how on line 24 batman is declared, but on line 21 it's defined?
Line 22 logs whatever line 21 had it defined as earlier.

If we were the engine, first we would look for declarations and then process the code. 
  1. "Okay, so on example 4 we have what functions and variables declared?"
  2. "Now that I know we have a batman variable, I'll hold this space for it and will now process the code"
  3. "I see on the first line our declared batman variable is defined to 'I'm still batman!'. I'll store that value there "
  4. "Okay, now I'm on the second line and I see that I'm logging the value our batman variable holds."
*/