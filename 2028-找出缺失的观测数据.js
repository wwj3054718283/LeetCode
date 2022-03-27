// 现有一份 n + m 次投掷单个 六面 骰子的观测数据，骰子的每个面从 1 到 6 编号。观测数据中缺失了 n 份，你手上只拿到剩余 m 次投掷的数据。幸好你有之前计算过的这 n + m 次投掷数据的 平均值 。
// 给你一个长度为 m 的整数数组 rolls ，其中 rolls[i] 是第 i 次观测的值。同时给你两个整数 mean 和 n 。
// 返回一个长度为 n 的数组，包含所有缺失的观测数据，且满足这 n + m 次投掷的 平均值 是 mean 。如果存在多组符合要求的答案，只需要返回其中任意一组即可。如果不存在答案，返回一个空数组。
// k 个数字的 平均值 为这些数字求和后再除以 k 。
// 注意 mean 是一个整数，所以 n + m 次投掷的总和需要被 n + m 整除。
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    // 1.创建 长度为 n 的数组
    let ans = new Array(n)
    // 2. 满足每个元素值 至少大于0 （骰子1-6）
    for (let index = 0; index < n; index++) {
        ans[index] = 1
    }
    // 3. m次 投掷 观测的所有数据和
    let rsum = 0
    // 4. 总投掷 次数 m + n
    let alen = rolls.length + n
    // 5. 总投掷 数据和
    let asum = mean * alen
    // 6. 计算 m次 投掷数据和
    for (let index = 0; index < rolls.length; index++) {
        rsum = rsum + rolls[index]
    }
    // 7. n次 投掷 数据和
    let nsum = asum - rsum
    // 8. 若n次 投掷数据和 大于 n次投掷每次都为6总和 或者 小于n的情况 的情况 直接返回[]
    if (nsum > n * 6 ) {
        return []
    }
    // 9. 由于 第二步 设置了每次投掷 数据至少=1 所以n次投掷数据总和需要减去n
    nsum -= n
    if (nsum < 0 ) {
        return []
    }
    console.log('nsum->', nsum, "n-->", n);
    // 10. 填入数据
    for (let index = 0; index < n; index++) {
        // 11. 当nsum大于5时，将数组的第一次数据补满到 6
        console.log(index, "次投掷:-->", ans[index], nsum);
        if (nsum >= 5) {
            ans[index] = ans[index] + 5
            nsum -= 5
        } else {
            // 12. 当nsum小于5时 将剩下的nsum数据全加到当前投掷数据中
            ans[index] = ans[index] + nsum
            nsum = 0
        }
        console.log(index, "次投掷:-->", ans[index], nsum);
    }
    // 13.返回结果数组
    return ans
};
console.log(missingRolls([1,1,1,1,1,1,1,1,1,1], 1, 1));
// console.log(missingRolls([4,2,2,5,4,5,4,5,3,3,6,1,2,4,2,1,6,5,4,2,3,4,2,3,3,5,4,1,4,4,5,3,6,1,5,2,3,3,6,1,6,4,1,3], 2, 53));
// console.log(missingRolls([6, 3, 4, 3, 5, 3], 1, 6));
// console.log(missingRolls([3, 2, 4, 3], 4, 2));
// console.log(missingRolls([1, 5, 6], 3, 4));
// console.log(missingRolls([1, 2, 3, 4], 6, 4));
// console.log(missingRolls([1], 3, 1));