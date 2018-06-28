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