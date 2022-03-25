/**
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 */
var trailingZeroes = function (n) {
    if (n == 0) {
        return n
    }
    let total = BigInt(1)
    let len = Math.floor(n / 2)
    let index = 0
    if (n % 2 != 0) {
        total = n
    }
    while (index != len) {
        total = total * BigInt((index + 1)) * BigInt((len * 2 - index))
        index++
    }
    let result = 0
    let str = total.toString()
    let sarr = str.split('')
    console.log(total);
    for (let index = sarr.length - 1; index > 0; index--) {
        // console.log(sarr[index]);
        if (sarr[index] == 0) {
            result++
        } else {
            return result
        }
    }
    return result
};

console.log(trailingZeroes(30));


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

// console.log(trailingZeroes(30));