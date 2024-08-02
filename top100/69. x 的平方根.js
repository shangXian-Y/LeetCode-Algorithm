// 69. x 的平方根 
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

/**
 * @param {number} x
 * @return {number}
 */
// 暴力循环
var mySqrt = function (x) {
  let max = x
  for (let i = 1; i <= x; i++) {
    if (i * i > x) {
      max = i - 1
      break
    }
  }
  return max
};
// 二分查找
var mySqrt = function (x) {
  if (x < 2) {
    return x
  }
  let back = 0
  let left = 0
  let right = x
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (mid * mid <= x) {
      back = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return back
};

console.log(mySqrt(6));
// console.log(mySqrt(0));
// console.log(mySqrt(1));
// console.log(mySqrt(2));