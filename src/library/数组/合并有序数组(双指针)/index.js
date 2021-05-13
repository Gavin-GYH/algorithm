/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 * 
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3    ==>   [1,2,2,3,5,6]
 * 
 * 
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * splice方法
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    
    nums1.splice(m, 0, ...nums2)

    return nums1.sort((a, b) => a - b)
};


/**
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 思路： 双指针
 * 
 * 两个指针，分别指向两个数组，然后拷贝一份nums1的数组，遍历两个数组，比较大小，填充进nums1。
 * 
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2];
            p2 ++
        } else if (p2 === n) {
            cur = nums1[p1];
            p1 ++
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1];
            p1 ++
        } else {
            cur = nums2[p2];
            p2 ++
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < m + n; ++i) {
        nums1[i] = sorted[i];
    }
};