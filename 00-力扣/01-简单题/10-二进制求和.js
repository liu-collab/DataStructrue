var addBinary = function (a, b) {
  a = '0b' + a; //转为二进制的数据
  b = '0b' + b;
  sum = BigInt(a) + BigInt(b); //将二进制数据求和

  return sum.toString(2); //和转二进制
};

console.log(addBinary('1010', '1111'));
