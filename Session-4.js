// Day 4: Array and Array Methods
// 1. Find the maximum and minimum elements in the array 
const minimum = (num1, num2) => (num1 < num2 ? num1 : num2);
const maximum = (num1, num2) => (num1 > num2 ? num1 : num2);
function minAndMax(arr = []) {
    if (arr.length === 0) return [-1, -1];
    let min = arr[0];
    let max = arr[0];
    for (let ind = 1; ind < arr.length; ind++) {
        min = minimum(min, arr[ind]);
        max = maximum(max, arr[ind]);
    }
    return [max,min];
}

// 2. Sort an array of integers
function sortingArray(arr = []) {
    for (let index = 0; index < arr.length; index++){
        let minIndex = index;
        for (let ind = minIndex + 1; ind < arr.length; ind++){
            if (arr[minIndex] > arr[ind]) {
                minIndex = ind
            }
        }
        if(minIndex !== index){
            let temp = arr[minIndex];
            arr[minIndex] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}

// 3. Rotate an array by one position
// solution-1: right rotation
// function rotateRotateByOnePosition(arr = []) {
//     if(arr.length === 0) return [];
//     let rotate = [];
//     rotate.push(arr[arr.length - 1]);
//     for(let ind = 0; ind < arr.length-1; ind++){
//         rotate.push(arr[ind]);
//     }
//     return rotate;
// }

// solution-2: left rotation
function rotateRotateByOnePosition(arr = []) {
    if(arr.length === 0) return [];
    let rotate = [];
    for(let ind = 1; ind < arr.length; ind++){
        rotate.push(arr[ind]);
    }
    rotate.push(arr[0]);
    return rotate;
}

// 4. Find the second-largest element in an array
function secondLargest(arr = []) {
    if(arr.length === 0) return -1;
    let max = arr[0];
    let secondMax = -Infinity;
    for(let ind = 1; ind < arr.length; ind++){
        if(arr[ind] > max){
            secondMax = max;
            max = arr[ind];
        }else if(arr[ind] > secondMax && arr[ind] < max){
            secondMax = arr[ind];
        }
    }
    return secondMax;
}

// 5. Remove duplicates from the sorted array
// unsorted
// function removeDuplicates(arr = []) {
//     const unique = [];
    
//     for(let ind = 0; ind < arr.length; ind++){
//         for (let ind1 = 0; ind1 < ind; ind1++){
//             if(arr[ind] === arr[ind1]){
//                delete arr[ind]
//                 break;
//             }
//         }
//     }
//     let ind1 = 0;
//     for(let ind = 0; ind < arr.length; ind++){
//         if(arr[ind] !== undefined){
//            arr[ind1] = arr[ind];
//             ind1++;
//         }
//     }
//     arr.length = ind1;
//     return arr
// }

// sorting - fast and slow pointers
function removeDuplicates(arr = []) {
    let slow = 0;
    for(let fast = 1; fast < arr.length; fast++){
        if(arr[fast] != arr[fast-1]){
            slow++;
            arr[slow] = arr[fast];
        }
    }
    arr.length = slow + 1;
    return arr; 
}

// 6. Calculate the sum of elements in the array
function sumOfArray(arr = []) {
    let sum = 0;
    for(let ind = 0; ind < arr.length; ind++){
        sum += arr[ind];
    }
    return sum;
}

// 7. find the number of occurences of all the elements in the array
function countOccurences(arr=[]) {
    let freq = {};
    for (let value of arr) {
        freq[value] = (freq[value] || 0) + 1;
    }
    return freq;

}


// todo Post-Session Practice Questions:
// todo 1. Merge two sorted arrays.
function mergeTwoSortedArrays(arr1 = [], arr2 = []) {
    let merged = [];
    let i = 0;
    let j = 0;
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
// todo 2. Reverse the elements in an array.
function reverseArray(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
// todo 3. Rotate an array to the left by K positions.
function rotateRotateByLeft(arr = [],k=1) {
    if (arr.length === 0) return [];
    k = k % arr.length;
  let rotate = [];
  for (let ind = k; ind < arr.length; ind++) {
    rotate.push(arr[ind]);
  }
    for (let ind = 0; ind < k;ind++) {
        rotate.push(arr[ind]);
    }
  return rotate;
}
// todo 4. Search for an element in a sorted array.
function searchElement(arr = [],target) {
    for (let ind = 0; ind < arr.length; ind++){
        if (arr[ind] === target) {
          console.log("Element found at index:", ind); // print index
            return ind;
        }
    }
    return -1;
    
}
// todo 5. Find the cumulative sum of an array.
function cumulativeSum(arr = []) {
    let result = [];
    let sum = 0;
    for (let num of arr) {
        sum += num;
        result.push(sum);
    }
    return result
}
// todo 6. Calculate the product of all elements in an array.
function productOfArray(arr = []) {
    let product = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
}

// todo 7. Check if an array is a palindrome.
function isPalindromeArray(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// todo 8. Find the intersection of two arrays.
function intersectionOfTwoArrays(arr1 = [], arr2 = []) {
    let arr = new Set(arr1)
    let intersection = [];
    for(let num of arr2){
        if(arr.has(num)){
            intersection.push(num);
            arr.delete(num);
        }
    }
    return intersection;
}


module.exports = {
  minAndMax,
  sortingArray,
  rotateRotateByOnePosition,
  secondLargest,
  removeDuplicates,
  sumOfArray,
  countOccurences,
  mergeTwoSortedArrays,
  reverseArray,
  rotateRotateByLeft,
  searchElement,
  cumulativeSum,
  productOfArray,
  isPalindromeArray,
  intersectionOfTwoArrays,
};