//Object Constructors more in depth

/*
  All functions that have the 'new' keyword will initiate the prototype property (which is the objects prototype)
  More on prototypes will be explained in the inheritence section
*/

// Example 1: Function without new
function returnThis() {
  console.log(this);
}

returnThis(); //What does this return? Why?

//Note: if you ran the above example, you'll see that it returned the global object

// Example 2: Functiopn with new
var returned = new returnThis(); //What does does this return/ Why?

// Note: We see an empty object created with the new keyword here, this is because the 'new' keyword will always construct an object when placed in front of a function
// The constructed object becomes the context, or the 'this', within the function
// If you look carefully, you'll also see a __proto__ property, this is pointing to the object's prototype, but more on that later
