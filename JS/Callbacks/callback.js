// Simple Callback example

// example 1: common callback
setTimeout( () => {
 console.log('I\ve finished running.');
}, '3000');

// note the function in the argument, that is a callback
// let's create our own callback

// Example 2
// as always, copy and paste this into your dev console
function sayCallbackVal( arg, callback ) {
  console.log( callback( arg ) );
}

sayCallbackVal( 'hi', function( arg ) {
  return arg;
});

//what was returned?
//why?
//currently we're getting a simple value return via the callback
//Let's create a more useful function that uses Callbacks

// Example 3

function doMathWithCB( valueArr, callback ) {
  console.log( callback( valueArr ) );
}

function getSumCB( arr ) {
  var sum = 0;
  arr.forEach( function( val ) { //note that forEach also takes a CB
    sum += val;
  })
  return sum;
}

doMathWithCB( [1,2,3,4,5], getSumCB );

// What did it return?
// Why?
// Try to follow the flow of the function calls like you're the engine