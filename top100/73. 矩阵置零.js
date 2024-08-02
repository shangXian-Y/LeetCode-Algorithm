// 73. 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
// 遍历标记法
var setZeroes = function (matrix) {
  let hang = []
  let lie = []

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          hang.push(i)
          lie.push(j)
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (hang.includes(i) || lie.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
};



// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));
