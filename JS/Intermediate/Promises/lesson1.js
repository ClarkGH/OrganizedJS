// Promises and Callback hell

/*
  Review Callbacks to Understand Promises in JS
*/

// Say we have some async code, normally we'd need to chain callbacks if we wanted to organize our code

function asyncSquared( number ) {
  //... some task
  return Math.pow( number, 2 );
}

var asyncTask = ( number, callback ) => {
  return callback( number );
}

setTimeout( asyncTask( 2, asyncSquared), 500); 

/*
  Imagine linking in more logic with multiple nests callback loops.
  This is a lot of work, and can get very concfusing.
  In the case of using frameworks like node, you have to write a lot of async code
*/

// With es6, we can chain promises instead, but first we should know how to make our own