// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let water = 0
  let maxLeft = 0
  let maxRight = 0

  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left])
    maxRight = Math.max(maxRight, height[right])
    if (height[left] < height[right]) {
      water = water + (maxLeft - height[left])
      ++left
    } else {
      water = water + (maxRight - height[right])
      --right
    }
  }

  return water
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([4, 2, 3]));