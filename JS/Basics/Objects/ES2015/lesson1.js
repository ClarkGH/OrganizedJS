// ES6 and classes

/*
ES2015 introduced classes which are a new way to create objects in JavaScript
*/

// Example 1: class
class Animal {
  constructor( type, sound ) { //every class has a constructor
    this.type = type;
    this.sound = sound;
  }

  speak() {
    return ( 'The ' + type + ' says, ' + sound )
  }

}

var dog = new Animal( 'dog', 'woof' );

// this is NOT the same as a class from other languages
// classes are objects in JS, they follow JS prototypical inheritance
// using classes in JS is just syntactic sugar that makes your life easier