//封装列表类

function ArryList() {
  //属性
  this.items = [];

  //方法
  //插入数据方法
  ArryList.prototype.insert = function (value) {
    this.items.push(value);
  };
  //字符串输出方法

  ArryList.prototype.toString = function () {
    return this.items.join(' ');
  };
  //排序算法
  //冒泡排序

  //选择排序

  //插入排序

  //希尔排序

  //快速排序
}

//测试数据
const list = new ArryList();

list.insert(88);
list.insert(66);
list.insert(35);
list.insert(42);
list.insert(12);
list.insert(43);
list.insert(13);
console.log(list.toString());
