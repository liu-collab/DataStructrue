//方法一
var climbStairs = function (n) {
  let dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
//方法二
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  } else {
    let a = 1,
      b = 2,
      temp;
    for (let i = 3; i <= n; i++) {
      temp = a;
      a = b;
      b = temp + b;
    }
    return b;
  }
};
