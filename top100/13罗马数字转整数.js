// 13. 罗马数字转整数
// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，
// 例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
// 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let back = 0
  while (s.length > 0) {
    let now = getValue(s[0])
    let next = getValue(s[1])
    if (now < next) {
      back = back + next - now
      s = s.substring(2)
    } else {
      back = back + now
      s = s.substring(1)
    }
  }
  return back

  function getValue(s) {
    switch (s) {
      case "I": return 1;
      case "V": return 5;
      case "X": return 10;
      case "L": return 50;
      case "C": return 100;
      case "D": return 500;
      case "M": return 1000;
      default: return 0;
    }
  }
};

var romanToInt = function (s) {
  let luoMap = new Map()
  luoMap.set('I', 1);
  luoMap.set('V', 5);
  luoMap.set('X', 10);
  luoMap.set('L', 50);
  luoMap.set('C', 100);
  luoMap.set('D', 500);
  luoMap.set('M', 1000);
  let leng = s.length
  let ans = 0

  for (let i = 0; i < leng; ++i) {
    const value = luoMap.get(s[i]);
    if (i < leng - 1 && value < luoMap.get(s[i + 1])) {
      ans -= value;
    } else {
      ans += value;
    }
  }

  return ans;
}

console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))