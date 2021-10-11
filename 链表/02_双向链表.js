//双向链表的封装
function DoublyLinkList() {
  //内部节点类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  //属性
  this.head = null;
  this.tail = null;
  this.length = 0;
  //链表方法
  // 1- append(element) 向链尾添加新的元素
  DoublyLinkList.prototype.append = function (data) {
    const newNode = new Node(data);
    //判断是否为第一个节点
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  };
  // 2- insert(element,position) 特定位置插入元素
  DoublyLinkList.prototype.insert = function (data, position) {
    //边界情况判断
    if (position < 0 || position > this.length) return false;
    //创建新的节点
    const newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position == 0) {
        //插入到一个位置
        this.head.prev = newNode; //this.head表示的是原来的第一个节点
        newNode.next = this.head; //
        this.head = newNode; //新的节点插入到一个节点
      } else if (position == this.length) {
        //插入到尾部
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        //修改指向
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
  };
  // 3- remove(element) 删除元素
  DoublyLinkList.prototype.remove = function (data) {
    //删除匹配到的第一个元素
    // const position = this.indexOf(data);
    // this.removeAt(position);

    //删除所有匹配到的元素
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        index++;
      }
      current = current.next;
    }
    this.length -= index;
    return -1;
  };
  // 4- removeAt(position) 删除特定位置的元素
  DoublyLinkList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null;
    //长度只有一的情况
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        //删除第一个元素
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length) {
        //删除最后一个元素
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        //中间的情况
        //   current = this.head;
        let index = 0;
        const num = position / this.length;
        if (num <= 0.5) {
          //从前往后找
          while (index++ < position) {
            current = current.next;
          }
        } else {
          //从后往前找
          current = this.tail;
          index = this.length;
          while (index-- > position) {
            current = current.prev;
          }
        }
        //找到元素改变指向
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    return current.data;
  };
  // 5- update(position,element) 修改特定位置的元素
  DoublyLinkList.prototype.update = function (data, position) {
    if (position < 0 || position >= this.length) return null;
    const num = position / this.length;
    let current = null;
    let index = 0;
    if (num <= 0.5) {
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      index = this.length;
      while (index-- > position) {
        current = current.prev;
      }
    }
    current.data = data;
  };
  // 6- get(position) 查找特定位置的元素
  DoublyLinkList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return;
    const num = position / this.length;
    if (num <= 0.5) {
      let index = 0;
      let current = this.head;
      while (index++ < position) {
        current = current.next;
      }
      return current.data;
    } else {
      let index = this.length;
      let current = this.tail;

      while (index-- > position) {
        current = current.prev;
      }
      return current.data;
    }
  };
  // 7- indexOf(element) 返回元素在链表中的索引,没有返回-1
  DoublyLinkList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) {
        return index;
      }
      index += 1;
      current = current.next;
    }
    return -1;
  };
  // 8- isEmpty 判断链表是否为空
  DoublyLinkList.prototype.isEmpty = function () {
    return this.length === 0;
  };
  // 9- size 返回链表的元素个数
  DoublyLinkList.prototype.size = function () {
    return this.length;
  };
  // 10- toString 将链表的内容以字符串返回
  DoublyLinkList.prototype.toString = function () {
    return this.forwardString();
  };
  // 11- forwardString 返回正向遍历的节点字符串形式
  DoublyLinkList.prototype.forwardString = function () {
    let current = this.head;
    let resString = '';
    while (current) {
      resString += current.data + ' ';
      current = current.next;
    }
    return resString;
  };
  // 12- backwordString 返回反向遍历的节点字符串形式
  DoublyLinkList.prototype.backwardString = function () {
    let current = this.tail;
    let resString = '';
    while (current) {
      resString += current.data + ' ';
      current = current.prev;
    }
    return resString;
  };
}

//test
const DList = new DoublyLinkList();

DList.append('asd');
DList.append('sda');
DList.append('gs');
DList.append('gb');
DList.append('sda');
DList.append('yt');
// console.log(DList.forwardString());
// console.log(DList.toString());
// console.log(DList.backwardString());
// DList.insert('adsf', 2);
// console.log(DList.toString());
// console.log(DList.get(2));
// console.log(DList.get(4));
// console.log(DList.indexOf('gb'));
// DList.update('ad', 4);
// DList.update('ad', 2);

// console.log(DList.toString());
// console.log(DList.removeAt(2));
// console.log(DList.toString());
// console.log(DList.removeAt(3));
// console.log(DList.toString());
console.log(DList.toString());
DList.remove('sda');
console.log(DList.toString());
console.log(DList.size());
