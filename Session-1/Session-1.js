// Understanding the problem statement and systematic solutions
// 1. Determine if a number is a positive or negative
function positiveOrNegative(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}


// 2. Find the sum of two integers
function sumOfTwoIntegers(num1, num2) {
  return num1 + num2;
}

// 3. Identify the maximum and minimum of three numbers.
// solution-1:
// function maxAndMin(num1, num2, num3) {
//     let max;
//     let min;
//     if (num1 <= num2) {
//         if (num2 <= num3) {
//             max = num3;
//         } else {
//             max = num2;
//         }
//     }
//     else {
//         if (num1 <= num3) {
//             max = num3;
//         } else {
//             max = num1;
//         }
//     }
//     if (num1 >= num2) {
//       if (num2 >= num3) {
//         min = num3;
//       } else {
//         min = num2;
//       }
//     } else {
//       if (num1 >= num3) {
//         min = num3;
//       } else {
//         min = num1;
//       }
//     }
//      return { max: max, min: min };
// }

// solution-2:
// function maxAndMin(num1, num2, num3) {
//     let max;
//     let min;
//     if(num1<=num2 && num1<=num3){
//         min=num1;
//     }
//     else if(num2<=num1 && num2<=num3){
//         min=num2;
//     }
//     else{
//         min=num3;
//     }
//     if(num1>=num2 && num1>=num3){
//         max=num1;
//     }
//     else if(num2>=num1 && num2>=num3){
//         max=num2;
//     }
//     else{
//         max=num3;
//     }
//     return {max:max,min:min}
// }

//solution-3:
const max = (num1, num2) => (num1 > num2 ? num1 : num2);
const min = (num1, num2) => (num1 < num2 ? num1 : num2);
function maxAndMin(num1, num2, num3) {
  const obj = {
    max: max(max(num1, num2), num3),
    min: min(min(num1, num2), num3),
  };
  obj.mid = num1 + num2 + num3 - obj.max - obj.min;
  return obj;
}


// 4. Count the number of digits in a number.
const floor = (val) => val - (val % 1);
function countDigits(number) {
  let count = 0;
  while (number > 0) {
    number = floor(number / 10); // Math.floor(number/10)
    count++;
  }
  return count;
}


// 5. Check if a string contains only alphabets.
function onlyAlphabets(str) {
  for (let char of str) {
    if (!((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))) {
      return "NO";
    }
  }
  return "YES";
}


//6.Calculate the area of a circle with a given radius.
function areaOfCircle(radius) {
  return (22 / 7) * radius * radius;
}


//7.Check if a character is a vowel.
function isVowel(char) {
  return char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
    ? "YES"
    : "NO";
}


// todo Post-Session Practice Questions:
// 1. todo Calculate the difference between two integers.
// solution-1: //no sign differs
// function difference(num1, num2) {
//   return num1 - num2;
// }

// solution-2: //result in positive
// function difference(num1, num2) {
//     if (num1 >= num2) {
//       return num1 - num2;
//     } else {
//       return num2 - num1;
//     }
// }

// solution-3:  //result in positive
function difference(num1, num2) {
  return num1 >= num2 ? num1 - num2 : num2 - num1;
}


// 2. todo Check if a number is even or odd.
function oddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// 3. todo Calculate the perimeter of a rectangle.
function perimeterOfRectangle(length, breadth) {
  return 2 * (length + breadth);
}

// 4. todo Find the largest of four numbers.
function largestOfNumber(num1, num2, num3, num4) {
    let largest = num1; 

    if (num2 > largest) largest = num2;
    if (num3 > largest) largest = num3;
    if (num4 > largest) largest = num4;

    return largest;
}

// 5. todo Calculate the average of three numbers.
function averageOfThreeNumber(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// 6. todo Count the number of vowels in a string.
function countVowels(str) {
    let count = 0;
    for(let char of str){
        if (
          char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u" ||
          char === "A" ||
          char === "E" ||
          char === "I" ||
          char === "O" ||
          char === "U"
        ) {
          count++;
        }
    }
    return count
}

// 7. todo Determine if a character is uppercase.
function isUppercase(char) {
    if (char >= "A" && char <= "Z") {
      return "Yes";
    }
    return "No"
}

// 7. todo Print the reverse of a string.
function reverseString(str) {
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr.split("").join(" ");
}


// 8. todo Find the square of a number.
function squareOfNumber(num) {
  return num * num;
}

module.exports = {
  positiveOrNegative,
  sumOfTwoIntegers,
  maxAndMin,
  countDigits,
  onlyAlphabets,
  areaOfCircle,
  isVowel,
  difference,
  squareOfNumber,
  perimeterOfRectangle,
  largestOfNumber,
  averageOfThreeNumber,
  countVowels,
  isUppercase,
  reverseString,
  oddOrEven,
};
