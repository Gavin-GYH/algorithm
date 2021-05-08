/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 *    左括号必须用相同类型的右括号闭合
 *    左括号必须以正确的顺序闭合。
 * 
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  if(s.length % 2 === 1) return false

  let map = {
      ')': '(',
      ']': '[',
      '}': '{'
  }

  let arr = []
  for(let i = 0; i < s.length; i ++) {
      if(map[s[i]]) {
          if(!arr.length || map[s[i]] !== arr[arr.length - 1]) return false

          arr.pop()
      } else {
          arr.push(s[i])
      }
  }

  return !arr.length
};

/**
 * 思路两个点：
 *  1. 长度必须为偶数，
 *  2. map的定义，巧妙的地方
 * 
 * 其他就是入栈 出栈操作
 */