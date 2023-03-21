"use strict"

/**
 * Use Strict.
 * Is a string literal to allow it to be parsed by current gen engines, and be safely ignored by older engines.
 * Developers wanted a way to have up to date browser engines, like v8.
 * Use Strict specifically refuse code smells and error out or lint out in some IDEs.
 * Refuses allowing the deletion of namespaced variables and functions (delete only works with var declared variables, but isn't really sensible for temporary functional variables).
 * Can be used as a basic linter.
 * Can be placed in global or functional scopes.
*/

var cantDelete = 0;
canDelete = 0;

// Can't delete var declared variables, this is a waste of memory as variables are being garbage collected.
delete cantDelete;

// You can delete object or global properties, that's fine.
delete window.canDelete;

// You can put it in a function.
function wontDelete() {
  'use strict';

  return 'can\'t touch this';
};

// You can't delete functions, even if they don't have 'use strict' inside.
delete wontDelete;
