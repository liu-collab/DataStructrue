var plusOne = function (digits) {
  let num = '';
  for (let item of digits) {
    num += item + '';
  }

  num = BigInt(num) + 1n + '';

  return Array.from(num);
};
