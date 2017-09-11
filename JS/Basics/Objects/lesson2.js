// Object basics
/*
  Objects can store reference data types or primitive data types
  There are several ways to create new objects, here we'll focus on object literals\
  What an object literal looks like: {key: value}
*/

// Example 1: Object literal
var person = {
  index: 0, //most here's a key referencing the value 0
  "name": "Barry", // putting keys within quotes will reference it correctly
  19: "19" //you can use numbers as keys
}

console.log( person );
console.log( person.index );
console.log( person[index] );

// Example 2: Object constructors
var animal = new Object();
animal.type = "penguin";
animal.name = "Chachi";
console.log( animal );
// Writing properties and methods this way can be lengthy
// Preference lies in using literals to create objects as it saves more time typing

/* Objects can hold more than proerties, they can also house methods */

// Example 3: Object methods
var batman = {
  name: "batman",
  job: "rich supergenius olympian",
  sayMotto: function() { //note that the key points to an anonymous function in memory
    console.log( "I'm " + this.name ); //we have access to the objects context 'this'
  }
}

batman.sayMotto();