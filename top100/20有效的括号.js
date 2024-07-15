// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
// 括号等需要成对出现  出现左部分是push进数组  有右侧部分时弹出数组最后一个进行比较
var isValid = function (s) {
  let dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === undefined) {
      arr.push(s[i])
    } else {
      let pop = arr.pop()
      if (dict[s[i]] === pop) {
        continue
      } else {
        return false
      }
    }
  }
  return arr.length > 0 ? false : true
};

console.log(isValid(")"))