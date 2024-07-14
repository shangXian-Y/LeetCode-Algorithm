// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
// 笨拙的双循环
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let init = ""
  let newStrs = strs.slice(2)
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[1][i]) {
      init = init + strs[0][i]
    } else {
      break
    }
  }
  for (let i = 0; i < newStrs.length; ++i) {
    if (init === "") {
      break
    }
    for (let j = 0; j < init.length; j++) {
      if (init[j] !== newStrs[i][j]) {
        init = init.slice(0, j)
        break
      }
    }
  }

  return init
};

// 精简版
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let init = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < init.length && j < strs[i].length; j++) {
      if (init[j] != strs[i][j]) {
        break
      }
    }
    init = init.slice(0, j)
    if (init === "") {
      return ""
    }
  }

  return init
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["ab", "a"]))