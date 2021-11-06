var addTwoNumbers = function (l1, l2) {
  let addOne = 0; //保存进位
  let sum = new ListNode('0'); //相加的和用节点保存
  let head = sum; //定义和的head
  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0; //取出l1节点中的值
    let val2 = l2 !== null ? l2.val : 0;
    let order = val1 + val2 + addOne; //将相对应的节点值进行相加，上一次进位的也要相加
    addOne = order >= 10 ? 1 : 0; //判断相加的和是否要进位
    sum.next = new ListNode(order % 10); //sum的next指向上一步的结果 ，需要对10做一个取余，避免节点的值大于10
    sum = sum.next; //sum继续往下走
    if (l1) l1 = l1.next; //l1有值的话继续往下走
    if (l2) l2 = l2.next;
  }
  return head.next; //返回sum的链表
};
