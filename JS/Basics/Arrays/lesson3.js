// Arrays: Push and Pop

/*
  - Push and Pop are LIFO/Stack methods
  - Last in first out (LIFO/Stack)
*/

// Example 1: Push
var mutableArray = [0, 1];

console.log( mutableArray ); // we'll see an array of length 2

mutableArray.push( 2 ); // here we're pushing in the number '2' at the LAST POSITION (last in)

console.log( mutableArray ); // we see the array now has the values [0, 1, 2]

// After running this code, if you pushed 3 into the array, would it be in the beginning or end of the array?

// Example 2: Pop
var anotherMutableArray = ['Billy', 'Jean', 'Is', 'Not', 'My', 'Lover'];

console.log( anotherMutableArray ); // Same as last time

anotherMutableArray.pop(); // Remember: Last in is first out LIFO );

console.log( anotherMutableArray ); // we see the array no longer has 'Lover' inside

