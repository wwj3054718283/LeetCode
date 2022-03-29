/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *      1.左括号必须用相同类型的右括号闭合。
 *      2.左括号必须以正确的顺序闭合。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    s = s.split('')
    if (s[0] == ')' || s[0] == '}' || s[0] == ']') {
        return false
    } else {
        while (s.length > 0) {
            for (let i = 0; i < s.length; i++) {
                // console.log("i:-->", i, "s[i]:-->", s[i]);
                if (s[i] == '(' && s[i + 1] == ')' || s[i] == '[' && s[i + 1] == ']' || s[i] == '{' && s[i + 1] == '}') {
                    s.splice(i, 2)
                    break
                } else if (i == s.length - 1) {
                    return false
                }
            }
            if (s.length == 0) { return true }
        }
    }
};
// console.log(isValid("{[]}"));