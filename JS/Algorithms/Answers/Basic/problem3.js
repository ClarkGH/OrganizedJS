// Find the maximum subarray

var maximumSubArray = function (nums) {
  let current_max = nums[0],
    answer = nums[0];

  for (var i = 1; i < nums.length; i++) {
    current_max = Math.max(nums[i], current_max + nums[i]);
    answer = Math.max(current_max, answer);
  }
  return answer;

};