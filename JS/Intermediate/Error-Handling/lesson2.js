// Error Handling: Try/Catch/Finally

/*
  try/catch/finally blocks take in statements and execute them
  -try blocks will execute a statement
  -catch blocks run their statements if an exception/error is thrown
  -finally blocks will execute only after the try statement has finished, regardless of an exception/error thrown
*/

// Example 1: Simple try-catch

try {
  throw new Error('I did it again!');
}

catch ( error ) {
  console.error('Error: Oops ', error.message );
}

// If you put this into your console, what do you see?
// Try it: log the error parameter in your console and look at the difference

// Example 2: try/catch/finally
var isBaronVonSprinklesGritty = false;

try {
  if ( isBaronVonSprinklesGritty ) {
    throw new Error( 'Too much grit.' );
  }
}

catch ( error ){
  console.error( error.message )
}

finally {
  console.log( 'Grit isn\'t always good' );
}

// What do you see logged?
// What would you expect to see logged if isBaronVonSprinklesGritty was true?
// Change the variable to true and log it

// Example 3: Nested example
(() =>{
  try {
    try {
      throw new Error( 'Oh what wicked webs we weave.' );
    }

    catch ( error ) {
      console.error( 'Inner Error: ', error.message );
      throw error;
    }

    finally {
      console.log( 'Finally ran!' );
      return;
    }
  }
  catch ( error ) {
    console.error( 'Outer Error: ', error.message );
  }
})() // wrapped in a self-invoked function, otherwise return would throw a code-breaking error

// What is logged? Why?
// What would happen if we were to change the boolean values
// Removed the self-invoked function and the return (line 58). What would you expect to see?
// Why do you think it's a good idea to return out of the function at that point?

// Hint: Duplicate logs are never good