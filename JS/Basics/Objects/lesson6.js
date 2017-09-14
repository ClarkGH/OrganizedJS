// Objects and Object.create

// You can create unique objects that follow a pattern with Object.create

// Example 1: Creating a new object
var animal = {
  type: '',
  vocalization: '',
  speak: function() {
    return ('The ' + this.type + ' says ' + this.vocalization );
  }
}

var kitty = Object.create(animal); // here we create a cat
kitty.type = 'cat';
kitty.vocalization = 'meow';
console.log(kitty);

//We can create many similar objects this way
//More on this with inheritance

//TODO: add a section regarding Object.create() with inheritence