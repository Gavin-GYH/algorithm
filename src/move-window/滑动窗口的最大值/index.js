/**
 * letcode 地址： https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * 
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 
 * 例子
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7] 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var resultArr = []
    var tempArr = []
    for(var i = 0; i < nums.length;) {
        if(tempArr.length < 3) {
            tempArr.push(nums[i])
            i ++
        } else {
            var max = Math.max(...tempArr)
            resultArr.push(max)
            tempArr.shift()
        }
    }

    return resultArr
};