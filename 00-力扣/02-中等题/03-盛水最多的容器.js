var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    min = Math.min(height[left], height[right]);
    let area = min * (right - left);
    res = Math.max(area, res);
    // if (height[left] <= height[right]) {
    //   ++left;
    // } else {
    //   --right;
    // }
    height[left] <= height[right] ? ++left : right--;
  }
  return res;
};
