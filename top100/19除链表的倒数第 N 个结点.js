// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 快速先诺n次  然后开始同步诺  快的诺到结尾时  慢的next就是要删除的
var removeNthFromEnd = function (head, n) {
  let slow = head
  let fast = head
  while (n--) {
    fast = fast.next
  }
  if (!fast) {
    return head.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next

  return head
};

