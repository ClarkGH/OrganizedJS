// Object basics

/*
  Everything in JavaScript that is not a primitive value is an object
*/

({ key: "value" }); //basic objects are key value pairs (wrapped in () so JS doesn't read the {} as a code block)
[ 0, 1, 2 ]; //arrays are objects with index-based keys
(function() {}); //functions are special objects
new Date(); //here's a creation of a new Date object

// Note: without the semicolons, JS reads the array and function lines as one: [ 0, 1, 2 ](function() {})
// That tries to call the array like a function and throws a TypeError
