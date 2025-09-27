//? Day 6: Sorting Algorithms
//* Session Focus: Introduction to sorting algorithms: bubble sort, selection sort, and insertion sort.
//? Session Practice Questions:
// 1. Implement bubble sort on an array of integers.
function bubbleSort(arr = []) { 
    let swapped = false;
    let itr = 0;
    let count = 0;
    do {
        swapped = false;
        for (let ind = 1; ind < arr.length - itr; ind++) {  
            if (arr[ind - 1] > arr[ind]) {
                count++;
                // swap
                let temp = arr[ind - 1];
                arr[ind - 1] = arr[ind];
                arr[ind] = temp;
                swapped = true;
            }
        }
        itr++;
    }
    while (swapped);
    console.log(itr);
    console.log("Count: ", count);
    return arr;
}
console.log(bubbleSort([5, 3, 2, 8, 4])); // Output: [2, 3, 4, 5, 8]


// 2. Sort an array using selection sort.
function selectionSort(arr = []) {
    let count = 0;
    let itr = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[ind1] < arr[minInd]) {
                minInd = ind1;
            }
        }
        // swap
        if (minInd !== ind) {
            // let temp = arr[ind];
            // arr[ind] = arr[minInd];
            // arr[minInd] = temp;
            [arr[ind], arr[minInd]] = [arr[minInd], arr[ind]];
            count++;
        }
        itr++;
    }
    console.log(itr);
    console.log("Count: ", count);
    return arr;
}
console.log(selectionSort([5, 3, 6, 2])); // Output: [2, 3, 5, 6]


// 3. Implement insertion sort on an array of integers.(no swapping, only shifting elements)
function insertionSort(arr = []) {
    for (let ind = 1; ind < arr.length; ind++) {
        let temp = arr[ind];
        let ind1;
        for (ind1 = ind - 1; ind1 >= 0; ind1--) {
            if (arr[ind1] > temp) {
                arr[ind1 + 1] = arr[ind1];
            } else {
                break;
            }
        }   
        arr[ind1 + 1] = temp;
    }
    return arr;

}
console.log(insertionSort([5, 4, 3, 2, 1])); // Output: [2, 3, 5, 6]

// 4. Sort an array of integers in descending order
// using insertion sort.
function insertionSortDesc(arr = []) {
    for (let ind = 1; ind < arr.length; ind++) {
        let temp = arr[ind];
        let ind1;
        for (ind1 = ind - 1; ind1 >= 0; ind1--) {
            if (arr[ind1] < temp) {
                arr[ind1 + 1] = arr[ind1];
            } else {
                break;
            }
        }   
        arr[ind1 + 1] = temp;
    }
    return arr;
}
console.log(insertionSortDesc([2, 3, 1, 5, 7, 8])); // Output: [5, 4, 3, 2, 1]

// using selection sort
function selectionSortDesc(arr = []) {
  let count = 0;
  let itr = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] > arr[minInd]) {
        minInd = ind1;
      }
    }
    // swap
    if (minInd !== ind) {
      // let temp = arr[ind];
      // arr[ind] = arr[minInd];
      // arr[minInd] = temp;
      [arr[ind], arr[minInd]] = [arr[minInd], arr[ind]];
      count++;
    }
    itr++;
  }
  console.log(itr);
  console.log("Count: ", count);
  return arr;
}
console.log(selectionSortDesc([5, 3, 6, 2])); // Output: [6, 5, 3, 2]

// using bubble sort
function bubbleSortDesc(arr = []) {
  let swapped = false;
  let itr = 0;
  let count = 0;
  do {
    swapped = false;
    for (let ind = 1; ind < arr.length - itr; ind++) {
      if (arr[ind - 1] < arr[ind]) {
        count++;
        // swap
        let temp = arr[ind - 1];
        arr[ind - 1] = arr[ind];
        arr[ind] = temp;
        swapped = true;
      }
    }
    itr++;
  } while (swapped);
  console.log(itr);
  console.log("Count: ", count);
  return arr;
}
console.log(bubbleSortDesc([5, 3, 2, 8, 4])); // Output: [8, 5, 4, 3, 2]


// 5. Find the median of a sorted array.
function findMedian(arr = []) {
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    return arr[Math.floor(arr.length / 2)];
}

console.log(findMedian([1, 2, 3, 4, 5])); // Output: 3
console.log(findMedian([1, 2, 3, 4, 5, 6])); // Output: 3.5


// 6. Sort an array of strings by their lengths.
// using bubble sort
function sortByLength(arr = []) {
   let swapped = false;
   do {
     swapped = false;
     for (let ind = 1; ind < arr.length; ind++) {
       if (arr[ind - 1].length > arr[ind].length) {
         // swap
         let temp = arr[ind - 1];
         arr[ind - 1] = arr[ind];
         arr[ind] = temp;
         swapped = true;
       }
     }
   } while (swapped);
   return arr;
}

// using selection sort
function sortByLengthSelection(arr = []) {
    for (let ind = 0; ind < arr.length; ind++) {
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[ind1].length < arr[minInd].length) {
                minInd = ind1;
            }
        }
        // swap
        if (minInd !== ind) {
            [arr[ind], arr[minInd]] = [arr[minInd], arr[ind]];
        }
    }
    return arr;
}

console.log(sortByLength(["apple", "banana", "kiwi", "cherry", "blueberry"])); // Output: ["kiwi", "apple", "banana", "cherry", "blueberry"]
console.log(sortByLengthSelection(["apple", "banana", "kiwi", "cherry", "blueberry"])); // Output: ["kiwi", "apple", "banana", "cherry", "blueberry"]


// 7. Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
function dutchNationalFlag(arr = []) { 
    let left = 0;
    let mid = 0;
    let right = arr.length - 1;
    while (mid <= right) { 
        if (arr[mid] === 1) {
            mid++;
        }
        else if (arr[mid] === 0) {
            [arr[mid], arr[left]] = [arr[left], arr[mid]];
            left++;
            mid++;
        } else {
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }

    }
    return arr;
}
console.log(dutchNationalFlag([2, 0, 1, 2, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]

// ? Post-Session Practice Questions:
// todo 1. Sort an array using merge sort.
function mergeSort(arr = []) { 
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);

    function merge(left, right) {
        const result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}

console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]


// todo 2. Implement quicksort on an array of integers.
function quickSort(arr = []) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]


// todo 3. Sort a nearly sorted array (where each element is at most k places away from its target position).
function sortNearlySorted(arr = [], k) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(sortNearlySorted([3, 2, 1, 5, 4, 6], 2)); // Output: [1, 2, 3, 4, 5, 6]

// todo 4. Perform a bucket sort on an array of decimals.
function bucketSort(arr) {
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);
  for (let x of arr) {
    const idx = Math.floor(x * n);
    buckets[idx].push(x);
  }
  // insertion sort each bucket
  for (let b of buckets) {
    for (let i = 1; i < b.length; i++) {
      let key = b[i],
        j = i - 1;
      while (j >= 0 && b[j] > key) {
        b[j + 1] = b[j];
        j--;
      }
      b[j + 1] = key;
    }
  }
  return buckets.flat();
}
console.log(bucketSort([0.42, 0.32, 0.23, 0.52, 0.25, 0.47])); // Output: [0.23, 0.25, 0.32, 0.42, 0.47, 0.52]


// todo 5. Sort an array of integers by frequency of elements.
function frequencySort(arr) {
  const freqMap = {};
  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }
  return arr.sort((a, b) => {
    const freqDiff = freqMap[b] - freqMap[a];
    return freqDiff !== 0 ? freqDiff : a - b;
  });
}
console.log(frequencySort([3, 1, 2, 2, 3, 3, 1])); // Output: [3, 3, 3, 1, 1, 2, 2]

// todo 6. Sort an array of strings lexicographically.
function lexicographicSort(arr) {
  // simple bubble sort comparing strings character by character (ASCII values)
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(lexicographicSort(["banana", "apple", "cherry", "date"])); // Output: ["apple", "banana", "cherry", "date"]

// todo 7. Sort an array using heap sort.
function heapSort(arr) {
  const n = arr.length;
  // build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  // extract elements
  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(arr, end, 0);
  }
  return arr;

  function heapify(a, size, i) {
    let largest = i,
      l = 2 * i + 1,
      r = 2 * i + 2;
    if (l < size && a[l] > a[largest]) largest = l;
    if (r < size && a[r] > a[largest]) largest = r;
    if (largest !== i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      heapify(a, size, largest);
    }
  }
}

console.log(heapSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]

// todo 8. Sort a matrix row-wise and column-wise.
function sortMatrix(matrix) {
    const flat = matrix.flat();
    flat.sort((a, b) => a - b);
    const n = matrix.length;
    const m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = flat[i * m + j];
        }
    }
    return matrix;
}

console.log(sortMatrix([[5, 3, 8], [4, 2, 1], [7, 6, 9]])); 
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// todo 9. Find the kth smallest element in an array.
function findKthSmallest(arr, k) {
  function partition(l, r) {
    const pivot = arr[r];
    let i = l;
    for (let j = l; j < r; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
  }
  let l = 0,
    r = arr.length - 1;
  k--; // 0-based
  while (l <= r) {
    const p = partition(l, r);
    if (p === k) return arr[p];
    else if (p < k) l = p + 1;
    else r = p - 1;
  }
}

console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7


// todo 10. Sort an array containing negative and positive numbers, with negatives coming first.
// without ordering the negative and positive numbers
function negativesFirst(arr) {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== left) [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
    }
  }
  return arr;
}
console.log(negativesFirst([3, -2, -5, 1, 4, -1])); // Output: [-2, -5, -1, 1, 4, 3]

// with ordering the negative and positive numbers
function negativesFirstSorted(arr) {
  const negatives = [];
  const positives = [];
  
  // Separate into two arrays
  for (let num of arr) {
    if (num < 0) negatives.push(num);
    else positives.push(num);
  }

  //insertion sort 
  function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
      let key = a[i], j = i - 1;
      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
      }
      a[j + 1] = key;
    }
  }

  insertionSort(negatives);
  insertionSort(positives);

  return negatives.concat(positives);
}

console.log(negativesFirstSorted([3, -2, -5, 1, 4, -1])); // Output: [-5, -2, -1, 1, 3, 4]


    