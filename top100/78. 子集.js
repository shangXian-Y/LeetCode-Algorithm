// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums) {
  let ans = []
  let path = []
  let n = nums.length

  function dfs(i) {
    if (i === n) {
      ans.push(path.slice())
      return
    }
    // 不选当前字符
    dfs(i + 1)
    // 选当前字符
    path.push(nums[i])
    dfs(i + 1)
    // 恢复现场
    path.pop()
  }

  dfs(0)

  return ans
};

console.log(subsets([1, 2, 3]));