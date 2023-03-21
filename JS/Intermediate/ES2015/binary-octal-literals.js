// ES 2015 and Beyond: Binary and Octal literals

/*
  JavaScript now has two useful built-in methods to translate binary into JS number values
  I recommend reading up on binary/octal values to understand this section
*/

// Example 1: Binary and Octal values
console.log(0b10000001) // 0b precedes the binary value
console.log(0o767); // 0o precedes the octal value

//This is better than having to use parseInt and change base ala parseInt('026', 8) or parseInt('001101', 2);