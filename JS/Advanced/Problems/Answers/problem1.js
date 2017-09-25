// Find and print out a list of unique triplets 
// that sum up to the specified value

function findTriplets( array, value ) {
  var array = array.sort(),
    length = array.length;

  for ( var i = 0; i < length; i++ ) {
    var j = i + 1,
      k = length - 1;
    while ( j < k ) {
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