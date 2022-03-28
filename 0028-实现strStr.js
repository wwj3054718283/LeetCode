/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    for (let i = 0; i + m <= n; i++) {
        let flag = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
// console.log(strStr("aaaaaaaaaa", "aaaa"));
// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));
// console.log(strStr('', ''));
// console.log(strStr('a', ''));
// console.log(strStr("mississippi", "issip"));