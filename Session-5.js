//? Day 5: Searching Algorithms
//* Session Focus: Linear search and binary search techniques.
//? Session Practice Questions:
// 1. Implement a search algo to find an element in an array. (No sorted means linear search)
function linearSearch(arr, target) {
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] === target) {
            return ind;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));

// 2. Implement a search on a sorted array. (binary search)
function binarySearch(arr = [], target = 0) {
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    while (start <= end) {
        count++;
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return [mid, count]
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return [-1, count];
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

// 3. Find the first and last occurrence of a target in a sorted array.
// linear search approach
function firstAndLastOccurrence(arr = [], target = 0) {
    let first = -1;
    let last = -1;
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] === target) {
            if (first === -1) {
                first = ind;
            }
            last = ind;
        }
    }
    return [first, last];
}
console.log(firstAndLastOccurrence([1, 2, 3, 4, 5, 5, 5, 6, 7], 5));

// binary search approach
function firstAndLastOccurrenceBinary(arr = [], target = 0) {
    function binSearch(arr = [], target = 0, isFirst = true) {
        let start = 0;
        let end = arr.length - 1;
        let foundIndex = -1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (arr[mid] === target) {
                foundIndex = mid;
                if (isFirst) {
                    end = mid - 1; // continue searching in the left half
                } else {
                    start = mid + 1; // continue searching in the right half
                }
            }
            else if (arr[mid] > target) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return foundIndex;
    }
    const first = binSearch(arr, target, true);
    const last = binSearch(arr, target, false);
    return [first, last];
}
console.log(firstAndLastOccurrenceBinary([1, 2, 3, 4, 5, 5, 5, 6, 7], 5));

// 4. Search for a target in rotated sorted array.
function searchInRotatedSortedArray(arr = [], target = 0) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[start] < arr[mid]) { // left side is sorted
            if (target >= arr[start] && target < arr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else { // right side is sorted
            if (target > arr[mid] && target <= arr[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4


// 5. Count occurrences of a target using binary search.
function countOccurrences(arr = [], target = 0) { 
    const [first, last] = firstAndLastOccurrenceBinary(arr, target);
    if (first === -1) return 0;
    return last - first + 1;
}
console.log(countOccurrences([1, 2, 2, 2, 3, 4, 5], 2)); // Output: 3

// 6. Find the index where an element should be inserted in a sorted array.
function searchInsertionArray(arr = [], target = 0) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return start;
}
console.log(searchInsertionArray([1, 3, 5, 6], 2)); // Output: 1

// 7. Find the peak element in a mountain array.
function findPeakElement(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            end = mid-1;
        }
    }
    return start;
}
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7])); // Output: 6 (index of peak element 5)


// ? Post-Session Practice Questions:
// todo 1. Find the floor and ceiling of a target in a sorted array. (floor is the largest element <= target, ceiling is the smallest element >= target)
function floorAndCeiling(arr = [], target = 0) { 
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;
    let ceiling = -1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return { floor: arr[mid], ceiling: arr[mid]}
        }
        else if (arr[mid] < target) {
            floor = arr[mid];
            start = mid + 1;
        }
        else {
            ceiling = arr[mid];
            end = mid - 1;
        }
    }
    return {
        floor,
        ceiling
    };
}
console.log(floorAndCeiling([1, 2, 3, 4, 5, 6, 7],5)); // Output: { floor: 5, ceiling: 5 }
console.log(floorAndCeiling([1, 2, 3, 4, 5, 6, 7], 8)); // Output: { floor: 7, ceiling: -1 }


// todo 2. Find the smallest missing element in a sorted array.
function findSmallestMissingElement(arr = []) { 
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === mid) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return start;
}
console.log(findSmallestMissingElement([0, 1, 2, 6, 9])); // Output: 3
console.log(findSmallestMissingElement([0, 4, 5, 10, 11])); // Output: 1


// todo 3. Perform ternary search on a sorted array.( divide the array into 3 parts)
function ternarySearch(arr = [], target = 0) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid1 = Math.floor(start + (end - start) / 3);
        const mid2 = Math.floor(end - (end - start) / 3);
        if (arr[mid1] === target) {
            return mid1;
        }
        else if (arr[mid2] === target) {
            return mid2;
        }
        else if (arr[mid1] > target) {
            end = mid1 - 1;
        }
        else if (arr[mid2] < target) {
            start = mid2 + 1;
        }
        else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
    return -1;
}
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); // Output: 4


// todo 4. Find the minimum element in a rotated sorted array.
function findMinInRotatedSortedArray(arr = []) { 
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[end]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return arr[start];
}
console.log(findMinInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMinInRotatedSortedArray([3, 4, 5, 1, 2])); // Output: 1


// todo 5. Count the frequency of elements using binary search.
function countFrequency(arr = [], target = 0) {
    const [first, last] = firstAndLastOccurrenceBinary(arr, target);
    if (first === -1) return 0;
    return last - first + 1;
}
console.log(countFrequency([1, 2, 2, 2, 3, 4, 5], 2)); // Output: 3


// todo 6. Find the closest element to a target in a sorted array.
function findClosestElement(arr = [], target = 0) { 
    let start = 0;
    let end = arr.length - 1;
    let closest = arr[0];
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }
        else if(arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        const currentDiff = (arr[mid] - target) * (arr[mid] - target);
        const closestDiff = (closest - target) * (closest - target);
        if (currentDiff < closestDiff) {
            closest = arr[mid];
        }
    }
    return closest;
}
console.log(findClosestElement([1, 5, 7, 9, 11], 12)); // Output: 5


// todo 7. Implement an exponential search. (in an exponential search, we find a range where the target may exist and then perform binary search in that range and also the array should be sorted)
function exponentialSearch(arr = [], target = 0) {
    if (arr[0] === target) return 0;
    let found = 1;
    while (found < arr.length && arr[found] <= target) {
        found = found * 2;
    }
    const start = Math.floor(found / 2);
    // const end = Math.min(found, arr.length - 1);
    const end = found >= arr.length ? arr.length - 1 : found;
    return bSearch(arr, target, start, end,);

}
function bSearch(arr = [], target = 0, start = 0, end = arr.length - 1) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(exponentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // Output: 8


// todo 8. Find the index of a target in an infinite array. (infinite means we don't know the size of the array and is a exponential search problem)
function searchInInfiniteArray(arr = [], target = 0) { 
    let start = 0;
    let end = 1;
    while (arr[end] < target) {
        start = end;
        end = end * 2;
    }
    if (end >= arr.length) {
        end = arr.length - 1;
    }
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(searchInInfiniteArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Output: 9


// todo 9. Find the peak index in a bitonic array.
function findPeakInBitonicArray(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        else if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }   
        else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(findPeakInBitonicArray([1, 3, 8, 12, 4, 2])); // Output: 3 (index of peak element 12)