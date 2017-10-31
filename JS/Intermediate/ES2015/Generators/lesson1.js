// ES2015: Generators

/* 
  - Generators are functions that can be 'paused'
  - They:
    1. Maintain context and variable definitions
    2. Utilize yield or yield* expressions
    3. Allow an alternative to generators by defining a function that maintains state/context
    4. Work as factories for iterators
    5. Use function* syntax
*/

// Example 1: Basic Generator
function* idGenerator() {
  var id = 0;

  while( id < 5 ) {
    yield id++;
  }
}

const generator = idGenerator();

for ( var i = 0; i < 10; i++ ) {
  console.log( generator.next().value );
}


// Example 2: Chaining Generators
const num1 = sayNum1();

function* sayNum1() {
  yield 'I\'ve started, next few logs are within another generator';
  yield* sayNum2(); // when inside a generator, you must use yield* to refer to another generator
  yield 'I\'m done, next log will say so.';
}

function* sayNum2() {
  num = 5;
  while( num > 0 ) {
    yield num--;
  }
}

for ( var i = 0; i < 8; i++ ) {
  console.log( num1.next() );
}
