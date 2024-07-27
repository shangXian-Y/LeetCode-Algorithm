// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
// 思路：二分查找，查找2种条件
var searchRange = function (nums, target) {
  function binarySearch(nums, target, lower) {
    let left = 0
    let right = nums.length - 1
    let ans = nums.length
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)
      console.log(middle, nums[middle]);
      if (nums[middle] > target || (lower && nums[middle] >= target)) {
        right = middle - 1
        ans = middle
      } else {
        left = middle + 1
      }
    }
    return ans
  }

  let ans = [-1, -1]
  let left = binarySearch(nums, target, true)
  let right = binarySearch(nums, target, false) - 1
  if (left <= right && right < nums.length && nums[left] == target && nums[right] == target) {
    ans = [left, right]
  }
  return ans
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 10], 8));