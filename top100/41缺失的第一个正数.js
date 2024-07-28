// 41. 缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let leng = nums.length
  let cur = 0
  while (cur < leng) {
    const item = nums[cur]
    if (nums[cur] > 0 && nums[cur] <= leng && nums[cur] != cur + 1) {
      [nums[cur], nums[item - 1]] = [nums[item - 1], nums[cur]]
      if (item === nums[cur]) {
        cur++
      }
    } else {
      cur++
    }
  }

  for (let i = 0; i < leng; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return leng + 1
};

console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));
