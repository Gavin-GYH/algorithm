/**
 * 
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 * 
 *
 * 思路： 双指针
 * 
 * 注意的点：
 *  1. 移动值小的指针(也就是容器高度小的一边)
 *  2. 容量计算的方法：min(left, right) * (right - left)
 * 
 * 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  // 水容量算法： min(left, right) * (right - left)
  // 正方形容器面积计算：高(以短板为主) * 长
  let left = 0, right = height.length - 1
  let result = []

  while(left < right) {
      let h = Math.min(height[left], height[right])
      let w = right - left

      result.push(h * w)
      
      // 注意永远都是移动最小的，因为如果移动最大的，会导致 min(left, right) * (right - left) 越来越小
      if (height[left] < height[right]) {
          left ++
      } else {
          right --
      }
  }

  return Math.max(...result)
};