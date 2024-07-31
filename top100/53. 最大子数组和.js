// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
  let temp = 0
  let maxAns = nums[0]
  nums.forEach((item) => {
    temp = Math.max(item + temp, item)
    maxAns = Math.max(maxAns, temp)
  })
  return maxAns
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));