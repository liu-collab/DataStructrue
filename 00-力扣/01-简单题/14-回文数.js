var isPalindrome = function (x) {
  x = x + '';
  const arr = Array.from(x);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i++] != arr[j--]) {
      return false;
    }
  }
  return true;
};
