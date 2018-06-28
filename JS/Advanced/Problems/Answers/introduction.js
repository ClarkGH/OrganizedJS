/*
  TODO: explain
  1. Why the questions?
  2. What does the answer key mean?
  3. How do you solve this yourself?
*/

// Basic Examples:

// 1. Reverse a String 

// easy solution O(nlog(n))

// function reverseStr(str) {
//   const splitStr = str.split(''),
//     reversedStr = splitStr.reverse();

//   return reversedStr.join('');
// }

// for loop solution o(n)

// function reverseStr(str) {
//   let answer = ''
//   for (let i = str.length - 1; i >= str.length; i--) {
//     answer = str[i] + answer;
//   }
//   return answer;
// }

// for-of loop solution o(n)

// function reverseStr(str) {
//   for (let char of str) {
//     answer = str[i] + answer;
//   }
//   return answer;
// }

// for-each loop solution o(n)

// function reverseStr(str) {
//   let answer = '';
//   str.split('').forEach((char) => answer + char);
//   return answer;
// }

// reduce solution o(n)

// function reverseStr(str) {
  // return str.split('').reduce( (accumulator, char) => {
  //   return char + accumulator;
  // });
// }

// O(n) bad example, overly complex and has a bug, can you fix it?
// function reverseStr(str) {
//   let strArr = [];
// 
//   for (let i = 0; i < str.length; i++) {
//     strArr.push(str[i]);
//   }
// 
//   let head = 0,
//     tail = strArr.length - 1;
//   while (head < tail) {
//     [strArr[head], strArr[tail]] = [[strArr[tail], strArr[head]]];
//     head++;
//     tail--;
//   }
//   return strArr.join('');
// }

// 2. Is palindrome? (we've already reversed a string)

// reduce solution o(n) w/ reverse
// function isPalindrome(str) {
//   let reversedStr = '';
//   str.split('').reduce((accumulator, char) => {
//     reversedStr = char + accumulator;
//   });
//   return reversedStr === str;
// }

// O(log(n)) solution, compare head to tail

// function reverseStr(str) {
//   let str = str.toLowerCase();
//   let start = 0;
//   let end = str.length - 1;
// 
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }