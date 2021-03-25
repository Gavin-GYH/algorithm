// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 输入：s = "aa"
// 输出："a"
// 解释："aba" 同样是符合题意的答案。

/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {*} s 字符串
 * 中心扩展法
 */
var longestPalindrome = function(s) {
  if(!s || s.length < 2){
      return s;
  }
  let start = 0,end = 0;
  let n = s.length;
  // 中心扩展法
  let centerExpend = (left,right) => {
      while(left >= 0 && right < n && s[left] == s[right]){
          left--;
          right++;
      }
      return right - left - 1;
  }
  for(let i = 0;i < n;i++){
      let len1 = centerExpend(i,i);
      let len2 = centerExpend(i,i+1);
      // 两种组合取最大回文串的长度
      let maxLen = Math.max(len1,len2);
      if(maxLen > end - start){
          // 更新最大回文串的首尾字符索引
          start = i - ((maxLen - 1) >> 1); // xxx >> 1，除于 2， 向下取整
          end = i + (maxLen >> 1);
      }
  }
  return s.substring(start,end+1);
};

