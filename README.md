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

## 集合

- 集合中的元素不能重复
- 元素是无序状态,不能通过下标值修改

### 集合的方法

- add(value) 添加方法
- remove(value) 删除方法
- has(value) 判断集合中是否有对应的值,有返回 true
- clear() 清除集合中所有的元素
- size() 返回集合中元素的个数
- values() 将集合中元素返回为一个数组

### 集合间的方法

- 交集
- 差集
- 并集
- 子集

## 哈希表

- 哈希表基于数组,可以提供快速的插入,删除,修改操作,数组在基于下标值查找是非常快的
- 哈希表是无序的,key 是不能重复的
- key 不能重复是因为 key 需要用哈希函数转为下标值
- 哈希化:将 key 通过算法转换为大的数字,大的数字转化为数组范围内的的下标过程
- 哈希函数:通常将 key 值转化为大数字,大数字又进行哈希化的的函数
- 哈希表:最终将数据插入到这个数组,对结构进行的封装叫哈希表

### 冲突

在进行哈希化的时候,有概率是两个的下标值是一样的,如果直接存进去,会将之前存放的数据分割掉
这就是冲突的来源,解决冲突一般有两个方法链地址法和开放地址法

#### 链地址法

哈希表中的数组存放的不是单一的字符元素,将每个存放数据的地方改为数组或者是链表
[ [] ,[] , [] , [] , [] , [] ] 或者 [ 链表一, 链表二, 链表三,链表四,链表五,链表六]
如果有冲突的数据将两个数据存在数组或者链表中,在根据相应的下标值进行查找

#### 开放地址法

不改变哈希表的结构,数组里面放的是字符串元素,开放地址法主要是找到空白的地址
在空白的地址存放数据,找空地址有三种方法

- 线性探测: 根据 index+1 依次往后查找空地址,如果需要查找这个数据,需要将根据哈希化查找到的地址对应的数据依次比较,直到找到正确的数据,如果查找到空地址,直接停止,说明表中没有这个数据,如果删除数据,需要将这个冲突数据对应的地址改为-1
  不能设置为 null
- 二次探测:根据 index+1 的(步长)平方依次往后查找空地址
- 再哈希化:二次探测的步长都一样的 1,4,9,16,再哈希化是将步长改为不定值  
  [ stepSize = constant- (key % constant)]  
  constant 为质数

# 树

- 节点的度:节点的子树个数
- 树的度:树所有节点最大的度
- 路径和路径的长度:从根节点出发,路径所包含的边的个数为路径的长度
- 树的层次:根节点在第一层,其他任意节点的层数是其父节点加一
- 数的深度:树的所有节点最大层次

## 二叉树

- 一个深度为 i 二叉树最大的节点总数: 2^i - 1 i>=1
- 一个二叉树的第 i 层最大的节点树为: 2^(i-1) i>=1
- 对任何的非空二叉树,n0 表示叶节点的树 , n2 表示度为 2 的非页节点树 ,满足 n0=n2+1
- 满二叉树:除了最下一层外,所有节点的叶子节点都为 2
- 完全二叉树:除二叉树的最下一层外,其他各层的节点都达到最大且最后一层从左向右的页节点连续存在,只能缺右节点
- 二叉搜索树:左节点小于根节点的键值,右节点的大于根节点的键值,子节点满足二叉搜索树

### 二叉搜索树操作

- insert(key):插入一个新的键
- search(key):查找一个 key,存在返回 true
- inOrderTraverse:中序遍历
- preOrderTraverse:先序遍历
- postOrderTraverse:后序遍历
- min:返回最小值
- max:返回最大值
- remove(key):删除 key
- 前驱:在左子树一直往右找, 找到最接近于当前(小于 key)的 key 值的 key
- 后继:在右子树一直往左找,找到最接近于当前(大于 key)的 key 值的 key

## 红黑树

- 节点是红色或者黑色的
- 根节点为黑色的
- 每一个叶子的节点都是黑色的空(NIL)节点
- 每个红色的节点的子节点都是黑色节点
- 从任一的节点出发到每个叶子节点,包含的黑色节点数目都是一样的

### 红黑树的相对平衡

- 最长路径不会超过最短路径的两倍
- 性质四决定了路径不能为连续的红色或者黑色节点
- 最短的路径可能都是黑色节点
- 最长的路径可能是红色或者黑色路径交替
- 性质五规定了所有路径的黑色节点数目都是一样的,
- 而最长的路径是红色黑色交替,说明单条路径上的红色数量小于等于黑色的数量
- 这就决定了最长的路径不会超过最短路径的两倍

# 图

- 一组顶点:通常用 V 表示顶点的集合
- 一组边:通常用 E 表示边的集合
- 边是顶点和顶点之间的连接
- 边可以是有向的,也可以是无向的
- A -- B 表示无向边 , A --> B 单向边

## 图的属性

- 度:一个顶点和相邻顶点的数量
- 简单路径:路径的顶点不包含重复的顶点
- 回路:第一个顶点和最后一个顶点相同
- 无向图:边没有方向
- 有向图:边有方向
- 无权图:边没有携带权重
- 有权图:边携带权重
- 邻接矩阵:用二维数组表示顶点和顶点有无边[0][1] 0 表示没有边 1 表示有边,也可以用权重表示
- 邻接表:每个顶点保存和自己相连的顶点
