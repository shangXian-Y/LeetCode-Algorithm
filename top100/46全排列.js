// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

/**
* @param {number[]} nums
* @return {number[][]}
*/
// 寻常 回溯算法
var permute = function (nums) {
  let back = []
  let maxLeng = nums.length
  function dfs(list, arr) {
    if (arr.length === maxLeng) {
      back.push(arr)
      return
    }

    for (let i = 0; i < list.length; i++) {
      let newArr = [...arr, list[i]]
      let temp = [...list]
      temp.splice(i, 1)
      dfs(temp, newArr)
    }

  }
  dfs(nums, [])
  return back
};

var permute = function (nums) {
  let back = []
  let maxLeng = nums.length
  function dfs(list, arr) {
    if (arr.length === maxLeng) {
      back.push([...arr])
      return
    }

    for (let i = 0; i < list.length; i++) {
      if (arr.indexOf(list[i]) != -1) {
        continue
      }
      arr.push(list[i])
      dfs(list, arr)
      arr.pop()
    }

  }
  dfs(nums, [])
  return back
};

console.log(permute([1, 2]));// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]