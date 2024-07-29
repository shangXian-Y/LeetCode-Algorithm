// 48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
// https://leetcode.cn/problems/rotate-image/description/?envType=problem-list-v2&envId=2ckc81c&

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 先上下换 然后主对角线换
var rotate = function (matrix) {
  let leng = matrix.length

  // 水平翻转
  for (let i = 0; i < Math.floor(leng / 2); i++) {
    for (let j = 0; j < leng; j++) {
      [matrix[leng - i - 1][j], matrix[i][j]] = [matrix[i][j], matrix[leng - i - 1][j]]
    }
  }
  // 主对角线翻转
  for (let i = 0; i < leng; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));