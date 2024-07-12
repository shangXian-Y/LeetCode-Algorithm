/**
 * @param {string} s
 * @return {number}
 */
// 思路: trim去空格 然后检测- +号 然后遍历字符串进行isNaN匹配 然后在范围值内进行匹配
var myAtoi = function (s) {
  let backStr = 0
  let str = s.trim()
  let fu = false
  if (str[0] === '-') {
    fu = true
    str = str.slice(1)
  } else if (str[0] === '+') {
    str = str.slice(1)
  }
  while (str != "") {
    let mid = str[0] != " " ? Number(str[0]) : NaN
    if (isNaN(mid)) {
      break
    }
    if (backStr === 0 && mid === 0) {
      str = str.slice(1)
    } else {
      backStr = backStr * 10 + mid
      str = str.slice(1)
      if (backStr < Math.pow(-2, 31) || backStr > Math.pow(2, 31) - 1) {
        return !fu ? Math.min(backStr, (Math.pow(2, 31) - 1)) : `-${Math.min(backStr, -Math.pow(-2, 31))}`;
      }
    }
  }
  return !fu ? backStr : `-${backStr}`
};

console.log(myAtoi("  -0012a42"))