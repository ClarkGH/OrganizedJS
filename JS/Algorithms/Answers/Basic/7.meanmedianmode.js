// given a list of sorted numbers, give the median, the mean, and the mode

let listOfNums = [0, 3, 5, 7, 9, 12, 15, 26, 30, 30, 31, 28, 44, 47, 49, 50]

function mean(nums) {
  let sum = nums.reduce( (accum, currVal) => {
    return accum + currVal;
  });

  return (sum/nums.length).toFixed(2);
}

function median(nums) {

}

function mode(nums) {

}