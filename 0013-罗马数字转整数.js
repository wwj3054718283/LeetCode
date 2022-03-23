// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //  roman类
    var roman = function (str) {
        switch (str) {
            case "I": return 1
            case "V": return 5
            case "X": return 10
            case "L": return 50
            case "C": return 100
            case "D": return 500
            case "M": return 1000
            default: return -1
        }
    }
    // 特殊情况
    var special_circumstances = function (str) {
        switch (str) {
            case 'IV': return 4
            case 'IX': return 9
            case 'XL': return 40
            case 'XC': return 90
            case 'CD': return 400
            case 'CM': return 900
            default: return -1
        }
    }
    // 处理参数
    let arr = s.split('')
    // console.log(arr);
    let romanInt = 0
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] == "I" || arr[i] == "X" || arr[i] == "C") {
            num = special_circumstances([arr[i], arr[i + 1]].join(""))
            if (num == -1) {
                num = roman(arr[i])
                // console.log(i,"--",num);
            } else {
                i++
            }
        }else{
            num = roman(arr[i])
        }
        romanInt += num
    }
    return romanInt
};

// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));