//Numbers

/*
 * JavaScript's number primitive is associated with math.
 * JavaScript has BigInt for bigger number calculations.
 * JavaScript's Integers are floating point numbers without fractions.
 * JS numbers can be positive or negative.
 */

const x = BigInt(Number.MAX_SAFE_INTEGER); // BigInt: 9007199254740991n

let num = 1; // Integer
1 + 1; // Addition
1 - 1; // Subtraction
2 * 3; // Multiplication
2.1 + 0.9 // Doesn't return a whole number since they're both misrepresented fractions
2 / 2; // Division
2 % 3; // Modulo or Remainder
2 ** 2 // Exponentiation
num++ // increment num +1, mutates
num-- // decrement num -1, mutates

// Javascript has a built-in Math object with many useful methods
Math.round(2.67); // 3
Math.floor(2.67); // 2
Math.pow(2, 2); // another way to exponentiate
Math.sqrt(3, 9) // square root
// etc..

// Numbers and different types don't work well together
1 + '1'; // 11
1 + undefined; // NaN

/**
 * NaN stands for 'Not a Number'.
 * You can check with isNaN(), but not all global scopes have this method.
 * NaN, and only NaN, will compare unequal to itself.
 * With that in mind here is a manual approach.
 **/ 

const isNaN = (candidate) => candidate != candidate;
