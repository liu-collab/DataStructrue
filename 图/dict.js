//封装字典

function Dictionary() {
  //保存的数据
  this.item = {};

  //方法
  //添加键值对
  Dictionary.prototype.set = function (key, value) {
    this.item[key] = value;
  };
  //判断是否有值
  Dictionary.prototype.has = function (key) {
    return this.item.hasOwnProperty(key);
  };
  //删除
  Dictionary.prototype.remove = function (key) {
    //判断是否有值
    if (!this.item[key]) return false;
    delete this.item[key];
    return true;
  };
  //根据key获取值
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.item[key] : undefined;
  };
  //获取所有的key
  Dictionary.prototype.key = function () {
    return Object.keys(this.item);
  };
  //获取所有的value1
  Dictionary.prototype.value = function () {
    return Object.values(this.item);
  };
  //获取length
  Dictionary.prototype.size = function () {
    return this.key().length;
  };
  //清空
  Dictionary.prototype.clear = function () {
    this.item = {};
  };
}

//module.export = Dictionary;
// ///测试
// const set = new Dictionary();
// set.set('name', 'Jack');
// set.set('ds', 'ds');
// set.set('fgn', 'hng');
// set.set('dr', 'ubfd');
// set.set('ewt', 'hn');
// console.log(set.value());
// console.log(set.key());
// console.log(set.size());
// console.log(set.has('name'));
// console.log(set.get('name'));
