// Part II: While Loop
// Q1. Print Numbers
// Write a while loop to print numbers from 1 to 10.

// Q2. Sum of Natural Numbers
// Write a while loop to calculate the sum of the first 10 natural numbers.

// Q3. Multiplication Table
// Write a while loop to print the multiplication table of a given number from 1 to 10.

// Example: Input: 5

// Output: 5 x 1 = 5 5 x 2 = 10 ... 5 x 10 = 50

// Q4. Count the Digits
// Write a while loop to count the total number of digits in a given positive integer.

// Example: Input: 58372 Output: 5

// Q5. Reverse a Number
// Write a while loop to reverse the digits of a given positive integer.

// Example: Input: 12345 Output: 54321

// Q6. Sum of Digits
// Write a while loop to calculate the sum of all digits of a given number.

// Example: Input: 4729 Output: 22

// Q7. Print Numbers with Conditions
// Write a while loop to print all numbers between 1 and 100 that are divisible by both 3 and 5 but not by 7.

// Q8. Calculate Factorial
// Write a while loop to calculate the factorial of a given non-negative integer.

// Example: Input: 5 Output: 120

// Q9. Check a Palindrome Number
// Write a while loop to check whether a given number is a palindrome without converting it into a string.

// Example: Input: 121 Output: Palindrome number

// Q10. Convert Decimal to Binary
// Write a while loop to convert a positive decimal integer into its binary representation without using built-in methods such as toString(2).

// Example: Input: 13 Output: 1101

// Part III: Do-While Loop
// Q1. Print Numbers in Reverse
// Write a do-while loop to print numbers from 10 down to 1.

// Q2. Print Even Numbers
// Write a do-while loop to print all even numbers between 1 and 20.

// Q3. Sum of Natural Numbers
// Write a do-while loop to calculate the sum of the first n natural numbers.

// Example: Input: 5 Output: 15

// Q4. Product of Digits
// Write a do-while loop to calculate the product of all digits of a given positive integer.

// Example: Input: 234 Output: 24

// Q5. Find the First Digit
// Write a do-while loop to find the leftmost digit of a given positive integer.

// Example: Input: 58372 Output: 5

// Q6. Calculate a Power
// Write a do-while loop to calculate the power of a number without using Math.pow() or the exponentiation operator **.

// Example: Input: Base = 3, Exponent = 4 Output: 81

// Q7. Print Multiples with Conditions
// Write a do-while loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.

// Q8. Check a Palindrome Number
// Write a do-while loop to check whether a given positive integer is a palindrome without converting it into a string.

// Example: Input: 1221 Output: Palindrome number

// Q9. Find the Greatest Common Divisor (GCD)
// Write a do-while loop to find the greatest common divisor of two positive integers using the Euclidean algorithm.

// Example: Input: 48, 18 Output: 6

// Q10. Convert Decimal to Binary
// Write a do-while loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

// Example: Input: 13 Output: 1101

// Challenge: Handle the input 0 correctly as well.

// Q1. Print Numbers (1 to 10)

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// Q2. Sum of Natural Numbers

let p = 1;
let sum = 0;

while (p <= 10) {
    sum += i;
    i++;
}

console.log("Sum =", sum);
// Output: Sum = 55
// Q3. Multiplication Table

let n = 5;
let q = 1;

while (q <= 10) {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
}

// Q4. Count the Digits
// javascript
let d = 58372;
let count = 0;

while (d> 0) {
    count++;
    n = Math.floor(n / 10);
}

console.log(count);
// Output: 5
// Q5. Reverse a Number
// javascript
let k = 12345;
let reverse = 0;

while (k > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}

console.log(reverse);
// Output: 54321

// Q6. Sum of Digits
// javascript
let j = 4729;
let addition = 0;

while (j > 0) {
    let digit = j % 10;
    addition += digit;
    j = Math.floor(j/ 10);
}

console.log(sum);
// Output: 22

// Q7. Numbers Divisible by 3 and 5 but Not by 7
// javascript
let a = 1;

while (a<= 100) {
    if (a % 3 === 0 && a% 5 === 0 && a % 7 !== 0) {
        console.log(a);
    }
    i++;
}
// Output: 15, 30, 45, 60, 90
// Q8. Calculate Factorial
// javascript
let r = 5;
let factorial = 1;
let w = 1;

while (r <= n) {
    factorial *= w;
    r++;
}

console.log(factorial);
// Output: 120

// Q8. Calculate Factorial
javascript
let l = 5;
let fac = 1;
let t = 1;

while (i <= n) {
    factorial *= l;
    t++;
}

console.log(factorial);
// Output: 120

// Q9. Check a Palindrome Number
// javascript
let s= 121;
let original = n;
let retur = 0;

while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}

if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

// Q10. Convert Decimal to Binary
// javascript
let e = 13;
let binary = "";

while (e > 0) {
    let remainder = e % 2;
    binary = remainder + binary;
    e= Math.floor(n / 2);
}
console.log(binary);

