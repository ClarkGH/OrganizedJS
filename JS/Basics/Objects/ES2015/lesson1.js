// ES6 and classes

/*
ES2015 introduced classes which are a new way to create objects in JavaScript
*/

// Example 1: class
class Animal {
  constructor( type, sound ) { //every class has a constructor, if you leave it out JS gives it an empty one
    this.type = type;
    this.sound = sound;
  }

  speak() {
    return ( 'The ' + this.type + ' says, ' + this.sound )
  }

}

var dog = new Animal( 'dog', 'woof' );
console.log( dog.speak() ); // The dog says, woof

// this is NOT the same as a class from other languages
// classes are functions in JS (typeof Animal is 'function'), they follow JS prototypical inheritance
// using classes in JS is mostly syntactic sugar that makes your life easier
// a few real differences: you have to call a class with new, and code inside a class is always in strict mode