// 💡💡💡 Array / String

// ❓ 88. Merge Sorted Array

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

// ❓ 27. Remove Element

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

// ❓ 26. Remove Duplicates from Sorted Array

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

// ❓ 169. Majority Element

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



// ❓ 121. Best Time to Buy and Sell Stock
/*
input: {number}[] prices
output: {number}

최대값에서 최소값을 뺀 값을 리턴
인덱스 역으로는 불가
양의 정수 없으면 0 리턴 
*/

var maxProfit = function(prices) {
    
};

// ❓ 13. Roman to Integer
/* 
input: {string} s -> roman num
output: {number}

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.*/

var romanToInt = function(s) {
    
};

// ❓ 58. Length of Last Word

/*
input: {string} s
output: {number}
*/

var lengthOfLastWord = function(s) {
    
};

// ❓ 14. Longest Common Prefix

// ❓ 28. Find the Index of the First Occurrence in a String

// 💡💡💡 Two Pointers

// ❓ 125. Valid Palindrome

// ❓ 392. Is Subsequence

// 💡💡💡 Hashmap

// ❓ 383. Ransom Note

// ❓ 205. Isomorphic Strings

// ❓ 290. Word Pattern

// ❓ 242. Valid Anagram

// ❓ 1. Two Sum

// const nums = [0, 1, 2, 2, 4, 7, 8, 10];
const nums = [3, 3]; // 통과가 안 되는 케이스
const target = 6;

var twoSum = function (nums, target) {
  const m = new Map();
  const arr = [];
  let rest;

  for (let i = 0; i < nums.length; i++) {
    rest = target - nums[i];
    m.set(nums[i], i); // key를 el, val을 idx

    if (m.has(rest) && i !== m.get(rest)) {
      // key에 rest있으면
      arr.push(i, m.get(rest)); // 현재 idx랑 rest idx랑 arr에 push - 여기서 중복 발생
    }
  }
  return arr;
};

console.log(twoSum(nums, target));

// 💡💡💡 Intervals

// 💡💡💡 Stack

// 💡💡💡 Linked List

// 💡💡💡 Binary Tree General

// 💡💡💡 Binary Tree BFS

// 💡💡💡 Binary Search Tree

// 💡💡💡 Divide & Conquer

// 💡💡💡 Binary Search

// 💡💡💡 Bit Manipulation

// 💡💡💡 Math

// 💡💡💡 1D DP
