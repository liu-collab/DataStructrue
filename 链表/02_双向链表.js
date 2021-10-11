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
  // 4- removeAt(position) 删除特定位置的元素
  // 5- update(position,element) 修改特定位置的元素
  // 6- get(position) 查找特定位置的元素
  // 7- indexOf(element) 返回元素在链表中的索引,没有返回-1
  // 8- isEmpty 判断链表是否为空
  // 9- size 返回链表的元素个数
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
DList.append('yt');
console.log(DList.forwardString());
console.log(DList.toString());
console.log(DList.backwardString());
DList.insert('adsf', 2);
console.log(DList.toString());
