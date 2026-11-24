// Operators: Commas

/*
The comma operators are used to include multiple expressions in a location that requires only one.
The comma operator runs each expression from left to right and returns the last one.
Heads up: the commas in variable declarations, arrays, objects, and function calls look the same, but they're separators, not the comma operator.
*/

// Example 1: Variables (separator)
var a, b = 2, c = b; //three variables declared, b and c defined

// Example 2: Objects (separator)
var obj = {
  val1: '0',
  val2: '1'
};

// Example 3: The comma operator in a for loop
for (var i = 0, j = 3; i < j; i++, j--) { // i++, j-- is two expressions where the loop only allows one
  console.log(i, j);
}

// Example 4: The comma operator returns the last value
var last = (1, 2, 3);
console.log(last); // 3
