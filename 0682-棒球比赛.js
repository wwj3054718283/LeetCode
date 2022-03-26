// 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
// 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：
// 整数 x - 表示本回合新获得分数 x
// "+" - 表示本回合新获得的得分是 前 两次得分 的总和。 题目数据保证记录此操作时前面总是存在两个有效的分数。
// "D" - 表示本回合新获得的得分是 前 一次得分 的两倍。 题目数据保证记录此操作时前面总是存在一个有效的分数。
// "C" - 表示 前 一次得分 无效 ，将其从记录中 移除 。题目数据保证记录此操作时前面总是存在一个有效的分数。
// 请你返回记录中所有得分的总和。
var calPoints = function (ops) {
    let result = []
    for (let index = 0; index < ops.length; index++) {
        if (ops[index] == "+") {
            result.push(Number(result[result.length - 1] + result[result.length - 2]))
            // console.log("+:-->", result);
        } else if (ops[index] == "D") {
            result.push(Number(result[result.length - 1] * 2))
            // console.log("D:-->", result);
        } else if (ops[index] == "C") {
            result.pop()
            // console.log("C:-->", result);
        } else {
            result.push(Number(ops[index]))
            // console.log(ops[index], ":-->", result);
        }
    }
    let res = 0
    result.forEach(x => {
        res += x
    })
    return res
};
console.log(calPoints(["5","2","C","D","+"]));
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));