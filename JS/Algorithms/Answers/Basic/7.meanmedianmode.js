// given a list of sorted numbers, give the median, the mean, and the mode

let listOfNums = [0, 3, 5, 7, 9, 12, 15, 26, 28, 30, 30, 31, 44, 47, 49, 50]

function mean(nums) {
  let sum = nums.reduce( (accum, currVal) => {
    return accum + currVal;
  }, 0); // starting at 0 keeps an empty list from throwing (it returns NaN instead)

  return Number((sum/nums.length).toFixed(2)); // toFixed returns a string, so turn it back into a number
}

function median(nums) {
  let middle = Math.floor(nums.length/2);

  // an even amount of numbers has two middles, so we average them
  if (nums.length % 2 === 0) {
    return (nums[middle - 1] + nums[middle]) / 2;
  }

  return nums[middle];
}

function mode(nums) {
  let map = {},
    max = 0,
    answer = [];

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
    // need to use hasOwnProperty to make sure key isn't coming from prototype
    if (!map.hasOwnProperty(key)) {
      continue;
    }

    // object keys are always strings, so turn them back into numbers
    if (map[key] > max) {
      max = map[key];
      answer = [Number(key)];
    // if we have more than one mode we should show for it
    } else if (map[key] === max) {
      answer = [...answer, Number(key)];
    }
  }

  // if they all recurr the same amount of times return empty
  // otherwise return answer
  if (answer.length === Object.keys(map).length) {
    return [];
  } else {
    return answer;
  }

}