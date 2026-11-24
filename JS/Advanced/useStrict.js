'use strict';

/**
 * Use Strict.
 * Is a string literal to allow it to be parsed by current gen engines, and be safely ignored by older engines.
 * It opts a file (or a function) into a stricter version of JavaScript that turns silent mistakes into errors:
 *   - Assigning to an undeclared variable throws a ReferenceError instead of creating a global.
 *   - 'this' is undefined in a plain function call instead of the global object.
 *   - Writing to a read-only property throws instead of being quietly ignored.
 *   - 'delete someVariable' is a SyntaxError. Outside strict mode it just returns false and nothing happens.
 *   - Duplicate parameter names and 'with' statements are SyntaxErrors.
 * Can be placed in global or functional scopes.
 * ES modules and class bodies are always strict, no directive needed.
 * A linter (like ESLint) catches far more than strict mode does, so use both.
*/

var declared = 0;

// undeclared = 0;
// ReferenceError: undeclared is not defined. Without strict mode this would quietly create a global.

// delete declared;
// SyntaxError in strict mode, so it's commented out or the whole file won't run.
// Without strict mode it returns false and the variable stays. delete is meant for object properties.

// You can delete object properties, that's fine.
const holder = { canDelete: 0 };
delete holder.canDelete;
console.log(holder.canDelete); // undefined

// 'this' in a plain function call
function whatIsThis() {
  return this;
}
console.log(whatIsThis()); // undefined in strict mode, the global object without it

// You can put it in a function.
function onlyThisIsStrict() {
  'use strict';

  return 'can\'t touch this';
}
