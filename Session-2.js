// Day 2:  Maths and Pattern
// pattern handled later
// 1. Calculate the factorial of a number
function factorial(num) {
    let fact = 1;
    for (let ind = 1; ind <= num; ind++) {
        fact = fact * ind;
    }
    return fact;
}

// 2. Generate the Fibonacci series up to N terms
function fibonacci(num) {
    const fibo = [];
    if (num >= 1) fibo.push(0);
    if (num >= 2) fibo.push(1);

    for (let ind = 2; ind < num;ind++) {
        fibo.push(fibo[ind - 1] + fibo[ind - 2]);
    }
    return fibo;
}

// 3. Sum of digits in a number
const floor = num => num - num % 1;
function sumOfDigits(num) {
    if (num < 0) {
        num = -num;
    }
    let sum = 0;
    while (num > 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = floor(num / 10);
    }
    return sum;
}

// 4. Check if a number is palindrome
function isPalindrome(num) {
    if (num < 0) {
        return false;
    }
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = (num - digit) / 10;
    }
    return original === reversed;
}

// 5. Check if a number is prime
// solution 1
function isPrime(num) {
    for (let factor = 2; factor < num; factor++) {
        if (num % factor == 0) {
            return false;
        }
    }
    return true;
}
// solution 2
// function isPrime(num) {
//     let count = 0;
//     if (num == 2) return true;
//     if (num % 2 == 0) return false;
//     for (let factor = 2; factor*factor <= num; factor++){
//         count++;
//         if (num % factor == 0) {
//             return [false , count]
//         }
//     }
//     return [true,count]
// }
// solution 3
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num == 2) return true;
//     if (num % 2 == 0) return false;
//     for (let factor = 3; factor * factor <= num; factor += 2) {
//         if (num % factor == 0) return false;
//     }
//     return true;
// }

// patterns basics
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//     let result = [];
//     for (let col = 0; col < n; col++) {
//       result.push("*");
//     }
//     console.log(result.join(""));
//   }
// }
// patterns(5);

// 6. Print a right-angled triangle pattern of asterisks.
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//     let result = [];
//       for (let col = 0; col < n; col++) {
//           if (row >= col) {
//               result.push("*");
//           }
//           else {
//               result.push(" ");
//           }
//     }
//     console.log(result.join(""));
//   }
// }
// patterns(5);


// 7. Print a hollow square pattern.
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//     let result = [];
//       for (let col = 0; col < n; col++) {
//           if (row == 0 || col == 0 || row == n - 1 || col == n - 1) {
//               result.push("*");
//           } else {
//               result.push(" ");
//         }
//     }
//     console.log(result.join(""));
//   }
// }
// patterns(10);


// todo Post-Session Practice Questions:
// todo 1. Calculate the GCD of two numbers.
function gcd(num1, num2) {
  if (num2 == 0) return num1;
  return gcd(num2, num1 % num2);
}


// todo 2. Find the LCM of two numbers.
function lcm(num1, num2) {
    if (num1 == 0 || num2 == 0) return 0;
  return (num1 * num2) / gcd(num1, num2);
}


// todo 3. Find all divisors of a number.
function divisors(num) {
    if (num < 0 ) num = -num
    const res = []
    for (let ind = 1; ind <= num; ind++){
        if (num % ind === 0) {
            res.push(ind);
        }
    }
    return res
}


// todo 4. Check if two numbers are coprime.
function coPrime(num1, num2) {
    return gcd(num1, num2) === 1;
}

// todo 5. Print a diamond pattern of stars.
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//     let result = [];
//     for (let col = 0; col < n + row; col++) {
//       if (col < n - row - 1) {
//         result.push(" ");
//       } else {
//         result.push("*");
//       }
//     }
//     console.log(result.join(""));
//     }
//     for (let row = n - 2; row >= 0; row--) {
//       let result = [];
//       for (let col = 0; col < n + row; col++) {
//         if (col < n - row - 1) {
//           result.push(" "); // leading spaces
//         } else {
//           result.push("*"); // stars
//         }
//       }
//       console.log(result.join(""));
//     }
// }
// patterns(5);


// todo 6. Print Pascal’s triangle up to N rows.
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//       let result = [];
//       let num = 1;
//       for (let col = 0; col <= row; col++) {
//         result.push(num);
//         num = num * (row - col) / (col + 1);
//     }
//     console.log(result.join(" "));
//   }
// }

// patterns(5);


// todo 7. Print a checkerboard pattern.
function patterns(n = 0) {
  for (let row = 0; row < n; row++) {
    let result = [];
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2 == 0) {
        result.push("*");
      } else {
        result.push(" ");
      }
    }
    console.log(result.join(""));
  }
}
patterns(8);



// todo 8. Generate a pyramid pattern of numbers.
// function pyramidPatterns(n = 0) {
//     for (let row = 0; row < n; row++) {
//       let result = "";
//         for (let col = 0; col < n-row; col++) {
//             result += " "
//         }
//         for (let num = 1; num <= row; num++) {
//             result += num + " ";
//         }
//         console.log(result.trimEnd());
//     }
// }
// pyramidPatterns(5);


// todo 9. Print an inverted triangle pattern of stars.
// function patterns(n = 0) {
//   for (let row = 0; row < n; row++) {
//     let result = [];
//     for (let col = 0; col < n; col++) {
//       if (col < n-row) {
//         result.push("*");
//       } else {
//         result.push(" ");
//       }
//     }
//     console.log(result.join(""));
//   }
// }
// patterns(5);

module.exports = {
  factorial,
  fibonacci,
  sumOfDigits,
  isPalindrome,
    isPrime,
  gcd,
  lcm,
  divisors,
  coPrime,
};