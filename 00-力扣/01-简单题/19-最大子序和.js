var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  //当前的数和后面的数进行累加操作
  for (let i = 0; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      //判断累加的和是否大于零,大于零表示可以往前累加
      //否则直接赋值即可
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
  }

  return Math.max(...dp);
};
