/*
Prototypical Inheritence 

is simple
*/

// In JS there is something called a prototype

// Example 1
var mammal = {
  type: 'mammal type',
  name: 'Some name',
  getAnimal: () => {
    return this.name + ' is a ' + this.type;
  }
}

var cat = {
  type: 'Cat',
  name: 'Fifi'
}


cat.__proto__ = mammal //NEVER DO THIS! Demo purposes only


// Important side note: don't ever use Object.__proto__ = anotherObject;
// this will cause performance issues
// it's for demo purposes only

console.log(cat.getAnimal()) //What is logged?
// Why?

// We'll go over the prototype chain next lesson