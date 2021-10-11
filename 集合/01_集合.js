//封装集合类
function Set() {
  //属性
  this.items = {};
  //方法
  //   1- add(value) 添加方法
  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false;
    }

    this.items[value] = value;
    return true;
  };
  // 2- remove(value) 删除方法
  Set.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  };

  // 3- has(value) 判断集合中是否有对应的值,有返回 true
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };
  // 4- clear() 清除集合中所有的元素
  Set.prototype.clear = function () {
    this.items = {};
  };
  // 5- size() 返回集合中元素的个数
  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };
  // 6- values() 将集合中元素返回为一个数组
  Set.prototype.values = function () {
    return Object.keys(this.items);
  };
  //集合间的方法
  //1.并集
  Set.prototype.union = function (otherSet) {
    //this:A集合
    //otherset:B集合
    //unionSet:并集

    const unionSet = new Set();
    //取出A集合中的元素
    let value = this.values();
    //将A中的元素添加到并集中
    for (let item of value) {
      unionSet.add(item);
    }
    //将B中的元素添加到并集中
    //添加方法设置了不可重复,所以可以直接添加
    value = otherSet.values();
    for (let item of value) {
      unionSet.add(item);
    }
    return unionSet;
  };
  //2.交集
  Set.prototype.intersection = function (otherset) {
    //this:A集合
    //otherset:B集合
    //interSet:交集
    const interSet = new Set();

    //调用hasOwnProperty方法判断值是否存在
    let Avalues = this.values();
    for (let Aitem of Avalues) {
      if (otherset.has(Aitem)) {
        interSet.add(Aitem);
      }
    }

    //两次循环判断
    // let Avalues = this.values();
    // let Bvalues = otherset.values();
    // for (let Aitem of Avalues) {
    //   for (let Bitem of Bvalues) {
    //     if (Aitem == Bitem) {
    //       interSet.add(Aitem);
    //       break;
    //     }
    //   }
    // }
    return interSet;
  };

  //3.差集
  Set.prototype.subtraction = function (otherset) {
    //this:A集合
    //otherset:B集合
    //subtraction:差集
    const subtraction = new Set();

    let values = this.values();
    for (let item of values) {
      if (!otherset.has(item)) {
        subtraction.add(item);
      }
    }
    return subtraction;
  };
  //子集
  Set.prototype.subset = function (subset) {
    //判断是否为子集
    //A:父集
    //subset:子集
    if (subset.size() > this.size()) return false;
    let values = subset.values();
    for (let item of values) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  };
}

const set = new Set();
const otherset = new Set();
const subset = new Set();
set.add('asd');
//set.add('ass');
set.add('sdvsd');
set.add('sfa');

//set.remove('asd');
subset.add('asd');
//subset.add('gfh');
otherset.add('asd');
otherset.add('reg');
otherset.add('sfa');
otherset.add('fasgbd');

// console.log(set.values());
// const unionset = set.union(otherset);
// console.log(set.values());
//  console.log(otherset.values());
// console.log(unionset.values());
// const interset = set.intersection(otherset);
// console.log(interset.values());

console.log(set.values());
console.log(otherset.values());
const subtraction = set.subtraction(otherset);

console.log(subtraction.values());
console.log(set.subset(subset));
