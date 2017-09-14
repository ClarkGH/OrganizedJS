// Global and local Scope

//In Lesson 1, the code example logs 'undefined'
//This is because the global scope does not have access to the bar function's local scope

// Example 2:
//copy and paste the below into your web browser's console
var foo = 0;

function bar() {
  var baz = 1;
  console.log( foo ); //what do you think this will log?
}

// note that we successfully print it's parent scope's variable
// the parents don't have access to their children's or sibling's scope, but the children have access to their parents' scope
// this is called lexical scoping