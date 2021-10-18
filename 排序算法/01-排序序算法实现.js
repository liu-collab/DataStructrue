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
      //j记录的是当前位置
      let j = i;
      //循环往后找出比当前数据小的位置进行交换
      while (this.items[j - 1] > temp && j > 0) {
        this.items[j] = this.items[j - 1];
        //j递减,一直往后找
        j--;
      }
      //当找到最小数据的位置,将当前数据赋值给最小位置
      this.items[j] = temp;
    }
  };
  //希尔排序
  ArryList.prototype.shellSort = function () {
    const length = this.items.length;
    //初始化间隔gap
    let gap = Math.floor(length / 2);
    //在间隔小于1退出循环
    while (gap >= 1) {
      //从间隔开始依次遍历
      for (let i = gap; i < length; i++) {
        //取出当前的间隔的数据
        let temp = this.items[i];
        var j = i;
        //循环判断当前的数据是否大于间隔前一个数据(往间隔的后面找,将小的数据往后面放)
        //并且当前的序号不能大于当前间隔的前一个
        while (this.items[j - gap] > temp && j > gap - 1) {
          //大于的话,将当前数据赋值为间隔前一个数据
          this.items[j] = this.items[j - gap];
          //每次递减一个间隔
          j -= gap;
        }
        //将找的最小位置赋值当前数据
        this.items[j] = temp;
      }
      //间隔取每次间隔的一半
      gap = Math.floor(gap / 2);
    }
  };
  //快速排序
  //1.先找出枢纽，一般取前中后三个数据的中位数
  //三个数据进行交换位置,从左到右进行比较,最坏需要三次比较
  ArryList.prototype.median = function (left, right) {
    const center = Math.floor((left + right) / 2);
    //console.log(left, right, center);
    // console.log(this.items[left], this.items[center], this.items[right]);
    //左边大换到中间
    if (this.items[left] > this.items[center]) {
      this.swap(left, center);
    }
    //  console.log(this.items[left], this.items[center], this.items[right]);
    //中间大于右边调换位置
    if (this.items[center] > this.items[right]) {
      this.swap(center, right);
    }
    // console.log(this.items[left], this.items[center], this.items[right]);
    //左边大于右边调换位置
    // if (this.items[left] > this.items[right]) {
    //   this.swap(left, right);
    // }
    //左边大换到中间
    if (this.items[left] > this.items[center]) {
      this.swap(left, center);
    }
    //  console.log(this.items[left], this.items[center], this.items[right]);
    //将中的数据换到倒数第二个位置
    this.swap(center, right - 1);
    // console.log(this.items[center]);
    // console.log(this.items[right - 2]);
    return this.items[right - 1];
  };

  ArryList.prototype.quickSort = function () {
    this.quick(0, this.items.length - 1);
  };
  ArryList.prototype.quick = function (left, right) {
    //1.结束条件
    if (left >= right) return false;
    //2.找出枢纽
    const pivot = this.median(left, right);
    // console.log(pivot);
    //3.定义变量
    //
    let i = left;
    let j = right - 1;
    //4.未知退出循环,先进行死循环,在内部退出循环
    while (true) {
      while (this.items[++i] < pivot) {}
      while (this.items[--j > pivot]) {}
      if (i < j) {
        this.swap(i, j);
      } else {
        break;
      }
    }
    //5.
    this.swap(i, right - 1);
    //6.
    this.quick(left, i - 1);
    this.quick(i + 1, right);
  };
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
// list.insertionSort();
// console.log(`插入排序${list.toString()}`);

// list.shellSort();
// console.log(`希尔排序:${list.toString()}`);
list.quickSort();
console.log(`快速排序:${list.toString()}`);
