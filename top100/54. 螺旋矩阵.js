// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

/**
* @param {number[][]} matrix
* @return {number[]}
*/
// 思路：移动坐标  标记四角  遇到转向
var spiralOrder = function (matrix) {
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let arr = []

  while (true) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[left][i])
    }
    top++
    if (top > bottom) break
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right])
    }
    right--
    if (right < left) break
    for (let i = right; i >= left; i--) {
      arr.push(matrix[bottom][i])
    }
    bottom--
    if (bottom < top) break
    for (let i = bottom; i >= top; i--) {
      arr.push(matrix[i][left])
    }
    left++
    if (left > right) break
  }

  return arr
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));