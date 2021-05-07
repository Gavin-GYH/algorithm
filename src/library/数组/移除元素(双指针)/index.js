/**
 * https://leetcode-cn.com/problems/remove-element/
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

 *  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * 思路： 直接用splice
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; ) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i ++
        }
    }

    return nums.length
};


/**
 * 
 * @param {*} nums 
 * @param {*} val 
 * @returns 
 * 
 * 双指针
 */
var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};