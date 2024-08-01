// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 思路： 倒叙循环找第一个不是9的数字
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
      }
    } else {
      digits[i]++
      break
    }
  }
  return digits
};

console.log(plusOne([9]));
console.log(plusOne([9, 9]));
// console.log(plusOne([1, 2, 3]));