var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let value = which(s[i]);
    if (i < s.length - 1 && value < which(s[i + 1])) {
      result -= value;
    } else {
      result += value;
    }
  }
  return result;

  function which(i) {
    switch (i) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 0;
    }
  }
};
