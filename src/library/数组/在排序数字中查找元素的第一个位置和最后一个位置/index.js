/**
 * 
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * nums = [5,7,7,8,8,10], target = 8  ==>  [3,4]
 * 
 * 边界：nums =[1] target = 1  ==> [0, 0]
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 暴力法
 */
 var searchRange = function(nums, target) {
  let len = nums.length

  let arr = [-1, -1]
  for(let i = 0; i < len; i ++) {
      if(nums[i] === target) {
          if (arr[0] === -1) {
              arr[0] = i
          } else {
              arr[1] = i
          }
      }
  }
  
  //表示只有一个位置，边界情况，那么返回的位置数组都是同一个位置。
  if(arr[0] !== -1 && arr[1] === -1) {
      arr[1] = arr[0]
  }

  return arr
};