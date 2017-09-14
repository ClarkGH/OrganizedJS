// Arrays: Introduction

/*
Arrays are objects that have their keys automatically assigned by index number
The index starts from 0 and increments upwards
*/

// Example 1: Array
var arr = [];
console.log(arr); //will log the empty array, note that since it's an object it has some builtin methods


//TODO: should move this out to a later lesson

arr.push(1); // here we use the push method, which pushes the value 1 inside
console.log(arr); //what do you expect to see here? 
// Will the array still be empty?
// Why?

/*
  As seen in the above example, if you ran the code in your console, you see that the array contains the value 1
  .push() is a mutative property that will mutate, or deeply change, the array by pushing a value at the end
  It's a good idea to read up on the built-in array methods, as arrays are one of the most widely used JS objects  
*/ 