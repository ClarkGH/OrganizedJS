// Promises: Error handling pt 1

// Error handling is important to prevent user or dev errors. Think of all the edge-cases you can when you write out error handling

// Example:
var ourPromise = new Promise( ( resolve, reject ) => {
  resolve( 'Beep Boop Beep' );
});

ourPromise.then ( ( value ) => {
  console.log( value );
  return Promise.reject( 'Ruh Roh Raggy' ); //we're going to force an error here. It has to be returned (or use throw) or the chain never sees it
}).catch( ( error ) => {
  console.error( error );
}).then( 
  () => {
    console.log( 'The chain is fixed and we can try again or do some sort of damage control. Whatever we want. The world is our oyster!' );
  },
  () => {
    console.log( 'Here\'s another callback being fed into the .then(). But this one wont fire, but the other one does. Why?' );
  }
);

// Hint: Comment and uncomment out line to answer the question on line 20