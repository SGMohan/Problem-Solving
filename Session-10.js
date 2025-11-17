// Day 10: Advanced Techniques & Recap
// Session Focus: Recap of Two-Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
// Session Practice Questions:
// 1. Find two numbers in a sorted array that add up to a target sum (two-pointer).
function targetSum(arr = [], total = 0) { 
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === total) {
            return [arr[left], arr[right]];
        } else if (currentSum < total) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1]; // Return -1, -1 if no such pair exists
}


// 2. Find the length of the longest substring without repeating characters (sliding window).
function findLenOfLongSubstring(str = "") {
  const set = new Set();
  let longestLen = 0;
  let left = 0;
  for (let ind = 0; ind < str.length; ind++) {
    while (set.has(str[ind])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[ind]);
    longestLen = Math.max(longestLen, ind - left + 1);
  }
  return longestLen;
}

// 3. Find the first non-repeating character in a string (hashing).
function firstNonRepeatingChar(str = "") {
  // O(n)
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of str) {
    if (map.get(char) === 1) return char;
  }
  return -1;
}

// 4. Find the maximum sum of a subarray of size k (sliding window).
function maxSumSubArray(arr = [], k = 0) {
  console.log(arr, k);
  let maxSum = 0;
  let currSum = 0;
  for (let ind = 0; ind < k; ind++) {
    currSum += arr[ind];
  }
  maxSum = currSum;
  for (let ind = k; ind < arr.length; ind++) {
    currSum = currSum - arr[ind - k] + arr[ind];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(maxSumSubArray([5,4,3,2,1],2))

// 5. Check if a permutation of one string is a substring of another (hashing).
function checkInclusion(s1 = "", s2 = "") {
  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);
  for (let ind = 0; ind < s1.length; ind++) {
    freq1[s1.charCodeAt(ind) - 97]++;
    freq2[s2.charCodeAt(ind) - 97]++;
  }
//   console.log(...freq1);
//   console.log(...freq2);
  if (freq1.join("") == freq2.join("")) return true;
  for (let ind = s1.length; ind < s2.length; ind++) {
    freq2[s2.charCodeAt(ind - s1.length) - 97]--;
    freq2[s2.charCodeAt(ind) - 97]++;
    // console.log(...freq2);
    if (freq1.join("") == freq2.join("")) return true;
  }
  return false;
}
// console.log(checkInclusion("listen", "silent"));


// 6. Find all triplets in an array that sum up to zero (two-pointer).
function findTripletSumZero(arr) {
  arr = arr.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue; // to avoid duplciates
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[i] + arr[right];
      if (sum == 0) {
        res.push([arr[i], arr[left], arr[right]]);
        // to avoid duplicates
        while (left < right && arr[left] == arr[left + 1]) left++;
        while (left < right && arr[right] == arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}
// console.log(findTripletSumZero([-1, 0, -1, 2, 1, -1, 2]));


// 7. Find the maximum length of a subarray with equal 0s and 1s (sliding window).
function maxLenSubArray(arr = []) {
  const map = new Map();
  let prefixSum = 0;
  let maxlength = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    prefixSum = prefixSum + (arr[ind] == 0 ? -1 : 1);
    if (map.has(prefixSum)) {
      const len = ind - map.get(prefixSum);
      maxlength = Math.max(maxlength, len);
    } else {
      map.set(prefixSum, ind);
    }
  }
//   console.log(arr);
  return maxlength;
}

// console.log(
//   maxLenSubArray(
//     Array.from({ length: Math.floor(Math.random() * 15) + 10 }, () =>
//       Math.floor(Math.random() * 2)
//     )
//   )
// );



// Post-Session Practice Questions:
// 1. Find the longest subarray with a sum equal to k (sliding window).
function longestSubarrayWithSumK(arr = [], k = 0) {
  const map = new Map();
  let prefixSum = 0;
  let maxlength = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    prefixSum += arr[ind];
    if (prefixSum === k) {
      maxlength = ind + 1;
    }
    if (map.has(prefixSum - k)) {
      const len = ind - map.get(prefixSum - k);
      maxlength = Math.max(maxlength, len);
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, ind);
    }
  }
  return maxlength;
}
console.log(longestSubarrayWithSumK([1, -1, 5, -2, 3], 3));


// 2. Merge two sorted arrays without using extra space (two-pointer).
function mergeSortedArrays(arr1 = [], arr2 = []) {
  let i = 0;
  let j = 0;
  const merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));


// 3. Find the first missing positive integer in an array (hashing).
function firstMissingPositive(arr = []) {
  const set = new Set(arr);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
}
console.log(firstMissingPositive([3, 4, -1, 1]));


// 4. Count the number of subarrays with a sum equal to zero (sliding window).
function countSubarraysWithSumZero(arr = []) {
  let count = 0;
  let prefixSum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let ind = 0; ind < arr.length; ind++) {
    prefixSum += arr[ind];
    if (map.has(prefixSum)) {
      count += map.get(prefixSum);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}
console.log(countSubarraysWithSumZero([1, -1, 2, -2, 3, -3]));


// 5. Check if an array contains duplicate elements within k distances (sliding window).
function containsNearbyDuplicate(arr = [], k = 0) {
  const set = new Set();
  for (let ind = 0; ind < arr.length; ind++) {
    if (set.has(arr[ind])) {
      return true;
    }
    set.add(arr[ind]);
    if (set.size > k) {
      set.delete(arr[ind - k]);

    }
  }
  return false;
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));


// 6. Find the longest mountain in an array (two-pointer).
function longestMountain(arr = []) {
  let maxLen = 0;
  let ind = 1;
  while (ind < arr.length - 1) {
    if (arr[ind] > arr[ind - 1] && arr[ind] > arr[ind + 1]) {
      let left = ind - 1;
      let right = ind + 1;
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        right++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
      ind = right;
    } else {
      ind++;
    }
  }
  return maxLen;
}
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5, 1, 0]));


// 7. Sort an array by the parity of elements (two-pointer).
function sortArrayByParity(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] % 2 > arr[right] % 2) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    if (arr[left] % 2 === 0) left++;
    if (arr[right] % 2 === 1) right--;
  }
  return arr;
}
console.log(sortArrayByParity([3, 1, 2, 4]));


// 8. Find all pairs in an array with a difference equal to a target value (two-pointer).
function findPairsWithDiff(arr = [], target = 0) {
  arr = arr.sort((a, b) => a - b);
  const res = [];
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    const diff = arr[right] - arr[left];
    if (diff === target) {
      res.push([arr[left], arr[right]]);
      left++;
      right++;
    } else if (diff < target) {
      right++;
    } else {
      left++;
      if (left === right) right++;
    }
  }
  return res;
}
console.log(findPairsWithDiff([1, 5, 3, 4, 2], 2));


// 9. Find the longest subarray with at most two distinct characters (sliding window).
function longestSubarrayWithTwoDistinctChars(str = "") {
  const map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < str.length; right++) {
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    while (map.size > 2) {
      map.set(str[left], map.get(str[left]) - 1);
      if (map.get(str[left]) === 0) {
        map.delete(str[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log(longestSubarrayWithTwoDistinctChars("eceba"));


// 10. Find the first non-repeating element in a stream of characters (hashing).
function firstNonRepeatingInStream(stream = "") {
  const map = new Map();
  const result = [];
  for (let char of stream) {
    map.set(char, (map.get(char) || 0) + 1);
    for (let [key, value] of map) {
      if (value === 1) {
        result.push(key);
        break;
      }
    }
    if (result.length < stream.length) {
      result.push(-1);
    }
  }
  return result;
}
console.log(firstNonRepeatingInStream("aabc"));


// 11. Merge two sorted arrays without using extra space (two-pointer).
function mergeSortedArraysInPlace(arr1 = [], arr2 = []) {
  let i = arr1.length - 1;
  let j = 0;
  while (i >= 0 && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
      i--;
      j++;
    } else {
      break;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return [...arr1, ...arr2];
}
console.log(mergeSortedArraysInPlace([1, 4, 7, 8, 10], [2, 3, 9]));


// 12. Find the largest subarray with a sum less than or equal to a given value (sliding window).
function largestSubarrayWithSumLEK(arr = [], k = 0) {
  let left = 0;
  let currSum = 0;
  let maxLen = 0;
  for (let right = 0; right < arr.length; right++) {
    currSum += arr[right];
    while (currSum > k) {
      currSum -= arr[left];
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log(largestSubarrayWithSumLEK([1, 2, 3, 4, 5], 9));


module.exports = {
  targetSum,
  findLenOfLongSubstring,
  firstNonRepeatingChar,
  maxSumSubArray,
  checkInclusion,
  findTripletSumZero,
  maxLenSubArray,
};
