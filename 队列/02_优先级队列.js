//封装优先级队列
function PriorityQueue() {
  //封装内部类,实现元素既有内容,也有优先级
  function PriorityElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  //封装属性
  this.item = [];
  //1.插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    //创建queuement对象
    const queueelment = new PriorityElement(element, priority);
    //判断队列是否为空,为空直接添加
    if (this.item.length === 0) {
      this.item.push(queueelment);
    } else {
      //比较优先级,数字大的往后放
      //判断是否添加
      let added = false;
      for (let i = 0; i < this.item.length; i++) {
        if (queueelment.priority < this.item[i].priority) {
          //判断数字小的添加在前面
          this.item.splice(i, 0, queueelment);
          //添加了改为true
          added = true;
          break;
        }
      }
      //循环没有添加,添加到队尾
      if (!added) {
        this.item.push(queueelment);
      }
    }
  };
  //2.dequeue 头部删除元素
  PriorityQueue.prototype.dequeue = function () {
    return this.item.shift();
  };
  //3.front 返回队列的第一个元素
  PriorityQueue.prototype.front = function () {
    return this.item[0];
  };
  //4.isEmpty 判断是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.item == 0;
  };
  //5.size 元素的个数
  PriorityQueue.prototype.size = function () {
    return this.item.length;
  };
  //6.toString 返回字符串
  PriorityQueue.prototype.toString = function () {
    let itemString = '';
    for (let i = 0; i < this.item.length; i++) {
      itemString += this.item[i].element + '_' + this.item[i].priority + ' ';
    }
    return itemString;
  };
}

const Pqueue = new PriorityQueue();

Pqueue.enqueue('asd', 150);
Pqueue.enqueue('dsf', 111);
Pqueue.enqueue('adsj', 100);
Pqueue.enqueue('hd', 163);
Pqueue.enqueue('saf', 95);
Pqueue.enqueue('hd', 63);

console.log(Pqueue);
console.log(Pqueue.dequeue());
console.log(Pqueue.size());
console.log(Pqueue.toString());
