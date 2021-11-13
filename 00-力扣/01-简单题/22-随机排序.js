const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function foo(arr) {
  const res = [];
  ArrLen = arr.length;
  while (ArrLen-- > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    res.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return res;
}
console.log(foo(arr));
