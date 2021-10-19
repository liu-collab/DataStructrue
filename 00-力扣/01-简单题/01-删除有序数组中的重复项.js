// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成

var removeDuplicates = function (nums) {
  let p1 = 0;
  let p2 = 0;
  //利用双指针
  //p1表示写入操作
  //p2表示读取操作
  //先进行度取操作,判断先读取的是否和写入的数据是否一致
  //如果读取的操作和写入的数据是不一致的,直接写入
  //一致写入操作跳过
  while (p2 < nums.length) {
    if (nums[p1] != nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    p2++;
  }
  return p1 + 1;
};
//test
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const arry = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(removeDuplicates(arry));
