// Loops: For

/*
  - A for loop has three parts: for (start; condition; update) { body }
  - start runs once, then it goes: check condition -> run body -> run update -> check condition again
  - The loop stops the first time the condition is false
  - All three parts are optional: for (;;) {} has no condition, so it loops forever
*/

// Example 1: Pre ES2015, the older way
// Using var

for (var index = 0; index < 5; index++) {
  console.log(index);
}

// Problematic due to the async closure trap AND scope leakage
// Only one variable binding is crated for the whole of the loop
// If you run async code inside, it'll do things you may not expect

// Example 2: Every callback references the exact same variable
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Logs: 3, 3, 3 (instead of 0, 1, 2)
// The callbacks run after the loop has finished, and they all share the one i from above
// By then that i is 3, so we're looking at the FINAL value

// Example 3: Scope Leakage
console.log(i) 
// logs 3, why do you think that is?
// Review scope section if you find this confusing

console.log(index)
// Without running: What do you think this will log?

// Example 4: Using Let
for (let j=0; j<5; j++) {
  console.log(j);
}
// Logs 0..4

// console.log(j);
// ReferenceError: j is not defined, j only exists inside the loop
// Commented out so the rest of the file runs (uncomment it and see)

// Now the Example 2 trap, with let this time
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Logs: 0, 1, 2 (right after Example 2's 3, 3, 3)
// let creates a brand new j for every pass of the loop, so each callback keeps its own

// This is the proper way to create for loops in javascript post ES2015
// Most newer devs will be confused by the older way.
// It still has gotchas

// Example 5: Weird Let Gotcha
for (let j = 0; j < 3; j++) {
  let j = 10; // Valid JS, but creates a confusing inner 'j'
  console.log(j); // Logs 10 three times; outer loop still runs 3 times
}

// Example 6: Const
// for (const p = 0; p < 3; p++) {};
// Uncomment above and run
// The body runs once, then p++ throws TypeError: Assignment to constant variable
// const can't change, and the update part needs to change it
// const does work in for...of loops, more on that in lesson 4
