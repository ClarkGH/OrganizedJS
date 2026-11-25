// Placeholder: hello world

type Greeting = string;

function sayHello(name: string): Greeting {
  return 'Hello, ' + name + '!';
}

console.log(sayHello('World')); // Hello, World!

// Node: running TypeScript natively

/*
  What happens when you run: node TS/Basics/AST.ts (Node 26)
  1. Node strips out the types. It doesn't type check and doesn't read tsconfig.json, that's what pnpm typecheck is for.
  2. Stripping swaps each type for the same number of spaces instead of deleting it.
     Every piece of JS stays at the same line and column as in the .ts file,
     so error messages and stack traces point at the right spot without a source map.
  3. That's why only erasable syntax works. A type can turn into spaces, but an enum creates a real object at runtime,
     so there's nothing to blank out. (erasableSyntaxOnly in tsconfig.json catches that before Node does.)
  4. What's left is plain JS, and it goes to V8, Chrome's JavaScript engine.
  5. V8 parses the JS into its own AST (same idea as ours above, V8's version of it).
  6. V8 turns that AST into bytecode, and Ignition (V8's interpreter) runs it.
  7. Code that runs a lot gets compiled to machine code for speed (Sparkplug first, then Maglev and TurboFan as it gets hotter).
     sayHello only runs once, so it stays bytecode.
*/

// Try it 1: see what Node strips (do this after you've written the JS version yourself)
//   node -e "process.stdout.write(require('node:module').stripTypeScriptTypes(require('fs').readFileSync('TS/Basics/AST.ts', 'utf8')))"
//   stripTypeScriptTypes is experimental, so expect a warning

// Try it 2: see the bytecode V8 makes for sayHello
//   node --print-bytecode --print-bytecode-filter=sayHello TS/Basics/AST.ts

/* What it prints (trimmed):
  100 S> LdaConstant [0:"Hello, "]   load "Hello, " into the accumulator (V8's scratch value)
         Star0                       store it in register r0
         Ldar a0                     load argument 0, which is name
  117 E> Add r0                      r0 + accumulator: "Hello, World"
         Star0                       store that in r0
         LdaConstant [1:"!"]         load "!"
  124 E> Add r0                      r0 + accumulator: "Hello, World!"
  130 S> Return                      hand back the accumulator

  The numbers on the left are character positions, and they point into AST.ts itself: 100 is where return starts.
  That only lines up because stripping kept everything in place (step 2).
  Add text above the code and the numbers shift, rerun the command to see.
*/
