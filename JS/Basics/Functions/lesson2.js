// Closures, who is their daddy and what does he do?

// The abstrct daddy of closures is scope.
variablor = 'Conditioner is better!' // Because of hoisting, this assigns to the var declared below. Without that var, it would create a property on the global object, an accidental global variable.
console.log(this.variablor); // In a browser script, top-level this is window, so this logs it. In Node, top-level this is module.exports, so it's undefined.

var variablor = 'stop looking at me swan!'; // declared at the top level, so it's a global variable (in a browser it also becomes window.variablor). Everything in this file can see it.
console.log(variablor);

function scopeExample() {
  var variablart = 'Shampoo is better!'; // this is declared and defined within this function's lexical scope
}

// variablart; // ReferenceError: variablart is not defined. It only exists inside scopeExample, so it's commented out to let the rest of the file run.

/**
 * A closure is a function bundled together with the variables from the scope it was created in.
 * The inner function keeps access to those variables even after the outer function has returned.
 * This is useful for keeping data private: code outside can't reach name directly, only through the returned function.
 **/ 

function greet(name) {
  return function() {
    console.log('Howdy Deputy ' + name + ', somebody\'s poisoned the waterhole!');
  };
}

var sayHiToKristina = greet('kristina'); // This function will always say hi to Deputy Kristina now, it is unchangeable.
sayHiToKristina();

// Here's MDN's example of using it to create more functionality:
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
