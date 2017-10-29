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

// Example 1: Generator
function* idGenerator() {
  var id = 0;

  while(true) {
    yield id++;
  }
}

var generator = idGenerator();

console.log(generator.next().value);
console.log(generator.next().value);

/* 
  Look at the above code:
  - Will the repeated code on lines 24/25 repeat the same value?
  - Test and see
*/