// .call() and .apply()

// Example 4
// little different with example code
// copy and paste lines 7-23 into your console.

var animal = {
  species: 'dog',
  says: 'woof',
  getSaying: function( greeting ) {
    return ('the ' + this.species + ' says ' + this.says);
  }
}

var logSaying = function( greeting ) {
  console.log( greeting + ', ' + this.getSaying() );
}

// instead of binding, we can us .call or .apply if we only want to call the function once

logSaying.call(animal, 'Yo'); //.call() takes scope, then remaining parameters .call(object, arg1, arg2, etc)

logSaying.apply(animal, ['Howdy']); //.apply() takes scope, then an array of parameters .apply(object, [arg1, arg2, etc])

// What is the difference between bind(), call(), and apply()?