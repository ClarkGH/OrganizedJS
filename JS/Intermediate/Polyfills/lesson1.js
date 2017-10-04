// Polyfills: an introduction

// A polyfill is code that adds a feature that the engine may lack
// In the case of ES6/ES8, engineers used polyfills to add in functionality that was lacked in older browsers

//Example 1: Array ForEach Polyfill
if ( !Array.prototype.forEach ) { //note, if the engine has a foreach method, this code will not run
  Array.prototype.forEach = function( callback, thisArg ) {
    if(typeof(callback) !== "function") {
      throw new TypeError( callback + " is not a function!" );
    }
    var length = this.length;
    for( var i = 0; i < length; i++ ) {
      callback.call( thisArg, this[i], i, this )
    }
  }
}

/*
TODO: explain why we would want to use polyfills
  explain the use of this code
  refer to prototypical inheritance section if this isn't understood
*/