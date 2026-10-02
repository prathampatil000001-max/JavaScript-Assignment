// Assignment : Loops in JavaScript
// Part I] - For Loop


//01] Given an array of temperatures [28, 32, 25, 40, 18, 35], use a for loop to count how many days were hotter than 30°C.
// 02] Write a for loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).
// 03] Create a for loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.
// 04] Given the string "JavaScript", use a for loop to create a new string that contains only the consonants (remove vowels).
// 05] Write a for loop that finds the second-largest number in an array of positive integers without using any sorting method.
// 06] Use a for loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.
// 07]   Print the following series using a single for loop:
// 1 2 4 8 16 32 64 128
// 08] Write a for loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
// 09] Given an array of student scores [45, 78, 90, 32, 56, 88], use a for loop to calculate the average and also count how many students scored above the average.
// 10] Write a for loop that converts a decimal number to its binary representation (without using built-in methods like toString(2)).

//--------- Q1-----------//

let temperatures = [28, 32, 25, 40, 18, 35];
let countHotDays = 0;
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 30) {
        countHotDays++;
    }
}
console.log("Number of hot days:", countHotDays);

//---------- Q2---------//
let number = 4729;
let sumOfDigits = 0;
for (let i = 0; i < number.toString().length; i++) {
    sumOfDigits += parseInt(number.toString()[i]);
}
console.log("Sum of digits:", sumOfDigits);

// -------Q3---------//
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
        console.log(i);
    }
}
// --------Q4---------//
let str = "JavaScript";
let consonants = "";
for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str[i])) {
        consonants += str[i];
    }
}
console.log("Consonants:", consonants);

// --------Q5---------//
let numbers = [12, 45, 67, 23, 89, 34];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }
}
console.log("Second-largest number:", secondLargest);
// --------Q6---------//
let num = 28;
let sumOfDivisors = 0;
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sumOfDivisors += i;
    }
}
console.log("Sum of divisors:", sumOfDivisors);
if (sumOfDivisors === num) {
    console.log(num, "is a perfect number.");
} else {
    console.log(num, "is not a perfect number.");
}
// --------Q7---------//
let series = "";
for (let i = 0; i < 8; i++) {
    series += Math.pow(2, i) + " ";
}
console.log("Series:", series);
// --------Q8---------//
let fib = [0, 1];
for (let i = 2; i < 20; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("First 20 Fibonacci numbers:", fib);
// --------Q9---------//
let scores = [45, 78, 90, 32, 56, 88];
let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}
let averageScore = totalScore / scores.length;
let countAboveAverage = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > averageScore) {
        countAboveAverage++;
    }
}
console.log("Average score:", averageScore);
console.log("Number of students above average:", countAboveAverage);
// --------Q10---------//
let decimalNumber = 42;
let binaryRepresentation = "";
for (let i = 0; i < 8; i++) {
    binaryRepresentation = (decimalNumber % 2) + binaryRepresentation;
    decimalNumber = Math.floor(decimalNumber / 2);
}
console.log("Binary representation:", binaryRepresentation);
