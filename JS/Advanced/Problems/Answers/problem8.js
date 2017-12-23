// Problem: Assuming the fibonacci sequence starts with [0, 1, 1], find the nth value of the sequence

function findNthValueInSequence(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  var fibNums = [0,1];
  
  for (var i = 2; i < n; i++){
    fibNums[i] = (fibNums[i-1] + fibNums[i-2]);
  }
  return fibNums[n];
}

// Try writing a recursive solution.
// Can you find a faster solution than the one posted?