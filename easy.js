// 88. Merge Sorted Array

console.log(
  (nums1 = [1, 2, 3, 0, 0, 0]),
  (m = 3),
  (nums2 = [2, 5, 6]),
  (n = 3)
); // [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        break;
      }
    }
  }
};
