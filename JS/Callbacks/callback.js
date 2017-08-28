// Simple Callback example

// example 1: common callback
setTimeout( () => {
 console.log('I\ve finished running.');
}, '3000');

// note the function in the argument, that is a callback
// let's create out own

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
//If this seems needlessly complex, don't worry, there's a reason why callbacks are so useful
