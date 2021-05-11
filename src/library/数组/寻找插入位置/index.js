/**https://leetcode-cn.com/problems/search-insert-position/
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 * [1,3,5,6], 5   ==>  2
 * 
 * [1,3,5,6], 7   ===> 4
 *  
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 
 * 
 * 思路： 暴力法
 * 
 * 先考虑两种边界，就是0， 和  length - 1 的位置
 * 
 * 因为没有重复的元素，所以，遍历元素，如果等于直接return索引，如果不等于，就是介于两个数中间\
 * 
 * 时间复杂度： O(n)
 */
var searchInsert = function(nums, target) {
    if(nums[nums.length - 1] < target) {
        return nums.length
    }

    if(nums[0] > target) {
        return 0
    }

    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] === target) {
            return i
        }

        if(nums[i] < target && nums[i + 1] > target) {
            return i + 1
        }
        
    }
};

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * 
 * 
 * 二分查找法
 * 
 * 时间复杂度： O(log n)
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) / 2) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};
