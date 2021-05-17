/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * intervals = [[1,4],[4,5]]   =>  [[1,5]]
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * 思路： 先排序，后用splice在数组上直接操作
 */
 var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  for(let i = 0; i < intervals.length - 1; i ++) {
      let start = intervals[i][1]
      let end = intervals[i + 1][0]

      //有区间重合
      if(start >= end) {
          let item = [...intervals[i], ...intervals[i + 1]]
          let data = [Math.min(...item),  Math.max(...item)]
          
          intervals.splice(i, 2, data)
          i --
      }
  }

  return intervals
};