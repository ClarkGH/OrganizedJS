// Operators: Semicolons

/* 
Semicolons are used to point out the end of a statement
They aren't always necessary (some devs will tell you to not use them)
I recommend you always use them, it makes the code more readable and understandable
*/

// Example 1: Optional?
(function() {
  return 'hi'; //Try taking the semicolon out. 
})()

// Example 2: Not Optional

var num = 0; num++; //two or more statements on the same line? you'll need the semicolon
console.log(num);

// Never post a semicolon after a curly bracket {} unless the brackets end an expression, like an object or a function stored in a variable

// Example 3: Objects
var someObj = {key: 'value'}; //YES SEMICOLON

var sayHi = function() {
  return 'hi';
}; //YES SEMICOLON, the function is a value being stored

if (true) {
  //some code
} // NO SEMICOLON

for (var i = 0; i < 1; i++) {
  console.log(i);
} // NO SEMICOLON

function echo(arg) {
  return arg;
} // NO SEMICOLON

//And so on