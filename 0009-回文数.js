/**
 * 整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var arr = x.toString().split('')
    if (arr[0] == '-') {
        return false
    }
    var rexarr = arr.reverse()
    var rex = rexarr.join('')
    if(x==rex){
        return true
    }
    return false
};

console.log(isPalindrome(121));