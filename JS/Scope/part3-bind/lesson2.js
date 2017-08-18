// .bind()

// Example 2:
// copy and paste into browser or run in node

var animal = {
  species: 'dog',
  says: 'woof',
  getSaying: function() {
    return ('The ' + this.species + ' says ' + this.says);
  }
}

var logSaying = function() {
  console.log( this.getSaying() );
}.bind(animal);

logSaying();

// Note: why do you think this runs when the last one did not?
// What's different?