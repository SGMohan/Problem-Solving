// Getting input via STDIN
const readline = require("readline");
const {
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
} = require("../Problem Solving/Session-1");
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
  const value = +userInput[0];
  console.log(squareOfNumber(value))

  //end-here
});
