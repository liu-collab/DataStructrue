var removeElement = function (nums, val) {
  let p1 = 0,
    p2 = 0; // 记录fast和slow指针
  const len = nums.length;
  while (p1 < len) {
    if (nums[p1] !== val) {
      //在不等于需要删除的元素情况下下进行赋值

      nums[p2] = nums[p1];
      p2++;
    }
    //在等于需要删除的元素跳过
    p1++;
  }
  return p2;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(nums, val));
