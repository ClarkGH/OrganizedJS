// Loops: For

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
// Due to the engine, we're looking at the FINAL value

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

console.log(j);
// Returns undefined

// This is the proper way to create for loops in javascript post ES2015
// Most newer devs will be confused by the older way.
// It still has gotchas

// Example 5: Weird Let Gotcha
for (let j = 0; j < 3; j++) {
  let j = 10; // Valid JS, but creates a confusing inner 'i'
  console.log(j); // Logs 10 three times; outer loop still runs 3 times
}

// Example 6: Const
// for (const p = 0; p < 3; p++) {};
// Uncomment above and run
