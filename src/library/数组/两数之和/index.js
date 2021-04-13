
/**
 * https://leetcode-cn.com/problems/two-sum/  两数之和
 * 
 * @param {number[]} nums  数组
 * @param {number} target 目标值
 * @return {number[]}
 * 
 * 
 * 思路：
 * 1. 拿目标值减去对应的值，得到另个
 * 2. 利用map
 *    1. 如有另一个值没有在map中，就将另个值作为key，当前值的下标作为value，存在map中
 *    2. 如果有，就取出对应key的value, 加上当前值的下标index，return
 * 
 */
var twoSum = function(nums, target) {
  let len = nums.length, map = new Map()
  if (len < 2) {
      return []
  }

  for(let i = 0; i < len; i ++) {
      let temp = target - nums[i]

      if(!map.has(nums[i])) {
          map.set(temp, i)
      } else {
          return [map.get(nums[i]), i]
      }
  }
};