// WTF is bind doing?

// Every function object has 3 internal methods, apply(), bind(), and call()
// .bind() - takes an object as an argument, will attach the argument's scope to the function it runs on and will be bound to it

//Example 3
//no need to run, conceptually the same as example2, only with explanations

var animal = {
  species: 'dog',
  says: 'woof',
  getSaying: function() {
    return ('The ' + this.species + ' says ' + this.says);
  }
}

var logSaying = function() {
  console.log( this.getSaying() );
}//here we only have access to the global context
// how do we break out of it?
// we need to give it the context of the object we want

var sayTheThing = logSaying.bind(animal); //here I set a variable to the function with the animal object's context bound to it

sayTheThing(); //here I run the function with the newly bound scope

// the 'this', on line 18, is pointing to animal's scope and now has access to its properties, methods, and values
// next lesson: .call() and .apply()