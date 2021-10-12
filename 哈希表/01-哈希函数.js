//1.将字符串转成大数字
//2.将大的数字转化为数组范围内的数字

function hashFun(str, size) {
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
}

console.log(hashFun('sdafth', 7));
console.log(hashFun('sdaf', 7));
console.log(hashFun('sd', 7));
console.log(hashFun('sdg', 7));
