var merge = function (nums1, m, nums2, n) {
  if (nums1.length === 0) {
    nums1 = nums2;
  }
  if (nums2.length === 0) {
    nums1 = nums1.splice(m, nums1.length - m);
  }
  if (nums1.length !== 0 && nums2.length !== 0)
    nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
