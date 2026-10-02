// C]continue inside a for Loop:-


// 01] Print all numbers from 1 to 30, but skip every number that is divisible by 4 using continue.
// 02] Given an array of mixed positive and negative numbers, use a for loop with continue to calculate the sum of only the positive numbers.
// 03] Write a for loop that prints every character of the string "Hello World", but skips all spaces using continue.
// 04] Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use continue).
// 05] Given an array of ages [12, 18, 25, 15, 30, 17, 22], use a for loop with continue to print only the ages of people who are eligible to vote (age ≥ 18).
// // --------- Q1-----------//
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}
// -------- Q2-----------//
let mixedNumbers = [-5, 10, -3, 7, -1, 8];
let positiveSum = 0;
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] < 0) {
        continue;
    }
    positiveSum += mixedNumbers[i];
}
console.log("Sum of positive numbers:", positiveSum);
// -------- Q3-----------//
let helloStr = "Hello World";
for (let i = 0; i < helloStr.length; i++) {
    if (helloStr[i] === " ") {
        continue;
    }   
console.log(helloStr[i]);
}
// -------- Q4-----------//
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;

    if (product % 5 === 0) {
        continue;
    }
    console.log(`6 x ${i} = ${product}`);
}
// -------- Q5-----------//
let ages = [12, 18, 25, 15, 30, 17, 22];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        continue;
    }
    console.log("Eligible to vote:", ages[i]);
} 