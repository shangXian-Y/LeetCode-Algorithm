// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的 回文子串。

/**
 * @param {string} s
 * @return {string}
 */
// 双指针解法 选定回文字符串的中心位置, 1 or 2,然后向左右两侧移动
var longestPalindrome = function (s) {
  let max = ""

  for (let i = 0; i < s.length; i++) {
    change(i, i)
    change(i, i + 1)
  }

  function change(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    let temp = s.slice(l + 1, r)
    if (temp.length > max.length) {
      max = temp
    }
  }

  return max
};

console.log(longestPalindrome("babad"));