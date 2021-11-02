var reverse = function (x) {
  const sign = x > 0 ? 1 : -1;
  let j = '';
  x = Math.abs(x);
  x = x + '';
  xLen = x.length;
  for (let i = xLen - 1; i >= 0; i--) {
    j += x[i] + '';
  }
  const k = j * sign;
  let res = 0;
  const max = Math.pow(2, 31);
  const min = Math.pow(-2, 31);
  if (k >= 0) {
    res = k > max ? 0 : k;
  } else {
    res = k < min ? 0 : k;
  }
  return res;
};
