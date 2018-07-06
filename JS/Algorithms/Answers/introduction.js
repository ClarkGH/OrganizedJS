/*
  TODO: explain
  1. Why the questions?
  2. What does the answer key mean?
  3. How do you solve this yourself?
  4. reorganize the questions later
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

//3. Find the character most common character in a string

// O(n) soln
// function findMostCommonChar(str) {
//   let charMap = {},
//     topVal = 0,
//     answer = '';

//   str.split('').forEach((char) => {
//     if(charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });

//   for(let char in charMap) {
//     if(charMap[char] > topVal) {
//       topVal = charMap[char];
//       answer = char;
//     }
//   }
 
// }



// Split

// Find and print out a list of unique triplets 
// that sum up to the specified value

function findTriplets(array, value) {
  var array = array.sort(),
    length = array.length;

  for (var i = 0; i < length; i++) {
    var j = i + 1,
      k = length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < value) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > value) {
        k--;
      } else {
        console.log(arr[i] + "," + arr[j] + "," + arr[k]);
        j++;
        k--;
      }
    }
  }
  return true;
}

// You're given an array of numbers
// You need to find the highest possible product you can find with three numbers in the array

/* More explanation for the confused */
// imagine that you have the following array
const exampleArray = [18, 97, 2, 9, 3, 0, 26, 0, 26, 15, 5, 18, 43];

// from looking at it at first: 
// Question? Can you tell which numbers will create the greatest number when multiplied against one another?
// Answer: It's the largest three numbers you can find.
// 97, 26, 43
// Can you solve for this example alone?
// Hint, you had to find unique triplets in the last problem.

/* Example slow and ugly O(n^3) Answer */
// function highestTripletProduct ( numArray ) {
//   if ( numArray.length < 3 ) { //check for 'if array' in testing as well for more error handline
//     throw new Error('Array isn\'t large enough.');
//   }

//   var highestProd = ( numArray[0] * numArray[1] * numArray[2] ) ,
//     answer = [numArray[0], numArray[1], numArray[2]],
//     tmpVal;

//   for ( var i = 0; i < numArray.length; i++) {
//     for ( var j = 0; j < numArray.length; j++) {
//       for ( var k = 0; k < numArray.length; k++) {
//         tmpVal = ( numArray[i] * numArray[j] * numArray[k] );
//         if ( i !== j && i !== k && j !== k && tmpVal > highestProd ) {
//           highestProd = tmpVal;
//           answer = [numArray[i], numArray[j], numArray[k]];
//         }
//       }
//     }
//   }
//   return answer;
// }

/* Full Fast and clean O(n) Answer */

// function highestTripletProduct( numArray ) {

//   if (numArray.length < 3) {
//       throw new Error('Array isn\'t large enough.');
//   }

//   var highestValue = Math.max(numArray[0], numArray[1]),
//     lowestValue  = Math.min(numArray[0], numArray[1]),
//     highestProductOf2 = numArray[0] * numArray[1],
//     lowestProductOf2  = numArray[0] * numArray[1],
//     highestProductOf3 = numArray[0] * numArray[1] * numArray[2];

//   for (var i = 2; i < numArray.length; i++) {
//       var currentPos = numArray[i];

//       highestProductOf3 = Math.max(
//           highestProductOf3,
//           currentPos * highestProductOf2,
//           currentPos * lowestProductOf2
//       );

//       highestProductOf2 = Math.max(
//           highestProductOf2,
//           currentPos * highest,
//           currentPos * lowest
//       );

//       lowestProductOf2 = Math.min(
//           lowestProductOf2,
//           currentPos * highest,
//           currentPos * lowest
//       );

//       highest = Math.max(highest, currentPos);

//       lowest = Math.min(lowest, currentPos);
//   }

//   return highestProductOf3;
// }

// highestTripletProduct( exampleArray )

// Merge two already sorted binary arrays. Bonus, solve in O(n) time

// Following solution works for both at O(n) time complexity

var arr1 = [1, 3, 5, 7, 9],
  arr2 = [2, 4, 6, 8, 10];

function myFunction(arr1, arr2) {
  var arr1Head,
    arr2Head,
    i = 0,
    pos1 = 0,
    pos2 = 0,
    mergedArr = [],
    mergedLen = (arr1.length + arr2.length);
  while (mergedArr.length < mergedLen) {
    arr1Head = arr1[pos1];
    arr2Head = arr2[pos2];

    if (arr1Head && arr1Head < arr2Head) {
      mergedArr[i] = arr1Head;
      pos1++;
      i++;
    } else {
      mergedArr[i] = arr2Head;
      pos2++;
      i++;
    }
  }
  return mergedArr;
}

console.log(myFunction(arr1, arr2));

// Create a linked list with add, find, traversal, and delete functionality

class SinglyLinkedList {

  constructor(value) {
    this.next = null;
    this.value = value;
  }

  // Iterativily
  add(value) {
    let currentNode = this;
    while (currentNode.next !== null) {
      currentNode = this.next;
    }

    currentNode.next = new SinglyLinkedList(value);
    return currentNode.next;
  }

  // Recursive
  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.next == null) {
      return null;
    }

    return this.next.find(value);
  }

  delete(value) {
    const predecessor = this._findPredecessor(value);
    const current = predecessor.next;
    predecessor.next = current.next;
  }

  // Recursive
  traverse(nodesValues = []) {
    nodesValues.push(this.value);
    if (this.next === null) {
      return nodesValues;
    }
    return this.next.traverse(nodesValues);
  }

  reverse(nodesValues = []) {
    var node = this;
    var previous = null;

    while (node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }

  // Recursive
  _findPredecessor(value, predecessor = this) {
    if (this.value === value) {
      return predecessor;
    } else if (this.next !== null) {
      return this.next._findPredecessor(value, this);
    }

    return null;
  }
}


// Questions
// 1- What is the difference between classical inheritance and prototypal inheritance?
// 2- What are the pros and cons of functional programming vs object-oriented programming?

// Runner code
const head = new SinglyLinkedList('value');
head.add('value2').add('value3').add('value4');
console.log(head.traverse());
console.log(head.reverse());

// Implement reverse recursively || iteretively
// How do you think about this implementatoin


// Find the prime factors of a given number

// Hints
/*
  1. Factors are the numbers that create the product when multiplied by one another.
  2. Review Problem 5 if confused
*/

function findPrimeFactors(num) {
  var divisor = 2,
    factors = [];

  while (num > 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    }
    divisor++;
  }
  return factors;
}

// Can you speend this algorithm up more?
// How?

// return whether or not a number is in the fibonacci sequence

// function isFibonacci(num) {

// }

// Hints
/* 
  1. Fibonacci numbers are numbers that follow the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
  2. Each following integer is the sum of the two previous integers
  3. Can you guess what the next number in the sequence would be?
*/

// Answer

function isFibonacci(num) {
  if (num === 0 || num === 1) {
    return true;
  }

  var fibNums = [0, 1, 1],
    i = 1,
    j = fibNums.length - 1;

  while (num >= fibNums[j]) {
    if (num === fibNums[j]) {
      return true;
    } else {
      fibNums.push((fibNums[i] + fibNums[j]));
      j = fibNums.length - 1;
      i++;
    }
  }

  return false;
}

// What is this solution's complexity?
// Can you make this faster?

// Problem: Assuming the fibonacci sequence starts with [0, 1, 1], find the nth value of the sequence

function findNthValueInSequence(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  var fibNums = [0, 1];

  for (var i = 2; i < n; i++) {
    fibNums[i] = (fibNums[i - 1] + fibNums[i - 2]);
  }
  return fibNums[n];
}

// Try writing a recursive solution.
// Can you find a faster solution than the one posted?

// Return the largest divisor (doesn't need to be prime) of two given numbers

function largestDivisor(num1, num2) {

}

// Find the sum of a given array 'ar' given the length 'n'

// example solution
function simpleArraySum(n, ar) {
  var answer = 0,
    head = 0,
    tail = n - 1;
  if (tail % 2 === 0) {
    answer += ar[tail];
    tail--;
  }
  while (head < tail) {
    answer += (ar[head] + ar[tail]);
    head++;
    tail--;
  }
  return answer;
}