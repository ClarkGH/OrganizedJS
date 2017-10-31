// ES2015: Async Functions (async await)

/*
  Async functions are a cleaner way to work with asynchronous code
  They allow you to write async code as synchronous code
*/

// Example 1: Async Await
function wait3SecThenResolve ( string ) {
  return new Promise ( resolve => {
    setTimeout( () => {
      resolve( string );
    }, 3000 );
  });
}

async function sayStatement( string1, string2 ) {
  const word1 = await wait3SecThenResolve( string1 ),
    word2 = await wait3SecThenResolve( string2 );
  return word1 + ' ' + word2;
}

sayStatement('I', 'Code');