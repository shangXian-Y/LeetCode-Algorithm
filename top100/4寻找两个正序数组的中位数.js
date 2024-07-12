/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 暴力解法
var findMedianSortedArrays = function (nums1, nums2) {
  let allLength = nums1.length + nums2.length
  let fullNums = []
  let saveIndex = 0
  nums1.forEach((item) => {
    if (item > nums2[saveIndex]) {
      while (item > nums2[saveIndex]) {
        fullNums.push(nums2[saveIndex])
        saveIndex++
      }
    }
    fullNums.push(item)
  })
  if (saveIndex < nums2.length) {
    fullNums = [...fullNums, ...nums2.slice(saveIndex)]
  }
  if (allLength % 2 === 0) {
    return (fullNums[allLength / 2] + fullNums[(allLength / 2) - 1]) / 2
  } else {
    return fullNums[Math.ceil(allLength / 2) - 1]
  }
};

// 二分法解法
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    let temp = nums2
    nums2 = nums1
    nums1 = temp
  }
  let m = nums1.length
  let n = nums2.length
  let low = 0
  let high = m
  while (low <= high) {
    const i = low + Math.floor((high - low) / 2)
    const j = Math.floor((m + n + 1) / 2) - i

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1]
    const minRightA = i === m ? Infinity : nums1[i]
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1]
    const minRightB = j === n ? Infinity : nums2[j]

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
    } else if (maxLeftA > minRightB) {
      high = i - 1
    } else {
      low = low + 1
    }
  }
};