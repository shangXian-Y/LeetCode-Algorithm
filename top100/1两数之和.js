/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let leng = nums.length
  let back
  let map = new Map()
  map.set(nums[0], 0)
  for (let i = 1; i < leng; i++) {
    let needNum = target - nums[i]
    if (map.has(needNum)) {
      back = [map.get(needNum), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return back
};