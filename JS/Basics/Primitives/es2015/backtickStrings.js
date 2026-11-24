// ES2015: Backtick Strings

/* 
  Backtick strings are also called template strings
  As the name suggests, you can now use backticks to create strings
  New features:
    - Multi-line strings
    - String interpolation
*/

// Example 1: Multi-line strings
const threeLines = `
barnabus
boon
borthus
`
console.log(threeLines);
// Notice how it would be different from a single/double quote string?
// Compare and contrast

// Example 2: String Interpolation
const dude = "Daniel Boon",
  greeting = `Howdy ${dude}`;

console.log(greeting);

// Tagged Templates

/*
 * A tagged template is a template literal with a function name in front of it.
 * These are very useful
 * The function gets called with an array of the plain string parts, then each ${} value as its own argument.
 * Whatever the function returns is the result, so you can use it to build things like HTML.
 */

function p(strings) {
  return `<p>${strings[0]}</p>`;
}

// Look at how we can call it!
p`What an amazing paragraph this was!` // "<p>What an amazing paragraph this was!</p>"

// Be careful with these calls though, they can be tricky:
function weirdInterpolator(strings) {
  console.log(strings[1]);
}

// What do you think this logs?
weirdInterpolator`I live in a ${weirdInterpolator} world`;
