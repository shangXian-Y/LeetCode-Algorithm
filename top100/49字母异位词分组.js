// 49. 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 思路：遍历字符串得到对应的数组
function groupAnagrams(strs) {
  let dict = {};
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      let letter = strs[i][j].charCodeAt() - "a".charCodeAt();
      arr[letter]++;
    }

    dict[arr] ? dict[arr].push(strs[i]) : dict[arr] = [strs[i]];
  }
  console.log(dict);
  return Object.values(dict);
}

// 思路：对字符串拆分后直接排序
var groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach(item => {
    let arr = Array.from(item).sort()
    let key = arr.toString()
    let list
    map.has(key) ? list = map.get(key) : list = []
    list.push(item)
    map.set(key, list)
  });
  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
