// Please review the callback section before tackling this one

// example 1: common async callback
// as always, log these into your dev console

setTimeout( () => {
 console.log('I get logged last after getting popped off the stack, moved into the queue, and now running after the stack finished.');
}, '0');

console.log('I will run first');
console.log('I will run second');
console.log('I will run third');


// note the function in the argument, that is a callback
// if you run this in your dev console, wait 3 seconds and watch for the result
// this is Asyncronous Javascript

// Why do you think a timeout that waits 0 milliseconds is logged last?
// If this is confusing, no worries