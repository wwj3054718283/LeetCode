var removeDuplicates = function (nums) {
    // 1.创建慢指针
    let i = 1
    // 2.创建快指针
    let j = 1
    // 3.开始循环
    for (let index = 1; index < nums.length; index++) {
        // 4.当慢指针指向元素值 等于 快指针 时
        if (nums[i-1] !== nums[j]) {
            // 4.1 慢指针 向 后移一位
            i++
            // 4.2 将满指针 指向元素值 改为 快指针指向元素值
            nums[i-1] = nums[j]
            // console.log("index:->",index,"i:-->",i);
        }
        j++
    }
    // 5.返回慢指针
    return i
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// var removeDuplicates = function (nums) {
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] == nums[index - 1]) {
//             nums.splice(index,1)
//             index--
//         }
//     }
//     return nums.length
// };
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// var removeDuplicates = function (nums) {
//     nums.sort()
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] == nums[index - 1]) {
//             nums.splice(index,1)
//             index--
//         }
//     }
//     return nums
// };
// console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));