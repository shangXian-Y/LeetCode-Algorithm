// 84. 柱状图中最大的矩形
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
// https://leetcode.cn/problems/largest-rectangle-in-histogram/description/?envType=problem-list-v2&envId=2ckc81c

/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
  const n = heights.length;
  const left = Array(n).fill(-1);
  let stack = [];
  for (let i = 0; i < n; i++) {
    const x = heights[i]
    while (stack.length && x <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      left[i] = stack[stack.length - 1]
    }
    stack.push(i);
  }

  const right = Array(n).fill(n);
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    const x = heights[i];
    while (stack.length && x <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  console.log(left, right);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
  }
  return ans;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// console.log(largestRectangleArea([2, 4]));
// console.log(largestRectangleArea([4, 2, 3]));