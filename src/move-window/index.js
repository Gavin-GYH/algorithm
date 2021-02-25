/**
 * 题目：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s 字符串
 * @return {number} 返回长度
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0

    if (s.length === 1) return 1

    var arr = [], max = 0;

    for(var i = 0; i < s.length; i ++) {
        const item = s.charAt(i)

        // 判断当前的字符有没有在数字里面，有就将数组从开始位置到该位置截取掉
        if (arr.includes(item)) {
            const ind = arr.indexOf(item)
            arr.splice(0, ind + 1)
        }

        //在数组中新增一个字符
        arr.push(s.charAt(i))

        //始终对比数组长度和上次的最大长度，取最大值
        max = Math.max(arr.length, max)
    }

    return max
};