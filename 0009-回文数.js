/**
 * 整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 从中间数隔开 判断两边数字是否相等
var isPalindrome = function (x) {
    var arr = x.toString().split('')
    if (arr[0] == '-') {
        return false
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i-1]) return false
    }
    return true
};
console.log(isPalindrome(121));

// 思路：将数字转为字符串数组，倒转字符串，让后转换为数字，对比原数与倒转数 判断是否相等
// var isPalindrome = function (x) {
//     var arr = x.toString().split('')
//     if (arr[0] == '-') {
//         return false
//     }
//     var rexarr = arr.reverse()
//     var rex = rexarr.join('')
//     if(x==rex){
//         return true
//     }
//     return false
// };