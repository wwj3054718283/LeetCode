/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return ''
    }
    if (strs.length == 1) {
        return strs[0]
    }
    let arr = []
    let arrstr = []
    let str
    strs.forEach(e => {
        arr.push(e.split(''))
    });
    arr = arr.sort((a, b) => {
        return a.length - b.length
    })
    arr.forEach(x => {
        x = x.splice(arr[0].length, x.length,)
    })
    let a = arr[0]
    arr = arr.splice(1)
    // console.log('a:', a);
    arr.forEach(x => {
        if (x[0] != a[0]) {
            return ""
        }
    })
    let xstr = ''
    let astr = ''
    // console.log(arr);
    // console.log(arr.length-1);
    while (a.length != 0) {
        for (let i = 0; i < arr.length; i++) {
            xstr = arr[i].join('')
            astr = a.join('')
            // console.log("for----------->", xstr, astr,i);
            if (xstr != astr) {
                // console.log("if-------->", xstr, astr,i);
                a.pop()
                arr.map((x) => x.pop())
                break
            } else {
                // console.log("else------------>", xstr, astr,i);
                if (i == arr.length - 1){
                    return astr
                }
            }
        }
    }
    str = a.join('')
    return str
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["abab", "aba", "abc"]));
// console.log(longestCommonPrefix(["reflower","flow","flight"]));

// var longestCommonPrefix = function (strs) {
//     let arr = []
//     let arrstr = []
//     let str
//     strs.forEach(e => {
//         arr.push(e.split(''))
//     });
//     arr = arr.sort((a, b) => {
//         // console.log('a:', a.length, '-----', 'b:', b.length);
//         return a.length - b.length
//     })
//     arr.forEach(x => {
//         x = x.splice(arr[0].length, x.length,)
//     })
//     let a = arr[0]
//     // console.log("a",a);
//     let isJ = false
//     arr = arr.splice(1)
//     arr.forEach(x => {
//         // console.log("x",x);
//         // console.log(x[0] != a[0]);
//         if (x[0] != a[0]) {
//             return ""
//         }
//     })
//     while (a.length != 0) {
//         let arrinx = a.length
//         arr.forEach(x => {
//             console.log("x是否弹出",isJ);
//             if (isJ) {
//                 x.pop()
//             }
//             let xstr = x.join('')
//             let astr = a.join('')
//             console.log("if外", xstr, astr);
//             if (xstr != astr) {
//                 console.log("if内部", xstr, astr);
//                 a.pop()
//                 arrinx--
//                 isJ = true
//             } else {
//                 console.log("else内部", xstr, astr, "arr次数", arrinx);
//                 isj = false
//             }
//         })
//         console.log('------------');
//         if (arrinx == arr.length) {
//             break
//         }
//     }
//     str = a.join('')
//     return str
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));
