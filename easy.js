// 📍 88. Merge Sorted Array

// m, n의 0부터 - in-place sorting
const mergeWithSort = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// const insertionSort = function (nums1, m, nums2, n) {

// }
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 📍 27. Remove Element

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

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return k;
};

// 📍 26. Remove Duplicates from Sorted Array

var removeDuplicatesWithMethod = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (const el of nums) {
      if (nums[i] === el) {
        count++;
      }
    }
    if (count > 1) {
      nums.splice(i + 1, count - 1);
    }
    count = 0;
  }
  return nums.length;
};

const removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count]) {
      nums[count + 1] = nums[i];
      count++;
    }
  }
  return count + 1;
};

// console.log(removeDuplicates([1,2,3,3,4,4,4,4,5]))

// 📍 169. Majority Element

var majorityElement = function (nums) {
//   let count = 0;
//   let el = 0; 
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if(count > nums.length/2){
//         el = nums[i];
//         break
//     } else {
//         count = 0;
//     }
//   }
//   return el;


};

// lol 1500ms

// console.log(majorityElement([1,1,1,1,2,2,2,2,2]));