//封装队列
function Queue() {
  //使用数组作为队列的结构
  this.item = [];
  //队列的操作
  //1.enqueue 尾部添加元素
  Queue.prototype.enqueue = function (element) {
    this.item.push(element);
  };
  //2.dequeue 头部删除元素
  Queue.prototype.dequeue = function () {
    return this.item.shift();
  };
  //3.front 返回队列的第一个元素
  Queue.prototype.front = function () {
    return this.item[0];
  };
  //4.isEmpty 判断是否为空
  Queue.prototype.isEmpty = function () {
    return this.item == 0;
  };
  //5.size 元素的个数
  Queue.prototype.size = function () {
    return this.item.length;
  };
  //6.toString 返回字符串
  Queue.prototype.toString = function () {
    let itemString = '';
    for (let i = 0; i < this.item.length; i++) {
      itemString += this.item[i] + ' ';
    }
    return itemString;
  };
}
