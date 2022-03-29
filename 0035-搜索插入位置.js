/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1.循环遍历法
// var searchInsert = function (nums, target) {
//     if (target > nums[nums.length - 1]) {
//         return nums.length
//     }
//     if(target < nums[0]){
//         return 0
//     }
//     for (let index = 0; index < nums.length; index++) {
//         // console.log(nums[index], target);
//         if (nums[index] === target) {
//             return index
//         }
//         if (nums[index] < target && target < nums[index + 1]) {
//             return index + 1
//         }
//     }
// };

// 2.二分法
var searchInsert = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while(l <= r) {
        let mid = l + ((r - l) >> 1)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        }
    }
    return l
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));