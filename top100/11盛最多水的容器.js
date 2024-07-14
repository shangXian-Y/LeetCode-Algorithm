// 11. 盛最多水的容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
// 想法：双指针移动 x轴长度已知 左边两边谁短谁动
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    let nowLarge = Math.min(height[left], height[right]) * (right - left)
    if (nowLarge > max) {
      max = nowLarge
    }
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))
