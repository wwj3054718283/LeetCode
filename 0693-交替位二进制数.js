/**
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    // 1.设置判断位
    let flag = true
    // 2.二进制转换
    let binaryNum = n.toString(2)
    // 3.遍历循环
    for (let index = 0; index < binaryNum.length-1; index++) {
        // 4.当前项 与 下一项 相等 返回false
        if (binaryNum[index] == binaryNum[index + 1]) return flag = false
    }
    return flag
};
console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
