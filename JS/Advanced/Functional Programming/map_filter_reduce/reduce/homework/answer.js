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

demoArray.manual_reduce = function (reducer, seedMemo) {
  const isInitMemoIndexZero = arguments.length < 2;

  let memo = isInitMemoIndexZero ? this[0] : seedMemo;

  const initialIteratee = isInitMemoIndexZero ? 1 : 0;

  for (var i = initialIteratee; i < this.length; i++) {
    memo = reducer(memo, this[i]);
  }

  return memo;
};

//with less code... (not mine, but logic is good)

arr.other_manual_reduce = function (reducer, seedMemo) {
  let memo = seedMemo || this[0];
  let i = seedMemo ? 0 : 1;

  for (; i < this.length; i++) {
    memo = reducer(memo, this[i]);
  }
  return memo;
};