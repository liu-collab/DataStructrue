let arr = [1, [12, 3], [1, [1, 2, 3], 3]];
//方法一:字符串拼接
// arr += " ";
// arr = arr.split(",");
// console.log(arr);
//方法二：flat:Infinity
// console.log(arr.flat(Infinity));
// //方法三：递归
function foo(arr) {
  const res = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      res.push(...foo(i));
    } else {
      res.push(i);
    }
  });
  return res;
}
console.log(foo(arr));
