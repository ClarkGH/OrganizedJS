// Binary Search Algorithm: Javascript

/* 
  Binary search algorithms find values in sorted arrays in O(log n) time
  They:
    1. Start in the middle
    2. Check to see if the target value is higher or smaller
    3. Moves left if smaller, right if larger
    4. We throw out the values we no longer need from the equation (right or left half gone!) 
    5. We then cut the problem in half again, restarting the process
    6. We'll do this until we either find the value or not
*/

// Example 1: Binary Search
var numberContainer = [1,2,3,4,5,6,7,8,9,10];

function binarySearch( value, arr ) {

  var indexFloor = -1, // set to -1 as a point where we start 'left' of index 0
    indexCeiling = arr.length; // set to the length so we start 'right' of the final index

  while ( indexFloor + 1 < indexCeiling ) {
    var distance = indexCeiling - indexFloor, //distance between ceiling and floor
      halfOfDistance = Math.floor( distance / 2 ),
      answerIndex = indexFloor + halfOfDistance,
      answerValue = arr[answerIndex];

    if ( value === answerValue ) { 
      console.log( 'The answer is ' + answerValue ); // for your benefit to see it working
      return true;
    }

    if ( answerValue > value ) {
      indexCeiling = answerIndex; // move the ceiling down, ignore the numbers we know we don't need
    } else {
      indexFloor = answerIndex; // move the floor up, same as when we moved the ceiling
    }
  }

  console.log('Could not find value in provided array');
  return false;
}