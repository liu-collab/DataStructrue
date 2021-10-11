# 数据结构和算法

## 栈

- 后进先出
- 先进后出

### 栈的操作

- push 压栈 ,添加一个新的元素到栈顶
- pop 出栈 ,在栈顶删除一个元素
- peek 返回栈顶的元素,不对栈做任何的修改
- isEmpty 判断栈中的元素是否为空,为空返回 true
- size 返回栈的元素个数
- toString 将栈结构的内容以字符串返回

## 队列

- 先进先出
- 在队前端删除元素,在队的后端插入元素

### 队列的操作

- enqueue 在队列的尾部添加新的元素
- dequeue 在队列的头部删除元素
- front 返回队列的一个元素,不修改队列
- isEmpty 判断队列是否为空
- size 返回队列的元素个数
- toString 将队列的内容以字符串返回

### 优先级队列

- 使用一个内部类,实现元素既有内容,也有优先级
- 添加元素时需要比较元素的优先级,数字大的往后放

## 链表

### 单向链表

#### 单向链表的组成

- 链表的组成类似于火车的组成,火车头拉着车厢,车厢与车厢相连
- 链表由表头 heade 开始,指向第一节车厢
- 链表的节点由两部分组成,data 和 next,data 存储数据,next 指向下一个节点

#### 链表的操作

- append(element) 向队尾添加新的元素
- insert(element,position) 特定位置插入元素
- remove(element) 删除元素
- removeAt(position) 删除特定位置的元素
- update(position,element) 修改特定位置的元素
- get(position) 查找特定位置的元素
- indexOf(element) 返回元素在链表中的索引,没有返回-1
- isEmpty 判断链表是否为空
- size 返回链表的元素个数
- toString 将链表的内容以字符串返回

### 双向链表

#### 双向链表的组成

- 双向链表在节点的组成时比单向链表多了 previous,previous 指向的前一个节点
- 双向链表由于节点可以指向前一个节点,也可以指向后一个节点,
- 在修改数据量大的链表时,特别是在链表后面的数据,用双向链表查找非常快

#### 双向链表的操作

- append(element) 向链尾添加新的元素
- insert(element,position) 特定位置插入元素
- remove(element) 删除元素
- removeAt(position) 删除特定位置的元素
- update(position,element) 修改特定位置的元素
- get(position) 查找特定位置的元素
- indexOf(element) 返回元素在链表中的索引,没有返回-1
- isEmpty 判断链表是否为空
- size 返回链表的元素个数
- toString 将链表的内容以字符串返回
- forwardString 返回正向遍历的节点字符串形式
- backwordString 返回返现遍历的节点字符串形式
