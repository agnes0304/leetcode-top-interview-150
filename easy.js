// 88. Merge Sorted Array
// the end of merge sort

// m, n의 0부터 - in-place sorting
const mergeWithSort = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// const insertionSort = function (nums1, m, nums2, n) {

// }



// 27. Remove Element
// nums에서 val과 같지 않은 el의 count k를 반환

var removeElementWithMethod = function (nums, val) {
  let k;
  while (nums.indexOf(val) !== -1) {
    let i = nums.indexOf(val);
    nums.splice(i, 1);
  }
  k = nums.length;

  if (!k) {
    k = [val];
  }
  return k;
};

// console.log(removeElement([2, 2, 2], 0));


var removeElement = function (nums, val) {
    let k=0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k += 1
        }
    }
    return k;
};

console.log(removeElement([2, 2, 2], 0));