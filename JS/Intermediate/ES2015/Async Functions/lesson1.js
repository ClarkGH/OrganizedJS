// ES2017: Async Functions (async await)
// (this lives in the ES2015 folder, but async/await came two years later)

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

sayStatement('I', 'Code').then(console.log); // 'I Code' after 6 seconds, async functions always return a promise

// Example 2: Awaiting together
// The two awaits above run one after the other (3s + 3s)
// If the tasks don't depend on each other, start them together with Promise.all
async function sayStatementFaster( string1, string2 ) {
  const [word1, word2] = await Promise.all([
    wait3SecThenResolve( string1 ),
    wait3SecThenResolve( string2 )
  ]);
  return word1 + ' ' + word2;
}

sayStatementFaster('I', 'Code').then(console.log); // 'I Code' after 3 seconds