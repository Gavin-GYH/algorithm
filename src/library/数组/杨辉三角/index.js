/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 
 * 定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和
 * 
 * 暴力法： 直接一个循环生成。时间复杂度O(n)
 * 
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let result = [], temArr = [] // 保存上一个数组，做下一个数组生成的基础。

  for(let i = 1; i <= numRows; i ++) {
      let j = i - 1
      let arr = []
      while(j >= 0) {
          let value = temArr[j - 1] + temArr[j]

          if (!value) {
              value = 1
          }

          arr.unshift(value)
          j --
      }

      result.push(arr)
      temArr = arr
  }

  return result
};