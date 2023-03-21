// JavaScript operators: Unary, Binary, Ternary

/*
  JavaScript has "binary" and "unary" operators. 
  There is a single "ternary" operator (the conditional operator)
  Binary requires 2 operands, one before operator and another after
*/

// Example 1: Binary operator
1 + 1; //The + symbol is the addition operator, with the 1 before and after both being operands

// Unary operators require a single operand before or after the operator

// Example 2: Unary operator
1++;
++1;

// Ternary operators take 3 operands, in the case of JS there is only one ternary operator

// Example 3: The Conditional(ternary) operator
// syntax: condition ? value1 : value2
var breakfast = ( 1 > 2 ) ? 'waffle' : 'pancake'; 
// the above will assign the value "waffle" if 1 is greater than two, otherwise it will set it to "pancake"

// What value do you think it will hold?
// Why?