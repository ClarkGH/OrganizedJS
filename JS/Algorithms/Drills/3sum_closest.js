/*
3Sum Closest (unit 2: two pointers)

Given an integer array nums of length n and an integer target, find three
integers in nums at different indices whose sum is closest to target.
Return that sum. Each input has exactly one solution.

nums = [-1, 2, 1, -4], target = 1  ->  2   (-1 + 2 + 1 = 2)

Constraints: 3 <= n <= 500, -1000 <= nums[i] <= 1000, -10^4 <= target <= 10^4
nums is not sorted. Don't change nums: the caller still needs it.

Say out loud first: brute force + Big O, your approach + Big O (time and space).
After coding: trace the example above by hand, then one edge case.
*/
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let closestSum = nums + nums + nums;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 1. Check lower bound: smallest possible sum from index i onward
    const minSum = nums[i] + nums[i + 1] + nums[i + 2];
    if (minSum >= target) {
      if (Math.abs(minSum - target) < Math.abs(closestSum - target)) {
        closestSum = minSum;
      }
      // Since the array is sorted, all subsequent sums will only be larger
      break;
    }

    // 2. Check upper bound: largest possible sum with nums[i] as anchor
    const maxSum = nums[i] + nums[n - 2] + nums[n - 1];
    if (maxSum < target) {
      if (Math.abs(maxSum - target) < Math.abs(closestSum - target)) {
        closestSum = maxSum;
      }
      // Skip the two-pointer scan for this i
      continue;
    }

    // 3. Standard two-pointer scan
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === target) return currentSum;

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
