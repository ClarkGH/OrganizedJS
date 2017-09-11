//Constructor functions

/*
  You can use the "new" keyword with functions to create objects
  these are known as constructor functions
*/

// Example 1: using everything we know to make several objects in the same format
function Smoothie( fruit1, fruit2 ) { //note that I've capitalized the constructor
  this.mainFruit = fruit1;
  this.secondaryFruit = fruit2;

  this.showSmoothie = function() {
    console.log( "Here is a delicious " + this.mainFruit + " smoothie. Mixed with the delicious flavor of " + this.secondaryFruit + "." );
  }
}

var bananaPeachBliss = new Smoothie( "banana", "peach" ),
  appleDragonfruitTerror = new Smoothie( "apple", "dragon fruit" );

bananaPeachBliss.showSmoothie();
appleDragonfruitTerror.showSmoothie();

// the new keyword will return us an object in this case
// play around with this a bit, it's something that you need to conceptually understand
// functions are special objects