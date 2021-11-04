var deleteDuplicates = function (head) {
  if (!head) return head;

  let cur = head;
  while (cur.next) {
    //一直往下查找
    if (cur.val === cur.next.val) {
      //如果当前的值等于下一个的值
      cur.next = cur.next.next; //跳过下一个值,直接指向为下下一个值
    } else {
      cur = cur.next; //否则往后查找
    }
  }
  return head;
};
