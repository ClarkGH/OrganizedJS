// given a list of sorted numbers, give the median, the mean, and the mode

let listOfNums = [0, 3, 5, 7, 9, 12, 15, 26, 30, 30, 31, 28, 44, 47, 49, 50]

function mean(nums) {
  let sum = nums.reduce( (accum, currVal) => {
    return accum + currVal;
  });

  return (sum/nums.length).toFixed(2);
}

function median(nums) {
  return nums[Math.floor(nums.length/2)];
}

function mode(nums) {
  let map = {},
    max = 0,
    answer = 0;

  // hash map with count
  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  // find most common value
  for (let key in map) {
    if (map[key] > max) {
      max = map[key;]
      answer = key;
    }
  }

  // return most common value
  return answer[1];

  // stretch, only return most common value if it's the most recurring (none equally recurring), otherwise return null
}