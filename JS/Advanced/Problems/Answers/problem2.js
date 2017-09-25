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

/* Example slow and ugly (n^3) Answer */
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

/* Full Fast and clean (n^2) Answer */

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