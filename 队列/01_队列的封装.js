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

//队列使用
const queue = new Queue();
// queue.enqueue(50);
// queue.enqueue(60);
// queue.enqueue(10);
// queue.enqueue(30);
// queue.enqueue(80);
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.front());
// console.log(queue);
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.toString());

//击鼓传花
function foo(nameList, num) {
  //1.创建队列
  const queue = new Queue();
  //2.将名字加入队列
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  //3.开始数数
  //留最后一人
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      //将没有数到num这个数字的人加入到队尾
      //先在队列头部删除在加入队列尾部
      queue.enqueue(queue.dequeue());
    }
    //将数到数字的人删除队列
    queue.dequeue();
  }

  //4.取出最后一人
  const endname = queue.front();
  const index = nameList.indexOf(endname);
  const last = [endname, index];
  return last;
}

const nameList = ['asd', 'fsa', 'sd', 'ew', 'fs', 'das'];
const res = foo(nameList, 5);
console.log(res);
