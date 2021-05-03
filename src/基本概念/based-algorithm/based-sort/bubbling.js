/**
 * 最原始的
 * @param {*} arr 待排序的数组
 * [1,5,3,6,7,2,9,3]
 * 
 * O(n^2)
 */
let bubblingOne = function(arr) {
  let len = arr.length

  if(len === 1) {
    return arr
  }

  for(let i = 0; i < len - 1; i ++) {
    for (let j = 0; j < len - 1 - i; j ++) {
      if(arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}