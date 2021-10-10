//封装单向链表类
function LinkList() {
  //链表的节点有两部分组成,data和next,利用内部类来进行实现
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  //   1.append(element) 向队尾添加新的元素
  LinkList.prototype.append = function (data) {
    //1.创建新的节点
    const newNode = new Node(data);

    //2.判断是否为第一个节点
    if (this.length === 0) {
      //head指向第一个节点
      this.head = newNode;
    } else {
      //不是第一个节点,找到最后一个节点进行添加
      let current = this.head;
      //最后一个节点next为空
      while (current.next) {
        //current找到最后一个节点
        current = current.next;
      }
      //最后一个节点的next指向新的节点
      current.next = newNode;
    }
    //添加节点后长度加一
    this.length += 1;
  };
  //  2.insert(element,position) 特定位置插入元素
  LinkList.prototype.insert = function (data, position) {
    //判断position的边界情况,不能为负数,不能大于链表的长度
    if (position < 0 || position > this.length) return false;
    const newNode = new Node(data);
    //插入的情况一:第一个位置
    if (position === 0) {
      //获取到head的第一个指向
      newNode.next = this.head;
      //插入到第一个位置后,head指向newNode,newNode.next指向刚才的第一个节点
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        //previous指向当前节点
        previous = current;
        //找到当前节点的下一个节点
        current = current.next;
      }
      //新的节点指向的是下一个节点
      newNode.next = current;
      //当前节点指向新的节点
      previous.next = newNode;
    }
    this.length += 1;
    return true;
  };
  //  3.remove(element) 删除元素
  LinkList.prototype.remove = function (data) {
    //1.更加数据查找相应位置
    const position = this.indexOf(data);
    //2.更据位置删除节点
    this.removeAt(position);
  };
  //  4. removeAt(position) 删除特定位置的元素
  LinkList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false;

    if (position === 0) {
      //等于0的情况下head指向下一个(第二个)节点
      this.head = this.head.next;
    } else {
      let index = 0;
      let previous = null;
      let current = this.head;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length - 1;
  };
  //  5.update(position,data) 修改特定位置的元素
  LinkList.prototype.update = function (data, position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let index = 0;
    while (current) {
      if (position === index) {
        current.data = data;
      }
      current = current.next;
      index++;
    }
  };
  //  6.get(position) 查找特定位置的元素
  LinkList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  };
  //  7.indexOf(element) 返回元素在链表中的索引,没有返回-1
  LinkList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    //current往下查找直到找数据相同的项返回下标值,找不到返回-1
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  //  8.isEmpty 判断链表是否为空
  LinkList.prototype.isEmpty = function () {
    if (this.length !== 0) return false;
  };
  //  9.size 返回链表的元素个数
  LinkList.prototype.size = function () {
    return this.length;
  };
  //  10.toString 将链表的内容以字符串返回
  LinkList.prototype.toString = function () {
    let current = this.head;
    let ListString = '';
    while (current) {
      ListString += current.data + ' ';
      current = current.next;
    }
    return ListString;
  };
  //链表头
  this.head = null;
  //链表的长度
  this.length = 0;
}
//链表测试
const list = new LinkList();

list.append('das');
list.append('sfa');
list.append('gh');
list.append('fafsa');
list.insert('eee', 2);

console.log(list.toString());

console.log(list.get(2));
console.log(list.indexOf('gh'));
console.log(list.indexOf('g'));
list.update('aaa', 2);
console.log(list.toString());
console.log('--------');
list.removeAt(2);
console.log(list.toString());

console.log('========');
list.remove('sfa');
console.log(list.toString());
console.log(list.isEmpty());
console.log(list.size());
