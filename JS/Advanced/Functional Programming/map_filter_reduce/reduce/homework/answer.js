// log an array summed with .reduce()
const arrayToSum = [1,2,3,4,5] //sums to 15

console.log(
  arrayToSum.reduce(
    (memo, val) => {
      return memo += val;
    }
  )
);

// With reduce, log a flattened 2d array

const twoDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(
  twoDimArray.reduce( (memo, val ) => {
    return memo.concat(...val);
  })
);

// Write your own reduce function

const arrayToReduce = [1, 2, 3, 4, 5];

arrayToReduce.manual_reduce = function (reducer, seedMemo) {
  const isInitMemoIndexZero = arguments.length < 2;

  // same as the built-in reduce: with no seed there's nothing to start from
  if (isInitMemoIndexZero && this.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let memo = isInitMemoIndexZero ? this[0] : seedMemo;

  const initialIteratee = isInitMemoIndexZero ? 1 : 0;

  for (var i = initialIteratee; i < this.length; i++) {
    memo = reducer(memo, this[i]);
  }

  return memo;
};

//with less code... (not mine)
// careful: the original used seedMemo || this[0], which treats a seed of 0 or '' as no seed at all
// checking for undefined fixes that, but an explicit undefined seed still gets skipped (arguments.length above doesn't have that problem)

arrayToReduce.other_manual_reduce = function (reducer, seedMemo) {
  let memo = seedMemo !== undefined ? seedMemo : this[0];
  let i = seedMemo !== undefined ? 0 : 1;

  for (; i < this.length; i++) {
    memo = reducer(memo, this[i]);
  }
  return memo;
};

console.log(arrayToReduce.manual_reduce((memo, val) => memo + val)); // 15
console.log(arrayToReduce.other_manual_reduce((count) => count + 1, 0)); // 5, counting items with a seed of 0
