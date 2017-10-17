// Arrays: Shift and unshift

/* 
This time we're looking at FIFO/Queue methods
FIFO (First in first out) 
This is adding and removing from the start
shift and unshift are mutative methods
*/


// Example 1: Shift/Unshift - adds
var arr = [1,2,3];
arr.unshift(4);
console.log(arr); 

arr.shift(); // we remove the first element with this
console.log(arr);