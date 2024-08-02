// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let all = []
  all[0] = 1
  all[1] = 1
  for (let i = 2; i <= n; i++) {
    all[i] = all[i - 1] + all[i - 2]
  }

  return all[n]
};

console.log(climbStairs(3));