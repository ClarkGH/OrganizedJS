// Arrays: Nesting

/*
  - You can place arrays within other arrays.
  - This is called nesting
*/

// Example 1: Nested Arrays

const nestedArray1 = [['Wow!', 'Amazing!'], ['Such Array!', 'Such Nested!']],
nestedArray2 = [[0, 1, 2],[[3, 4, 5],[6, 7, 9]],[10, 11, 12]];

// Look at the above arrays, how do you think you can get a specific element?

console.log(nestedArray1); 
// We'll see 2 arrays logged here, but say we want to see the text, 'Such Array!'
// We know that the Index-1 position of the array holds two values, one of which is what we want
// So...
console.log(nestedArray1[1]);
// We now see a single array with a single value
// To grab our distinct value we'll need to specify another position
// So...
console.log(nestedArray1[1][0]);
// Using this pattern, try to grab the number 9 from nestedArray2

/*
  Nested arrays may seed confusing at first, but they are commonly seen in code.
  Work with nesting as much as you can until you feel comfortable with it.
*/