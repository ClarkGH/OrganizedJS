// Symbols: semicolons

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

// Never post a semicolon after a curly bracket {} unless you're defining an object

// Example 3: Objects
var someObj = {key: 'value'}; //YES SEMICOLON

if (true) {
  //some code
} // NO SEMICOLON

for (var i = 0; i < 1; i++) {
  console.log(i);
} // NO SEMICOLON

function(arg) {
  return arg;
} // NO SEMICOLON

//And so on