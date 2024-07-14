// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
// 递归思想
var letterCombinations = function (digits) {
  let dict = {
    "0": [],
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  function demo(otherStr) {
    const first = otherStr[0]
    let newStr = otherStr.slice(1)
    let dictArr = dict[first] || []
    let children = []
    let back = []
    if (newStr.length > 0) {
      children = demo(newStr)
    } else {
      return dictArr
    }
    dictArr.forEach(item => {
      for (let i = 0; i < children.length; i++) {
        back.push(item + children[i])
      }
    });

    return back
  }

  return demo(digits)
};

var letterCombinations = function (digits) {
  if (digits === '') return [];
  let list = [];
  let map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  function dfs(index, str) {
    if (str.length === digits.length) {
      return list.push(str);
    }

    for (let v of map[digits[index]]) {
      dfs(index + 1, str + v);
    }
  }
  dfs(0, '');

  return list;
};

console.log(letterCombinations("23"))
// console.log(letterCombinations(""))
// console.log(letterCombinations("3"))