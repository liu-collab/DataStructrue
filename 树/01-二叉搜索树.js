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
  BinarySearchTree.prototype.search = function (key) {
    //循环判断
    let node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;

    //递归调用
    //return this.searchNode(this.root, key);
  };
  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node == null) return false;
    if (node.key > key) {
      //大于往左边找
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      //小于往右边找
      return this.searchNode(node.right, key);
    } else {
      return true; //等于返回为true
    }
  };
  // 3- inOrderTraverse:中序遍历
  BinarySearchTree.prototype.inOrderTraverse = function (handle) {
    this.inOrderTraverseNode(this.root, handle);
  };
  BinarySearchTree.prototype.inOrderTraverseNode = function (node, handle) {
    if (node != null) {
      //1.先访问左节点
      this.inOrderTraverseNode(node.left, handle);
      //2.处理节点
      handle(node.key);
      //3.访问右节点
      this.inOrderTraverseNode(node.right, handle);
    }
  };
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
  BinarySearchTree.prototype.postOrderTraverse = function (handle) {
    this.postOrderTraverseNode(this.root, handle);
  };
  BinarySearchTree.prototype.postOrderTraverseNode = function (node, handle) {
    if (node != null) {
      //访问左节点
      this.postOrderTraverseNode(node.left, handle);
      //访问右节点
      this.postOrderTraverseNode(node.right, handle);
      //处理节点
      handle(node.key);
    }
  };
  // 6- min:返回最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root;

    while (node.left != null) {
      node = node.left;
    }
    return node.key;
  };
  // 7- max:返回最大值
  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  };
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
resString = '';
bst.inOrderTraverse(handle);
console.log(`中序遍历:${resString}`);
resString = '';
bst.postOrderTraverse(handle);
console.log(`后序遍历:${resString}`);

console.log(bst.min());
console.log(bst.max());
console.log(bst.search(25));
console.log(bst.search(95));
