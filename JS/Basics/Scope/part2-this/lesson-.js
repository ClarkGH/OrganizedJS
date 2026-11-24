// Playing with 'this' (the context of objects)

// Example 1:
// copy and paste line 5 into your web console
console.log(this);

// When ran, you will see the context for your browser's Window object

// 'this' returns the global object when it is used outside of any function
// careful: 'this' and scope are different things
// scope is which variables you can see, and it's set by where the code is written
// 'this' is set by how a function is called, for a method it's the object the method belongs to


//Example 2:

// copy and paste lines: 18-25
var kitten = {
  name: "Mr. sparkles", //set a property
  sayName: function() { //create a method
    console.log( this );
  }
}

kitten.sayName(); //here we call the sayName method within the kitten
//you'll now see the context for the kitten object returned

//Example 3:

//refresh or new browser, then copy and paste lines: 31-39
var kitten = {
  name: "Mr. sparkles",
  sayName: function() {
    console.log( "Meow, my name is, " + this.name );
  }
}

console.log( "Meow, my name is, " + kitten.name );
kitten.sayName();

//note that the two are logging the same value.

//for now, think of 'this', as a way to have access to the context of your object