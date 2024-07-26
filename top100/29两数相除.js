// 29. 两数相除
// 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
// 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
// 返回被除数 dividend 除以除数 divisor 得到的 商 。
// 注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−231,  231 − 1] 。
// 本题中，如果商 严格大于 231 − 1 ，则返回 231 − 1 ；如果商 严格小于 -231 ，则返回 -231 。

/**
* @param {number} dividend
* @param {number} divisor
* @return {number}
*/
// 循环递减 -》 更优位运算
var divide = function (dividend, divisor) {
  if (dividend == -Math.pow(2, 31) && divisor == -1) return Math.pow(2, 31) - 1
  let result = 0
  let temp = 1
  let denominator = Math.abs(dividend)
  let molecule = Math.abs(divisor)

  while (denominator >= molecule) {
    denominator = denominator - molecule
    result++
    temp++
    while (denominator > molecule * temp) {
      denominator = denominator - molecule * temp
      result = result + temp
      temp++
    }
    temp = 1
  }

  return (dividend > 0) ^ (divisor > 0) == 1 ? "-" + result : result
};

console.log(divide(10, 3));
console.log(divide(100, 3));
console.log(divide(1, 1));
console.log(divide(-1, 1));