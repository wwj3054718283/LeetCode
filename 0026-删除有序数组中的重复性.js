var removeDuplicates = function (nums) {
    nums.sort()
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == nums[index - 1]) {
            nums.splice(index,1)
            index--
        }
    }
    return nums
};
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));