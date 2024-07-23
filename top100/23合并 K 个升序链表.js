// 23. 合并 K 个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 思想: 每2个链表合并 然后逐渐和成一个
var mergeKLists = function (lists) {
  function dfs(i, j) {
    const m = j - i;
    if (m === 0) return null;
    if (m === 1) return lists[i];
    const left = dfs(i, i + (m >> 1));
    const right = dfs(i + (m >> 1), j);
    return mergeTwo(left, right);
  }
  return dfs(0, lists.length);
};

function mergeTwo(list1, list2) {
  if (list1 == null) {
    return list2
  }
  if (list2 == null) {
    return list1
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwo(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwo(list1, list2.next)
    return list2
  }
}