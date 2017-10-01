// Promises: Error handling pt 1

// Example:
var ourPromise = new Promise( ( resolve, reject ) => {
  resolve( 'Beep Boop Beep' );
});

ourPromise.then ( ( value ) => {
  console.log( value );
  throw 'Ruh Roh Raggy'; //we're going to force an error here
}).catch( ( error ) => {
  console.error(error);
}).then( 
  () => {
    console.log( 'The chain is fixed and we can try again or do some sort of damage control. Whatever we want. The world is our oyster!' );
  },
  () => {
    console.log( 'Here\'s another callback being fed into the .then(). But this one wont fire, but the other one does. Why?' );
  }
);

// Hint: Comment and uncomment out line to answer the question on line 18