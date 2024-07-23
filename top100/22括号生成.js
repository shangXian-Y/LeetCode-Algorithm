// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function (n) {
  let back = []

  function dfs(l, r, str) {
    if (str.length === n * 2) {
      back.push(str)
      return
    }
    if (l > 0) {
      dfs(l - 1, r, str + "(")
    }
    if (r > l) {
      dfs(l, r - 1, str + ")")
    }
  }

  dfs(n, n, "")
  return back
};

console.log(generateParenthesis(3));