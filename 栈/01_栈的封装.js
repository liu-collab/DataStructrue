//栈类
function Stack() {
  //栈的属性
  this.item = [];
  //栈的操作
  //1.进栈
  Stack.prototype.push = function (element) {
    this.item.push(element);
  };
  //2.出栈
  Stack.prototype.pop = function () {
    return this.item.pop();
  };
  //3.查看栈,返回栈顶元素
  Stack.prototype.peek = function () {
    return this.item[this.item.length - 1];
  };
  //4.判断栈元素是否为空
  Stack.prototype.isEmpty = function () {
    return this.item.length == 0;
  };
  //5.返回栈元素的个数
  Stack.prototype.size = function () {
    return this.item.length;
  };
  //6.toString
  Stack.prototype.toString = function () {
    let resultString = '';
    for (let i = 0; i < this.item.length; i++) {
      resultString += this.item[i] + ' ';
    }
    return resultString;
  };
}

//栈的使用
const s = new Stack();

s.push(10);
s.push(50);
s.push(30);
console.log(s);
console.log(s.peek());
s.pop();
console.log(s);
console.log(s.isEmpty());
console.log(s.toString());

//十进制转二进制
function dec2bin(decNumber) {
  //创建栈
  const stack = new Stack();
  //循环取余 取模
  while (decNumber > 0) {
    //取余放入到栈中
    stack.push(decNumber % 2);
    //取模
    decNumber = Math.floor(decNumber / 2);
  }
  //栈中取出二进制
  let binaryString = '';
  //栈不为空循环
  while (!stack.isEmpty()) {
    //出栈
    binaryString += stack.pop();
  }
  return binaryString;
}

const num = dec2bin(100);
console.log(num);
