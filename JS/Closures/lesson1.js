// creating a closure to show how it works
// run through the code like you're the engine

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