/*
 * What is this?
 * Bunch of notes I wrote to help organize all of the mixed-up JS knowledge everywhere.
 * 
 * How can I use this?
 * Review the primitives section first if you don't know much about JavaScript.
*/

/* What Forms JavaScript?
 * JavaScript has 8 different data types
 * 1. Numbers
 * 2. Strings
 * 3. Booleans
 * 4. Symbol
 * 5. Undefined
 * 6. Null
 * 7. Objects
 * 8. BigInt
 *
 * Everything that isn't on this list is considered an object.
 */

//Examples

1; // number
"use strict"; // string
true; // false
Symbol('foo'); // symbol
undefined; // undefined
null; // null
{} // object
function emptyFunction () {} // object
[1, 2, 3] // object
const gary = new Map(); // object

/**
 * Javascript works with both value and reference.
 * Every primitive is a value.
 * Every object has properties by reference.
 */

const value = 1; // Value
const dog = { say: 'woof' };
let smartDog = dog;

// We're overwriting the reference's value!
smartDog.say = "Your taxes have been completed, buddy!";
console.log(dog.say); // "Your taxes have been completed, buddy!"

// We can overcome this by making a shallow copy.
dog.say = "bark?";
smartDog = { ...dog, doesTaxes: true };
smartDog.say = 'I have no idea what I am doing!';

console.log(dog.say); // Bark
console.log(smartDog.say); // I have no idea what I am doing!
