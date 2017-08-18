// bad example below
// why do you think this isn't working?

// example 1
// copy and paste into browser

var animal = {
  species: 'dog',
  says: 'woof',
  getSaying: () => {
    return ('The ' + this.species + ' says ' + this.says);
  }
}

var logSaying = () => {
  console.log( this.getSaying() ); // note our return value
}

logSaying();

