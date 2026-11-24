// failing example:
// why do you think this isn't working?

// Example 1
// copy and paste into browser dev console or run with node

var animal = {
  species: 'dog',
  says: 'woof',
  getSaying: function() {
    return ('The ' + this.species + ' says ' + this.says);
  }
}

var logSaying = function() {
  console.log( this.getSaying() ); // note our return value
}

logSaying();

// Note: why are we getting "this.getSaying is not a function"
// 'this', in the case of the logSaying function, is the global object, because logSaying was called on its own instead of as a method of animal
// Try to get this working