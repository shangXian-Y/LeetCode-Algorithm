/**
 * @param {number} x
 * @return {number}
 */
// 字符串反转法
// 思想: 将数字变成字符串后,拆分为数组然后进行反转
var reverse = function (x) {
  let fu = x < 0 ? true : false
  let arr = Math.abs(x).toString().split("").reverse().join("")

  if (arr < Math.pow(-2, 31) || arr > Math.pow(2, 31) - 1) {
    return 0;
  }
  if (fu) {
    return Number(`-${arr}`)
  } else {
    return Number(arr)
  }
};
// 数学法
// 思想: 将数字取余数弹出最后一个然后在新的数字中累加
var reverse = function (x) {
  let rev = 0
  while (x != 0) {
    let mid = x % 10
    x = ~~(x / 10)
    rev = rev * 10 + mid
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return rev
};