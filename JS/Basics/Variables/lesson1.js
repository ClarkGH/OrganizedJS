// variables store data
'use strict';

/* 
- Variables are containers that refer to data positions in memory. 
- Variables can contain any value or object
- Variables are first declared, and all variable declararations before any code is executions.
- Variable definitions are processed during code execution
*/

// pre es2015 syntax

// Example 1
var variableName; //variable declaration. Variable will point to undefined
console.log(variableName);
variablName = 'string'; //variable definition. Variable will point to the address of the string 'string'
console.log(variableName);