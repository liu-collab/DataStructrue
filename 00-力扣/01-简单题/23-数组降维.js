let arr = [1, [12, 3], [1, [1, 2, 3], 3]];
//方法一:字符串拼接
function bar(arr) {
  const res = [];
  arr += " ";
  arr = arr.split(",");
  for (let item of arr) {
    res.push(parseInt(item));
  }
  return res;
}

console.log(bar(arr));
//方法二：flat:Infinity
// console.log(arr.flat(Infinity));
// //方法三：递归
// function foo(arr) {
//   const res = [];

//   arr.forEach((i) => {
//     if (Array.isArray(i)) {
//       res.push(...foo(i));
//     } else {
//       res.push(i);
//     }
//   });
//   return res;
// }
// console.log(foo(arr));
