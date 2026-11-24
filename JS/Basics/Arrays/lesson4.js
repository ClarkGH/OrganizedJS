// Arrays: Shift and unshift

/*
This time we're looking at FIFO/Queue methods
FIFO (First in first out)
shift and unshift work on the start of the array: unshift adds, shift removes
A queue adds to the end (push) and removes from the start (shift)
shift and unshift are mutative methods
*/


// Example 1: Unshift - adds to the start
var arr = [1,2,3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// Example 2: Shift - removes from the start
arr.shift(); // we remove the first element with this
console.log(arr); // [1, 2, 3]

// Example 3: A queue (FIFO) with push and shift
var line = [];
line.push('first');
line.push('second');
console.log(line.shift()); // 'first', first in is first out
