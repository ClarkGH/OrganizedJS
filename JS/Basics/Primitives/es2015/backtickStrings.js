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
console.log(fewLines);
// Notice how it would be different from a single/double quote string?
// Compare and contrast

// Example 2: String Interpolation
const dude = "Daniel Boon",
  greeting = `Howdy ${dude}`;

console.log(greeting);

// Template Literals

/*
 * A template literal is a string parsed as a literal HTML tag.
 * These are very useful
 * You can release a string that acts as a literal HTML object.
 */

function p(textBlob) {
  return `<p>${textBlob}</p>`;
}

// Look at how we can call it!
p`What an amazing paragraph this was!` // "<p>What an amazing paragraph this was!</p>""

// Be careful with these calls though, they can be tricky:
function foo(strings) {
  console.log(strings[1]);
}

// What do you think this logs?
weirdInterpolator`I live in a ${weirdInterpolator} world`;
