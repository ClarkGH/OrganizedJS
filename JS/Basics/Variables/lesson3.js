// Variables: Declaring muliple variables

// Two common styles: one var with commas, or one declaration per line
// One per line (ESLint's one-var rule) makes adding or removing a variable a one-line change
// Pick one and be consistent. With let and const, declare variables close to where you use them

// Example 1: Comma style
var water = 'essential',
  oxygen = water,
  waffles = 'nom nom nom';

// Example 2: One declaration per line
var water = 'essential';
var oxygen = water;
var waffles = 'nom nom nom';
