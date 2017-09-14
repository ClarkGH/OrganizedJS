// Objects: constructors vs primitives

/*
Always use literals when you can, avoid using constructors
*/

// Exmaple 1
var num1 = new Number(3),
  num2 = 3;

console.log( num1 == num2 );
console.log( num1 === num2 );
// What do both of these log?
// Why?

/*
  Note: With the above example, we have two variables.
  One variable is pointing to a primitive (num 2)
  The other variable is pointing to an Object containing a primitive (num 1)
  An Object containing a primitive is not the same as a primitive referenced in memory
  Doing math with objects is not as simple, so understand what you're doing when you use constructors.
*/

// Again, NEVER use constructors unless you absolutely have to
// Always use literals when you can

// Example 2: Literal examples
var array = [],
  object = {},
  string = ''.
  number = 0,
  boolean = true,
  undefinedVar,
  nullVar = null; //and so on