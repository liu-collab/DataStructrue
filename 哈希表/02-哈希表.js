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
    }

    //将大的数字转为数组范围内的数字
    index = hashCode % size;
    return index;
  };

  //添加和修改方法
  HashTable.prototype.put = function (key, value) {
    //1.先获取key对应的index值
    let index = this.hashFun(key, this.limt);
    //2.更据index取出相应的bucket

    var bucket = this.storage[index];

    //判断bucket是否为空
    if (bucket == null) {
      bucket = [];
      //在对应的位置添加bucket
      this.storage[index] = bucket;
    }

    //遍历数据,判断是否存在相同的key值
    for (let i = 0; i < bucket.length; i++) {
      //取出桶中的数组
      let tulpe = bucket[i];
      if (tulpe[0] == key) {
        tulpe[1] = value;
        return;
      }
    }
    //不存在直接添加
    bucket.push([key, value]);
    this.count++;
    console.log(this.storage);

    //判断是否需要扩容当容量大于0.75进行扩容
    //只有在bucket在大于0.75时才能扩容
    let indey = 0;
    this.storage.map((item) => {
      if ([item]) {
        indey++;
      }
      return indey;
    });

    const num = indey / this.limt;
    console.log(num);
    if (num > 0.75) {
      const newsize = this.limt * 2;
      const prime = this.getPrime(newsize);
      this.resize(prime);
    }
  };

  //查找方法
  HashTable.prototype.get = function (key) {
    //1.先获取对应的index
    const index = this.hashFun(key, this.limt);
    var bucket = this.storage[index];
    //bucket.push(this.storage[index]);
    if (bucket == null) return null;

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] == key) {
        return tuple[1];
      }
      return null;
    }
  };
  //删除操作
  HashTable.prototype.remove = function (key) {
    //1.获取对应的下标值
    const index = this.hashFun(key, this.limt);
    //根据下标值取出对应的bucket
    var bucket = this.storage[index];
    if (bucket == null) return null;
    //遍历bucket
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      //找到对应元素进行删除
      if (tuple[0] == key) {
        bucket.splice(i, 1);
        this.count--;
        return tuple[1];
      }
      return null;
    }
    let indey = 0;
    this.storage.map((item) => {
      if ([item]) {
        indey++;
      }
      return indey;
    });

    const num = indey / this.limt;

    if (this.limt > 7 && num < 0.25) {
      const newsize = Math.floor(this.limt / 2);
      const prime = this.getPrime(newsize);
      this.resize(prime);
    }
  };
  HashTable.prototype.size = function () {
    return this.count;
  };
  HashTable.prototype.isEmpty = function () {
    return this.count == 0;
  };

  //哈希表扩容
  HashTable.prototype.resize = function (newlimit) {
    //将原来的storage存起来
    const oldStorage = this.storage;
    //清空 重置
    this.storage = [];
    this.count = 0;
    this.limt = newlimit;
    //遍历旧的storage
    for (let i = 0; i < oldStorage.length; i++) {
      //取出每一个的bucket
      const bucket = oldStorage[i];
      if (bucket == null) {
        continue;
      }
      //遍历bucket
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j];
        //重新添加旧的元素
        this.put(tuple[0], tuple[1]);
      }
    }
  };
  //判断是否为质数
  HashTable.prototype.isPrime = function (num) {
    const temp = parseInt(Math.sqrt(num));
    console.log(temp);
    for (let i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
      return true;
    }
  };
  //获取质数
  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };
}

const hashtable = new HashTable();

hashtable.put('dA', '51');
hashtable.put('safd', '54656');
hashtable.put('dfd', '5371');
hashtable.put('dvf', '5571');
hashtable.put('dfdb', '531');
hashtable.put('hj', '545');
hashtable.put('kjdvs', '654');
//console.log(hashtable);
// console.log(hashtable.get('dfd'));
// console.log(hashtable.size());
// console.log(hashtable.remove('dfd'));
// console.log(hashtable.get('dfd'));
// console.log(hashtable.size());
