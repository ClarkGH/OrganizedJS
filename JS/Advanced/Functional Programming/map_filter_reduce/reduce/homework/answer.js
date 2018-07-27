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