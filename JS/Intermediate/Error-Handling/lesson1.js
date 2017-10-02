// Error Handling

/*
  There are many things that can break or interrupt your application
  Error handling is used to prevent both programmer and user errors as well as actual problems
  Error handling works great alongside tests, edge-cases always happen

  Consider the following function:

  function multiplyByTwo ( number ) {
    return number * 2;
  } 
  
  We only want this function to work with numbers.
  Let's add Error handling

*/

// Example 1: Simple Error

function multiplyByTwo ( number ) {
  if ( typeof number !== 'number' ) {
    throw new Error("We need a number");
  }

  return number * 2;
}

multiplyByTwo( 25 );
multiplyByTwo( 'Jerry Garcia' );

// Testing these out in your console tool, what do you see returned?
