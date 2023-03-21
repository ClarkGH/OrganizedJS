// Spread and Rest operators in JavaScript or '...'

/**
 * The Rest Params Operator '...' ...
 * It's used specifically with function params.
 * It Infers all arguments up to that argument's index into an array.
 * This is an alternative to the arguments object that exists within every JavaScript function.
 **/

// Before we had Rest Parameters
function sum() {
  // Calling arguments is a performance hit!
  var nums = Array.prototype.slice.call(arguments, 1);

  return nums.reduce((a,b) => a + b);
}

// Now we have rest params built-in
const sum = (...nums) => {
  return nums.reduce((a,b) => a + b);
};

sum(1, 2, 3, 4); // 10

const sayHappyBirthdayGreeting = (age, name, ...words) => {
  const birthdayMessage = words.join(' ');

  return `Happy birthday ${name}, you are now of ${age} years. ${birthdayMessage}.`;
};

sayHappyBirthdayGreeting(98, 'Gary', 'You', 'are', 'old');

/**
 * The Spread Properties Operator '...'
 * Used to explode object properties.
 * Also used to explode array values.
 * You can only call this inside function calls or object/array definitions
*/

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
const dog = { say: 'woof' };
const hound = { ...dog, action: 'hunt' }; // { say: 'woof', action: 'hunt' }
const words = ['It', 'is', 'you', 'birthday.', 'Consume', 'your', 'nutrition', 'paste'];

sayHappyBirthdayGreeting(32, 'Logan', ...words);
