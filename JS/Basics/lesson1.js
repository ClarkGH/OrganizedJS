/*
 * What is this?
 * Bunch of notes I wrote to help organize all of the mixed-up JS knowledge everywhere.
 * 
 * How can I use this?
 * Review the primitives section first if you don't know much about javascript.
*/

/* What Forms Javascript?
 * Javascript has 8 different data types
 * 1. Numbers
 * 2. Strings
 * 3. Booleans
 * 4. Symbol
 * 5. Undefined
 * 6. Null
 * 7. Objects
 * 8. BigInt
 *
 * Everything that isn't on this list is considered an object.
 */

//Examples

1; // number
"hi"; // string
true; // false
Symbol('foo'); // symbol
undefined; // undefined
null; // null
{} // object
function emptyFunction () {} // object
[1, 2, 3] // object
const gary = new Map(); // object