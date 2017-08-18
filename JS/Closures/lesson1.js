// creating a closure to show how it works
// example 1
function getTurtleInfo ( name ) {
  return function ( weapon, saying ) {
    if ( name === 'Raphael' ) {
      console.log( name + ' wields the deadly ' + weapon + ' and always says \"' + saying + '\"' );
    }    
  }
}

var stateTurtleInfo = getTurtleInfo('Raphael');

stateTurtleInfo( 'waffles', 'I can\'t wait to get home and start my taxes.' );

// Why did it print what it did?
// run through the code like you're the engine

//Note lines 4-8. What are we returning?
//How do you think it's getting called?
//We'll go more in depth next lesson and will explain what a closure is.