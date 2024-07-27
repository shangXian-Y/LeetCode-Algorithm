// 38. 外观数列
// 「外观数列」是一个数位字符串序列，由递归公式定义：
// countAndSay(1) = "1"
// countAndSay(n) 是 countAndSay(n-1) 的行程长度编码。
// 行程长度编码（RLE）是一种字符串压缩方法，其工作原理是通过将连续相同字符（重复两次或更多次）替换为字符重复次数（运行长度）和字符的串联。
// 例如，要压缩字符串 "3322251" ，我们将 "33" 用 "23" 替换，将 "222" 用 "32" 替换，将 "5" 用 "15" 替换并将 "1" 用 "11" 替换。
// 因此压缩后字符串变为 "23321511"。
// 给定一个整数 n ，返回 外观数列 的第 n 个元素。

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function dfs(str, n) {
    if (n === 0) {
      return str;
    }
    let newStr = ""
    let temp = 1
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === str.charAt(i + 1)) {
        temp++
      } else {
        newStr = newStr + temp + str.charAt(i)
        temp = 1
      }
    }
    if (n != 0) {
      return dfs(newStr, n - 1)
    }
  }

  return dfs('1', n - 1)
};

console.log(countAndSay(4));