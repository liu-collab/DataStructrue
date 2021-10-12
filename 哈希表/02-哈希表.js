//链地址法
//   storage[  bucket[ [key,value],[key,value],[key,value],[key,value]...] , [] , [ ] , [] , []...     ]

function HashTable() {
  //哈希表
  this.storage = [];
  //记录存放多少数据
  this.count = 0;
  //限制表的大小
  this.limt = 7;

  //哈希函数
  HashTable.prototype.hashFun = function (str, size) {
    let hashCode = 0;
    let index = 0;

    //转成大的数字
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
      console.log(str.charCodeAt(i));
    }

    //将大的数字转为数组范围内的数字
    index = hashCode % size;
    return index;
  };

  //添加和修改方法
  HashTable.prototype.put = function (key, value) {
    //1.先获取key对应的index值
    const index = this.hashFun(key);
    //2.更据index取出相应的bucket
    let bucket = this.storage[index];

    //判断bucket是否为空
    if (bucket == null) {
      bucket = [];
      //在对应的位置添加bucket
      this.storage[index] = bucket;
    }
    //遍历数据,判断是否存在相同的key值
    for (let i; i < bucket.length; i++) {
      //取出桶中的数组
      let tulpe = bucket[i];
      if (tulpe[0] == key) {
        tulpe[1] = value;
        return;
      }
      //不存在直接添加
      bucket.push([value, key]);
    }
  };
}
