# OrganizedJS Plan

What's left to write, in the order I'm writing it. Each checkbox is one rep: one lesson file.

★ = comes up a lot in frontend interviews

## How a rep works

1. Pick the next unchecked item.
2. Write the lesson in the format below.
3. Run it with `node <file>`, then run `pnpm check`.
4. Get a review. A wrong explanation counts as a bug, the same as broken code.
5. Answer 2–3 "what would go wrong if…" questions about it, then check the box.

## Lesson format

This covers README TODO #1, "Formalize format". It's the layout most lessons already use.

```js
// <Topic>: <Subtopic>

/*
  - What it is, in a sentence or two
  - The rules worth remembering
*/

// Example 1: <name>
// ...code...
// What do you expect to see? Why?

// Example 2: <name>
// ...

/* Review
  What the examples showed, and the gotcha to remember
*/

// Homework (optional): one small task, answer goes in a matching answers file
```

Rules:

- Every file runs top to bottom without crashing, unless it crashes on purpose and says so.
- Write the expected output in a comment next to each log.
- Lessons that need sloppy mode stay that way. `"use strict"` only goes where the lesson is about it.

## Phase 0: Finish what's already promised

- [x] `JS/Basics/Loops/lesson2.js`: for loops (the file is only a title right now)
- [ ] `JS/Basics/Loops/lesson3.js`: `while` and `do...while`
- [ ] `JS/Basics/Loops/lesson4.js`: `for...of` vs `for...in`
- [ ] `JS/Basics/Loops/lesson5.js`: `break` and `continue` (closes README TODO #6)
- [ ] `JS/Basics/Functions/lesson3.js`: anonymous vs declared functions, parameters (the TODO in Functions/lesson1)
- [ ] `JS/Intermediate/Inheritence/Prototypical/lesson2.js`: the prototype chain ★ (promised as "next lesson")
- [ ] `JS/Intermediate/Inheritence/Classical/lesson1.js`: constructor functions, then `Object.create`, then `class` with `extends` and `super` (also closes the TODO in Objects/lesson6)
- [ ] `JS/Advanced/OOP/lesson1.js`: classical vs prototypal inheritance, composition over inheritance (the links are in `Reading Materials/Javascript/OOP.md`)
- [ ] `JS/Advanced/Functional Programming/map_filter_reduce/`: one lesson each for `map`, `filter`, and `reduce` (the reduce homework answer already exists)
- [ ] `JS/Intermediate/Polyfills/lesson1.js`: fill in its TODO (why polyfills exist and how this one works)

## Phase 1: Basics gaps

- [ ] `JS/Basics/Conditionals/lesson1.js`: `if` / `else if` / `else`
- [ ] `JS/Basics/Conditionals/lesson2.js`: `switch`, including fall-through
- [ ] `JS/Basics/Coercion/lesson1.js`: `==` vs `===` ★
- [ ] `JS/Basics/Coercion/lesson2.js`: truthy and falsy values ★
- [ ] `JS/Basics/Variables/lesson4.js`: `let` and `const`: block scope, the temporal dead zone, and why `const` doesn't mean immutable ★
- [ ] `JS/Basics/Functions/lesson4.js`: arrow functions, including that they don't get their own `this` ★
- [ ] `JS/Basics/Functions/lesson5.js`: default parameters
- [ ] `JS/Basics/Objects/ES2015/lesson2.js`: destructuring objects and arrays
- [ ] `JS/Basics/Primitives/lesson4.js`: string methods
- [ ] `JS/Basics/Arrays/lesson5.js`: non-mutating array methods (`slice`, `concat`, `includes`, `find`, `some`, `every`)
- [ ] `JS/Basics/Objects/lesson7.js`: JSON (`stringify`, `parse`, and what doesn't survive the round trip)

## Phase 2: Intermediate gaps

- [ ] `JS/Intermediate/Modules/lesson1.js`: ES modules (`import` / `export`)
- [ ] `JS/Intermediate/Modules/lesson2.js`: CommonJS vs ES modules, and why `require` and `import` don't mix freely
- [ ] `JS/Intermediate/Async/lesson2.js`: the event loop: microtasks vs macrotasks ★
- [ ] `JS/Intermediate/Async/lesson3.js`: `fetch` and `AbortController` ★
- [ ] `JS/Intermediate/ES2015/Collections/lesson1.js`: `Map` and `Set` vs plain objects and arrays
- [ ] `JS/Intermediate/ES2015/Collections/lesson2.js`: `WeakMap` and `WeakSet`
- [ ] `JS/Intermediate/ES2015/Iterators/lesson1.js`: `Symbol.iterator` (connects the generators lessons to `for...of`)
- [ ] `JS/Intermediate/Objects/lesson1.js`: getters and setters
- [ ] `JS/Intermediate/Error-Handling/lesson3.js`: custom error classes
- [ ] `JS/Intermediate/ES2020/lesson1.js`: optional chaining `?.` and nullish coalescing `??` ★

## Phase 3: Advanced gaps

- [ ] `JS/Advanced/Functional Programming/lesson2.js`: currying and compose
- [ ] `JS/Advanced/Functional Programming/lesson3.js`: immutability (spread copies, `Object.freeze`, shallow vs deep)
- [ ] `JS/Advanced/Functional Programming/lesson4.js`: debounce and throttle ★
- [ ] `JS/Advanced/OOP/lesson2.js`: private class fields `#x` and static members
- [ ] `JS/Advanced/Metaprogramming/lesson1.js`: `Proxy` and `Reflect`
- [ ] `JS/Advanced/Regex/lesson1.js`: regex basics, flags, and groups
- [ ] `JS/Advanced/Browser/lesson1.js`: the DOM: selecting and updating elements ★
- [ ] `JS/Advanced/Browser/lesson2.js`: events, bubbling, and event delegation ★
- [ ] `JS/Advanced/Nodejs/lesson1.js`: `fs` and `path`
- [ ] `JS/Advanced/Nodejs/lesson2.js`: `EventEmitter` and streams
- [ ] `JS/Advanced/Nodejs/Expressjs/lesson2.js`: routes, params, and middleware
- [ ] `JS/Testing/lesson1.js`: first tests with Node's built-in `node:test` (no dependencies). **Decide:** keep `JS/Jest/README.md` or replace it? Enzyme is dead.

## Phase 4: Newer JS

These go in year folders, the same way `ES2015/` works.

- [ ] `ES2020+`: `Promise.allSettled` / `Promise.any`, top-level `await`, `structuredClone`, `.at()`
- [ ] `ES2023`: `toSorted` / `toReversed` / `toSpliced` / `with` (the non-mutating versions of Arrays/lesson3–4)
- [ ] `ES2024`: `Object.groupBy`, `Promise.withResolvers`
- [ ] `ES2025` [VERIFY which year these landed]: Set methods (`union`, `intersection`, …) and iterator helpers

## Phase 5: Data structures and algorithms

Answers go in `JS/Algorithms/Answers/`, the same as the existing ones.

- [ ] `JS/Data Structures/Stack and Queue/`: build both, and see why `shift` is O(n)
- [ ] `JS/Data Structures/Hash Table/`: build one, handle collisions
- [ ] `JS/Data Structures/Heap/`: min-heap, push and pop
- [ ] `JS/Data Structures/Graph/`: adjacency list, breadth-first and depth-first search ★
- [ ] `JS/Data Structures/Trie/`: insert and prefix search
- [ ] `JS/Data Structures/Binary Search Tree/`: post-order and level-order (breadth-first) traversal
- [ ] Algorithms: merge sort, quicksort
- [ ] Algorithms: dynamic programming (memoized fibonacci, then climbing stairs)
- [ ] Algorithms: sliding window and two pointers ★

## Phase 6: TypeScript

### Setup (one-time)

- [x] `pnpm add -D typescript` (7.0.2). This is the repo's first dependency, so `node_modules/` is in `.gitignore`.
- [x] `tsconfig.json`: `strict`, `noEmit`, `erasableSyntaxOnly` (rejects syntax Node can't strip), `verbatimModuleSyntax` (forces `import type`), `allowImportingTsExtensions` (imports use `./file.ts`, the same path Node needs). Each flag has a comment explaining it.
- [x] `TS/package.json` sets `"type": "module"`, so TS lessons are ES modules. The JS lessons aren't affected.
- [x] Added a `"typecheck": "tsc"` script. `pnpm check` skips `.ts` files on purpose: `node --check` doesn't strip types.
- Run lessons with `node <file>.ts`. Node 26 strips the types and runs what's left.
- `pnpm typecheck` fails with "No inputs were found" until the first `.ts` file exists in `TS/`. That's expected.
- Lessons that use Node APIs (`fs`, `path`) will need `@types/node`, plus `"node"` added to `types` in tsconfig.

### TS/Basics

- [ ] annotations vs inference
- [ ] arrays, tuples, and object types with optional properties
- [ ] union types and narrowing ★
- [ ] `interface` vs `type` ★
- [ ] typing functions: parameters, return types, overloads

### TS/Intermediate

- [ ] generics ★
- [ ] utility types: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`
- [ ] discriminated unions ★
- [ ] `unknown` vs `any` vs `never`
- [ ] type guards and assertion functions
- [ ] `satisfies`
- [ ] why a union of literals beats `enum` (`enum` won't run under Node's type stripping, which makes a good demo)

### TS/Advanced

- [ ] conditional types and `infer`
- [ ] mapped types
- [ ] template literal types
- [ ] writing a `.d.ts` file for an untyped JS module
- [ ] `tsconfig` strict flags: what each one catches

### Port reps

- [ ] Port `DoubleLinkedList.js` to TS
- [ ] Port `binaryTree.js` to TS with generics
- [ ] Port one Promises lesson to TS (typing async code)
