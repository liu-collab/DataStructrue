var singleNumber = function (nums) {
  let set = new Set();
  for (let item of nums) {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  }
  return [...set];
};

//方法二:异或运算
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};
