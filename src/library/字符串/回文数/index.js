/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * 
 */

/**
 * @param {number} x
 * @return {boolean}
 * 
 * 利用数组反转， 在转成字符串
 */
 var isPalindrome = function(x) {
  var str = x.toString()
  if (x.length === 1) return true

  var result = str.split("").reverse().join("")

  if (str === result) return true

  return false
};