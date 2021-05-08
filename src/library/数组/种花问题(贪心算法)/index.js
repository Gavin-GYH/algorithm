/**https://leetcode-cn.com/problems/can-place-flowers/
 * 
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。
 * 可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 
 * 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，
 * 能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
 * 
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let num = 0
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        return 1 >= n   //边界情况
    }

    for(let i = 0; i < flowerbed.length; i ++) {
        let left = i - 1, right = i + 1
        if ((flowerbed[i] === 0 && i === 0 && flowerbed[right] === 0) || (flowerbed[i] === 0 && i === flowerbed.length - 1 && flowerbed[left] === 0)) {
            num ++
            flowerbed[i] = 1
        } else if (flowerbed[i] === 0 && flowerbed[left] === 0 && flowerbed[right] === 0) {
            num ++
            flowerbed[i] = 1
        }
    }

    return num >= n //边界情况，其实不用 ===， 只要能种的大于需要种的，就可以种
};


/**
 * 
 * @param {*} flowerbed 
 * @param {*} n 
 * 
 * 贪心算法(尽可能多)
 * 
 * 判断能否在不打破种植规则的情况下在花坛内种入 nn 朵花，从贪心的角度考虑，
 * 应该在不打破种植规则的情况下种入尽可能多的花，然后判断可以种入的花的最多数量是否大于或等于 nn。
 */
var canPlaceFlowers = function (flowerbed, n) {
    for(let i = 0 ; i < flowerbed.length; i ++) {
        if(flowerbed[i] !== 1 && flowerbed[i -1] !== 1 && flowerbed[i + 1] !== 1) {
            n --
            i ++
        }
    }

    return n <= 0
}