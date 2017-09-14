// How to scope (variables)

// In JS, scope is the set of objects and their properties/methods that you have access to
// Javascript uses something called Function Scope: the scope changes inside functions


// Example 1:
//copy and paste the below into your web browser's console
var foo = 0; //here is a variable in the global scope

function bar() {
  var baz = 1; //here is a variable in the scope of the bar function
} 

console.log( baz ); //what do you think this will print? 

//With the information given, ask yourself the following questions
// What did it log?
// Why did it log what it did?

// Review in lesson 2

// Remember: There is global (the highest level of scope), and local (where the engine currently is in running it's queue) scope

// If this is confusing, don't struggle to understand it and continue to lesson2 of this series