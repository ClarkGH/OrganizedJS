// Using Promises

/*
  In JavaScript, a promise is an object that will return an eventual failure or completion of an async operations
  The old callback logic:
*/


// Example 1: callback method
function failureCallback( error ) {
  throw new Error( 'Error, failure at: ' + error );
}

function successCallback( result ) {
  console.warn( 'Success, running: ' + result );
}

someAsyncFunction(successCallback, failureCallback) //this function async returns an error or a result into the fed callbacks

// Example2: Promise Method

someAsyncFunction()
  .then(successCallback, failureCallback); //.then() will wait until the promise is resolved and will run the code inside its block afterwards.

// Nice things about promises vs callbacks

/* 
  Callbacks will never be called before the code that's currently running finishes (they wait in the microtask queue)
  .then(onSuccess, onFailure) runs onSuccess if the promise resolves and onFailure if it rejects. Use .finally() for code that runs either way
  You can chain many .then() or other promise object methods.
*/