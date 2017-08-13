// Playing with scope

// copy and paste 'this' into your web console
console.log(this);
// run

// You will see the context for your browser's Window object

this // this returns the context of the global object when it is inside global "Scope"
// scope is the context of the object the method belongs to

// copy and paste the below 
var kitten = {
  name: "Mr. sparkles", //set a property
  sayName: function() { //create a method
    console.log( this );
    // console.log( this.name );
  }
}

kitten.sayName(); //here we call the sayName method within the kitten
//you'll now see the context for the kitten object returned

//now refresh, then copy and paste this into the browser
var kitten = {
  name: "Mr. sparkles",
  sayName: function() {
    // console.log(this);
    console.log( "Meow, my name is, " + this.name );
  }
}

kitten.sayName(); //Why do you think this is returning the name value?


