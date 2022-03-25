/**
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 */
/**
 * n! 尾零的数量即为 n! 中因子 10 的个数，而 10=2×5，因此转换成求 n! 中质因子 2 的个数和质因子 5 的个数的较小值。
 * 由于质因子 5 的个数不会大于质因子 2 的个数，我们可以仅考虑质因子 5 的个数。
 * 而 n! 中质因子 5 的个数等于 [1,n]的每个数的质因子 5 的个数之和，我们可以通过遍历 [1,n][1,n] 的所有 5 的倍数求出。
*/

var trailingZeroes = function(n) {
    return Math.floor(n/5)+Math.floor(n/25)+Math.floor(n/125)+Math.floor(n/625)+Math.floor(n/3125);
};
console.log(trailingZeroes(200));


// es2020新加入 BigInt解法
// var trailingZeroes = function (n) {
//     if (n == 0) {
//         return n
//     }
//     let total = BigInt(1)
//     let len = Math.floor(n / 2)
//     let index = 0
//     if (n % 2 != 0) {
//         total = n
//     }
//     while (index != len) {
//         total = total * BigInt((index + 1)) * BigInt((len * 2 - index))
//         index++
//     }
//     let result = 0
//     let str = total.toString()
//     let sarr = str.split('')
//     console.log(total);
//     for (let index = sarr.length - 1; index > 0; index--) {
//         // console.log(sarr[index]);
//         if (sarr[index] == 0) {
//             result++
//         } else {
//             return result
//         }
//     }
//     return result
// };

// console.log(trailingZeroes(1000));