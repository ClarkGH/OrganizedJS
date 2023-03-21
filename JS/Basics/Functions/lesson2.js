// Closures, who is their daddy and what does he do?

// The abstrct daddy of closures is scope.
variablor = 'Conditioner is better!' // property value on the global object, otherwise called a global variable.
console.log(this.variablor);

var variablor = 'stop looking at me swan!'; // locally scoped variable, only accessible lexically to this global object and it's children. Goes away on garbage collection.
console.log(variablor);

function scopeExample() {
  var variablart = 'Shampoo is better!'; // this is declared and defined within this function's lexical scope
}

variablart; // undefined

/**
 * A closure, is simply an enclosed scope that disallows access outside of its context.
 * This is useful with regards to security.
 **/ 

function greet(name) {
  return function() {
    console.log('Howdy Deputy ' + name + ', somebody\'s poisoned the waterhole!');
  };
}

var sayHiToKristina = greet('kristina'); // This function will always say hi to Deputy Kristina now, it is unchangeable.

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

