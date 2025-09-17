//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.
// 1. Reverse a string
function reverseStr(str = "") {
  const resArr = [];
  for (let ind = str.length - 1; ind >= 0; ind--) {
    resArr.push(str[ind]);
  }
  return resArr.join("");
}

// 2. Check if a string is a palindrome
// solution-1:
function isPalindromeUsingRev(str = "") {
  const reversedStr = reverseStr(str);
  return reversedStr === str;
}

// solution-2: two pointers algorithm
function isPalindrome(str = "") {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// 3. Count the vowels and consonants in a string
// solution-1:
function countVowelsAndConsonants(str = "") {
  let vowels = 0;
  let consonants = 0;
  for (let ind = 0; ind < str.length; ind++) {
    if (
      str[ind] === "a" ||
      str[ind] === "e" ||
      str[ind] === "i" ||
      str[ind] === "o" ||
      str[ind] === "u" ||
      str[ind] === "A" ||
      str[ind] === "E" ||
      str[ind] === "I" ||
      str[ind] === "O" ||
      str[ind] === "U"
    ) {
      vowels++;
    } else {
      consonants++;
    }
  }
  return {
    vowels,
    consonants,
  };
}

// solution-2:
function countVowelsAndConsonants(str = "") {
  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  for (let char of str) {
    if (vowels[char]) {
      vowelsCount++;
    }
    // this does not includes the spaces
    else if (/[a-zA-Z]/.test(char)) {
      consonantsCount++;
    }
  }
  return {
    vowelsCount,
    consonantsCount,
  };
}

// 4. Remove duplicates from a string
function removeDuplicates(str = "") {
  const uniqueArr = [];
  const uniqueSet = new Set();
  for (let ind = 0; ind < str.length; ind++) {
    if (!uniqueSet.has(str[ind])) {
      uniqueArr.push(str[ind]);
      uniqueSet.add(str[ind]);
    }
  }
  return uniqueArr.join("");
}

// 5. Convert a string to lowercase/uppercase
function toUpperCase(str = "") {
  const obj = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
  };
  const result = [];
  for (let char of str) {
    if (obj[char]) {
      result.push(obj[char]);
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

function toLowerCase(str = "") {
  // ASCII -> American Standard Code for Information & Interchanged
  // 32 - is the difference of alphabets - small letters
  const res = [];
  for (let ind in str) {
    if (/[A-Z]/.test(str[ind])) {
      res.push(String.fromCharCode(str.charCodeAt(ind) + 32));
    } else {
      res.push(str[ind]);
    }
  }
  return res.join("");
}

// 6. Find the longest word in a sentence.
function longestWord(str = "") {
  const words = str.split(" ");
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// 7. Find all substrings of a given string
function findAllSubstrings(str = "") {
  const substrings = [];
  for (let ind = 0; ind < str.length; ind++) {
    let substr = [];
    for (let ind1 = ind; ind1 < str.length; ind1++) {
      substr.push(str[ind1]);
      substrings.push(substr.join(""));
    }
  }
  return substrings;
}

// ? Post-Session Practice Questions:
// todo 1. Concatenate two strings.
function concatStr(str1 = "", str2 = "") {
  return str1 + str2;
}

// todo 2. Find the frequency of each character in a string.
function frequencyOfChar(str = "") {
  const freq = {};
  for (let char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}

// todo 3. Replace spaces in a string with %20.
function replaceSpaces(str = "") {
  let res = "";
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] === " ") {
      res += "%20";
    } else {
      res += str[ind];
    }
  }
  return res;
}

// todo 4. Check if a string is an anagram of another.
// solution-1:
// function isAnagram(str1 = "", str2 = "") {
//   if (str1.length !== str2.length) return false;
//   const freq1 = frequencyOfChar(str1);
//   const freq2 = frequencyOfChar(str2);
//   for (let key in freq1) {
//     if (freq1[key] !== freq2[key]) return false;
//   }
//   return true;
// }

// solution-2:
function isAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  const frequency = {};
  for (let char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  return true;
}

// todo 5. Count the number of words in a sentence.
function countWords(str = "") {
  let count = 0;
  let inword = false;
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] !== " " && !inword) {
      count++;
      inword = true;
    } else if (str[ind] === " ") {
      inword = false;
    }
  }
  return count;
}
// todo 6. Find the first non-repeating character in a string.
function firstNonRepeatingChar(str = "") {
  const frequency = {};
  for (let char of str) {
    if (!/[a-z0-9]/i.test(char)) continue;
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char of str) {
    if (frequency[char] === 1) return char;
  }
  return null;
}

// todo 7. Remove all vowels from a string.
function removeVowels(str = "") {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let result = [];
  for (let char of str) {
    if (!vowels.has(char)) {
      result.push(char);
    }
  }
  return result.join(" ");
}

// todo 8. Find the shortest word in a sentence.
function shortestWord(str = "") {
  const words = str.split(/\s+/);
  let shortest = words[0];
  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}

// todo 9. Count occurrences of a substring within a string.
function countOccurences(str = "", substr = "") {
  if (substr == "") return 0;
  let count = 0;

  for (let ind = 0; ind <= str.length; ind++) {
    let match = true;
    for (let ind1 = 0; ind1 < substr.length; ind1++) {
      if (str[ind + ind1] !== substr[ind1]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  return count;
}

module.exports = {
  reverseStr,
  isPalindromeUsingRev,
  isPalindrome,
  countVowelsAndConsonants,
  removeDuplicates,
  toUpperCase,
  toLowerCase,
  longestWord,
  findAllSubstrings,
  concatStr,
  frequencyOfChar,
  replaceSpaces,
  isAnagram,
  countWords,
  firstNonRepeatingChar,
  removeVowels,
  shortestWord,
  countOccurences,
};
