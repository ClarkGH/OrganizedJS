// Arrays: Introduction

/*
Arrays are objects that have their keys automatically assigned by index number
The index starts from 0 and increments upwards
*/

// Example 1: Array Creation
var arr = [], //array literal
  arr2 = new Array(3); // object constructor, avoid using this.
console.log(arr); //will log the empty array, note that since it's an object it has some built-in methods
console.log(arr2);

// Example 2: Array Positions
var nameContainer = ['Bill', 'Barbie', 'Bobby'];
console.log(nameContainer[0]) //logs the [string], Bill
console.log(nameContainer[1]) //logs the [string], Barbie

// Example 3: Array Iteration
// Review loops if this confuses you
var nameContainer = ['Bill', 'Barbie', 'Bobby'];

for ( var index = 0; index < nameContainer.length; i++ ) {
  console.log( nameContainer[i] ); // What do you expect to see?
}

// Try creating your own array and play with it