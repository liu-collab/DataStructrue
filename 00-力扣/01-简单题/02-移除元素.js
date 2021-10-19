var removeElement = function (nums, val) {
  let p1 = 0,
    p2 = 0; // 记录fast和slow指针
  const len = nums.length;
  while (p1 < len) {
    if (nums[p1] !== val) {
      // 过滤掉不需要的元素
      nums[p2] = nums[p1];
      p2++;
    }
    p1++;
  }
  return p2;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(nums, val));
