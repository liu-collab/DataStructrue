//封装二叉搜索树

function BinarySearchTree() {
  //属性
  this.root = null;

  //节点
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  //方法
  //  1- insert(key):插入一个新的键
  BinarySearchTree.prototype.insert = function (key) {
    //1.创建节点
    const newNode = new Node(key);
    //2.判断根节点是否有值
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
        //向左查找
        if (node.left == null) {
          //左节点为空,直接赋值
          node.left = newNode;
        } else {
          //左节点不为空
          //判断左节点的右节点是否为空
          this.insertNode(node.left, newNode);
        }
      } else {
        //向右查找
        if (node.right == null) {
          node.right = newNode;
        } else {
          //右节点不为空
          this.insertNode(node.right, newNode);
        }
      }
    };
  };
  // 2- search(key):查找一个 key,存在返回 true
  // 3- inOrderTraverse:中序遍历
  // 4- preOrderTraverse:先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handle) {
    //查找子节点

    this.preOrderTraversalNode(this.root, handle);
  };
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handle) {
    if (node != null) {
      // console.log(node.key);
      //1.处理节点

      handle(node.key);

      //2.遍历左子树
      this.preOrderTraversalNode(node.left, handle);
      //3.遍历右子树
      this.preOrderTraversalNode(node.right, handle);
    }
  };
  // 5- postOrderTraverse:后序遍历
  // 6- min:返回最小值
  // 7- max:返回最大值
  // 8- remove(key):删除 key
}

//test
const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

let resString = '';
const handle = function (key) {
  resString += key + ' ';

  return resString;
};
bst.preOrderTraversal(handle);
console.log(`先序遍历:${resString}`);
