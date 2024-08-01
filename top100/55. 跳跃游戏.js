// 55. 跳跃游戏
// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路：倒叙遍历，是否能到达最后一个
var canJump = function (nums) {
  if (nums.length <= 1) return true
  let end = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (end - i <= nums[i]) {
      end = i;
    }
  }

  return end == 0
};

// console.log(canJump([3, 2, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 0]));
// console.log(canJump([1, 1, 0, 1]));