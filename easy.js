// 88. Merge Sorted Array
// the end of merge sort

// m, n의 0부터 - in-place sorting
const mergeWithSort = function (nums1, m, nums2, n) {
    for(let i = m, j = 0; j < n ; i++, j++){
        nums1[i] = nums2[j];
    }
    nums1.sort((a,b)=>a-b);
    return nums1
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

const insertionSort = function (nums1, m, nums2, n) {
    
}