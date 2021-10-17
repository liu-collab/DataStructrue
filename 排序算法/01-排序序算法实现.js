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
  //交换数据
  ArryList.prototype.swap = function (m, n) {
    let temp = this.items[m];
    this.items[m] = this.items[n];
    this.items[n] = temp;
  };
  //排序算法
  //冒泡排序
  ArryList.prototype.bubbleSort = function () {
    const length = this.items.length;
    //两层循环比价大小
    //1.先倒序从最大的开始递减
    for (let j = length - 1; j >= 0; j--) {
      //依次比较数据大小进行交换位置
      for (let i = 0; i < j; i++) {
        //交换数据
        if (this.items[i] > this.items[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
  };
  //选择排序
  ArryList.prototype.selectionSort = function () {
    const length = this.items.length;

    for (let j = 0; j < length - 1; j++) {
      let min = j;
      //找出最小值
      for (let i = min + 1; i < length; i++) {
        if (this.items[min] > this.items[i]) {
          min = i;
        }
      }
      //找出最小值之后交换数据
      this.swap(min, j);
    }
  };
  //插入排序
  ArryList.prototype.insertionSort = function () {
    const length = this.items.length;

    for (let i = 0; i < length; i++) {
      //取出当前数据
      let temp = this.items[i];
      let j = i;
      //循环往后找出当前数据最小的位置进行交换
      while (this.items[j - 1] > temp && j > 0) {
        this.items[j] = this.items[j - 1];
        j--;
      }
      //交换数据
      this.items[j] = temp;
    }
  };
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
console.log(`原始数据:${list.toString()}`);
// list.bubbleSort();
// console.log(`冒泡排序:${list.toString()}`);
// list.selectionSort();
// console.log(`选择排序:${list.toString()}`);
list.insertionSort();
console.log(`插入排序${list.toString()}`);
