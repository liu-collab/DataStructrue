var plusOne = function (digits) {
  let num = '';
  for (let item of digits) {
    num += item + '';
  }

  num = BigInt(num) + 1n + '';

  return Array.from(num);
};
var plusOne = function (digits) {
  return String(BigInt(digits.join('')) + 1n)
    .split('')
    .map((item) => Number(item));
};
