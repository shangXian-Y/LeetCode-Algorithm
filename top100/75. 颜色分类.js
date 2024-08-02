// 75. 颜色分类
// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库内置的 sort 函数的情况下解决这个问题。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = -1
  let blue = nums.length
  let i = 0

  while (i < blue) {
    if (nums[i] == 0) {
      [nums[i], nums[red + 1]] = [nums[red + 1], nums[i]]
      red++
      i++
    } else if (nums[i] == 2) {
      [nums[i], nums[blue - 1]] = [nums[blue - 1], nums[i]]
      blue--
    } else if (nums[i] == 1) {
      i++
    }
  }

  return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([2, 0, 1]));