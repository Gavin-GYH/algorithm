
/**
 * https://leetcode-cn.com/problems/add-two-numbers/submissions/ 
 * 逆序的链表相加
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, temp = null, flag = 0

    while(l1 || l2) {
        let n1 = l1 ? l1.val : 0
        let n2 = l2 ? l2.val : 0

        let sum = n1 + n2 + flag

        if(!head) {
            head = temp = new ListNode(sum % 10)
        } else {
            temp.next = new ListNode(sum % 10)
            temp = temp.next
        }

        flag = Math.floor(sum / 10)

        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }
    }

    if(flag > 0) {
        temp.next = new ListNode(flag)
    }

    return head
};

/**
 * 1. 主要是头节点和用于移动的节点
 * 2. 遍历链表1和链表2的阶段
 *      while  并且 自动往后递进： 如一层循环后,l1如果存在： 就讲l1往后移动一个节点： l1 = l1.next;   l2类似
 * 
 * 3. 注意随后的进位： flag， 有可能是大于零的，此时需要在最后新增一个节点
 */