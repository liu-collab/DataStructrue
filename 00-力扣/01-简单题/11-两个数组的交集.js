function foo(arr1, arr2) {
  let arr = new Set();
  if (arr1.length < arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) arr.add(arr1[i]);
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) arr.add(arr2[i]);
      }
    }
  }
  return Array.from(arr);
}
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(foo(nums1, nums2));
