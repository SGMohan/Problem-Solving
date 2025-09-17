// Getting input via STDIN
const readline = require("readline");
// const {
//   positiveOrNegative,
//   sumOfTwoIntegers,
//   maxAndMin,
//   countDigits,
//   onlyAlphabets,
//   areaOfCircle,
//   isVowel,
//   difference,
//   perimeterOfRectangle,
//   largestOfNumber,
//   averageOfThreeNumber,
//   countVowels,
//   isUppercase,
//   reverseString,
//   oddOrEven,
//   squareOfNumber,
// } = require("../Problem Solving/Session-1");
// const {
//   factorial,
//   fibonacci,
//   sumOfDigits,
//   isPalindrome,
//   isPrime,
//   gcd,
//   lcm,
//   divisors,
//   coPrime,
// } = require("../Problem Solving/Session-2");
const { reverseStr, isPalindromeUsingRev, isPalindrome, countVowelsAndConsonants, removeDuplicates, toUpperCase, toLowerCase, longestWord, findAllSubstrings, concatStr, countWords, replaceSpaces, shortestWord, frequencyOfChar, isAnagram, firstNonRepeatingChar, removeVowels, countOccurences } = require("./Session-3");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  // 1. if an number is positive or negative
  // const value = +userInput[0];
  // console.log(positiveOrNegative(value))

  // 2. sum of two integers
  // const value1 = +userInput[0];
  // const value2 = +userInput[1];
  // console.log(sumOfTwoIntegers(value1, value2))

  // 3. Max and min of three number
  // const [val1, val2, val3] = userInput[0].split(" ").map(Number);
  // console.log(maxAndMin(val1,val2,val3))

  // 4. Count digits in a number
  // const value = +userInput[0];
  // console.log(countDigits(value));

  // 5. Check the alphabets in a string
  // const value = userInput[0];
  // console.log(onlyAlphabets(value));

  // 6. Area of a circle
  // const radius = Number(+userInput[0]);
  // console.log(areaOfCircle(radius));

  // 7. Is Vowel or not
  // const value = userInput[0];
  // console.log(isVowel(value));

  // TODO
  // 1. differenece between two integers
  // const value1 = +userInput[0];
  // const value2 = +userInput[1];
  // console.log(difference(value1, value2));

  // 2. Odd or even
  // const value = +userInput[0];
  // console.log(oddOrEven(value));

  // 3. Perimeter of rectangle
  // const value1 = +userInput[0];
  // const value2 = +userInput[1];
  // console.log(perimeterOfRectangle(value1, value2));

  // 4. Largest of the numbers
  // const [val1, val2, val3, val4] = userInput[0].split(" ").map(Number);
  // console.log(largestOfNumber(val1, val2, val3, val4));

  // 5. Average of three numbers
  // const [val1, val2, val3] = userInput[0].split(" ").map(Number);
  // console.log(averageOfThreeNumber(val1, val2, val3));

  // 6. Count the vowels in string
  // const value = userInput[0];
  // console.log(countVowels(value));

  // 7. Is Uppercase or not
  // const value = userInput[0];
  // console.log(isUppercase(value));

  // 8. Reverse a string
  // const value = userInput[0];
  // console.log(reverseString(value));

  // 9. Square of number
  // const value = +userInput[0];
  // console.log(squareOfNumber(value))

  // Session-2
  // 1. Factorial of a number
  // const value = +userInput[0];
  // console.log(factorial(value));

  // 2. Fibonacci series up to N terms
  // const value = +userInput[0];
  // console.log(...fibonacci(value));

  // 3. Sum of Digits in a number
  // const value = +userInput[0];
  // console.log(sumOfDigits(value));

  // 4. isPalindrome
  // const value = +userInput[0];
  // console.log(isPalindrome(value));

  // 5. isPrime
  // const value = +userInput[0];
  // console.log(isPrime(value));

  // TODO-SESSION-2
  // 1. Calculate the GCD of two numbers.
  // const value1 = +userInput[0];
  // const value2 = +userInput[1];
  // console.log(gcd(value1, value2));

  // 2. Find the LCM of two numbers.
  // const [val1, val2] = userInput[0].split(" ").map(Number);
  // console.log(lcm(val1,val2))

  // 3. Find all divisors of a number.
  // const value = +userInput[0];
  // console.log(...divisors(value));

  // 4. Check if two numbers are coprime.
  // const [val1, val2] = userInput[0].split(" ").map(Number);
  // console.log(coPrime(val1, val2));

  // Session-3:
  // 1. reverse a string
  // const value = userInput[0];
  // console.log(reverseStr(value));

  // 2. check the string is a palindrome
  // const value = userInput[0];
  // console.log(isPalindromeUsingRev(value));
  // console.log(isPalindrome(value));

  // 3. Count the vowels and consonants in a string
  // const value = userInput[0];
  // console.log(countVowelsAndConsonants(value));

  // 4. remove duplicates from a string
  // const value = userInput[0];
  // console.log(removeDuplicates(value));

  // 5. Convert a string to lowercase/uppercase
  // const value = userInput[0];
  // // console.log(toUpperCase(value));
  // console.log(toLowerCase(value));

  // 6. find the longest word in a sentence
  // const value = userInput[0];
  // console.log(longestWord(value));  

  // 7. find all substrings of a given string
  // const value = userInput[0];
  // console.log(findAllSubstrings(value));
  
  // TODO-SESSION-3:
  // 1. Concatenate two strings
  // const val1 = userInput[0];
  // const val2 = userInput[1];
  // console.log(concatStr(val1, val2));
  
  // 2. find the frequency of each character in a string
  // const value = userInput[0];
  // console.log(frequencyOfChar(value));
  
  // 3. replace spaces with %20
  // const value = userInput[0];
  // console.log(replaceSpaces(value));
  
  // 4. Check the string is a anagram or not
  // const val1 = userInput[0];
  // const val2 = userInput[1];
  // console.log(isAnagram(val1, val2));
  
  // 5.Count the number of words in a sentence
  // const value = userInput[0];
  // console.log(countWords(value));
  
  // 6. Find the first non repeating character from a string
  // const value = userInput[0];
  // console.log(firstNonRepeatingChar(value));
  
  
  // 7. remove vowels from a string
  // const value = userInput[0];
  // console.log(removeVowels(value));
  
  // 8. find the shortest word in a sentence
  // const value = userInput[0];
  // console.log(shortestWord(value));
  
  
  // 9. Count occurrences of a substring within a string.
  const val1 = userInput[0];
  const val2 = userInput[1];
  console.log(countOccurences(val1, val2));
  //end-here
});
