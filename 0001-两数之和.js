/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 数组最后一位数 下标
    var len = nums.length - 1
    // 返回的两数和 两数 下标
    var res = []
    // 目标与下标len值 的 差
    var _num = 0
    // 存在 差值 的 下标
    var onum = 0
    // console.log(arr);
    while (1) {
        _num = target - nums[len]
        onum = nums.indexOf(_num)
        // console.log(onum);
        if (onum > -1 && len != onum) {
            res.push(onum, len)
            return res
        } else {
            len--
            if (len == 0) {
                return '错误，未找到'
            }
        }
    }
};

// twoSum([2, 7, 11, 15], 9)
// 示例 1
// console.log(twoSum([2, 7, 11, 15], 9));
// 示例 2
// console.log(twoSum([3,2,4],6));
// 示例 3
// console.log(twoSum([3, 3], 6));

console.log(twoSum([2, 4, 11, 3], 6));
// console.log(Math.floor(9/2));

// var twoSum = function (nums, target) {
//     while (1) {
//         var n1 = randomInt(0, target)
//         var n2 = randomInt(0, target, n1)
//         if (nums[n1] + nums[n2] == target) {
//             return [n1, n2].sort()
//         }
//     }
// };

// var randomInt = function (min, max, forbid) {
//     var n = Math.floor(Math.random() * max)
//     while (forbid) {
//         if (n != forbid) {
//             return n
//         }
//         n = Math.floor(Math.random() * max)
//     }
//     return n
// }