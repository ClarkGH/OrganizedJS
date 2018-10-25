// Do not use array.reverse
function reverseArrInPlace(arr) {
  let head = 0,
    tail = arr.length - 1;
  
  while (head < tail) {
    [arr[head], arr[tail]] = [arr[tail], arr[head]];
    head++;
    tail--;
  }
  return arr;
}