// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let newArr = []
  let left = -1
  let right = -1

  for (let i = 0; i < intervals.length; i++) {
    if (left === -1) {
      left = intervals[i][0]
      right = intervals[i][1]
    }
    let next = intervals[i + 1]
    if (!next) {
      newArr.push([left, right])
      continue
    }
    if (next[0] <= right) {
      right = Math.max(right, intervals[i + 1][1])
      left = Math.min(left, intervals[i + 1][0])
    } else {
      newArr.push([left, right])
      left = -1
      right = -1
    }
  }

  return newArr
};

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let newArr = []
  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1])
    } else {
      newArr.push(prev)
      prev = cur
    }
  }
  newArr.push(prev)

  return newArr
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));