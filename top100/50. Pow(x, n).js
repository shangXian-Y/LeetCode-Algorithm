// 50. Pow(x, n)
// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 
var myPow = function (x, n) {

  function calc(x, n) {
    if (n === 0) return 1
    let other = n % 2
    let temp = Math.floor(n / 2)
    let absN = Math.abs(n)
    if (absN > 1) {
      if (other) {
        return calc(x * x, temp) * x
      } else {
        return calc(x * x, temp)
      }
    } else if (absN == 1 && n > 0) {
      return x
    } else if (absN == 1 && n < 0) {
      return 1 / x
    }
  }
  return calc(x, n)
};

// console.log(myPow(2.0000, 10));
console.log(myPow(34.00515, -3));