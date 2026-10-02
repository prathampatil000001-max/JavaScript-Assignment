// B]break inside a for Loop
// 01] Write a for loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using break.
// 02] Simulate a simple password checker: keep asking the user for a password (using a for loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and break. If all 5 attempts fail, print “Account locked”.
// 03] Write a for loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using break.
// 04] Given an array of names, use a for loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with break.
// 05] Create a for loop that prints numbers from 1 to 50. Stop completely (break) as soon as you encounter a number that is both a perfect square and greater than 20.

// --------- Q1-----------//
let arr = [1, 3, 5, 7, 9, 11];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        console.log("Found 7 at index:", i);
        break;
    }
}
// -------- Q2-----------//
let correctPassword = "password123";
for (let attempts = 0; attempts < 5; attempts++) {
    let userInput = prompt("Enter password:");
    if (userInput === correctPassword) {
        console.log("Access granted");
        break;
    }
    if (attempts === 4) {
        console.log("Account locked");
    }
}
// -------- Q3-----------//
let sum = 0;
for (let i = 1; ; i++) {
    sum += i;
    if (sum > 100) {
        console.log("Last number added before exceeding 100:", i - 1);
        break;
    }
}
// -------- Q4-----------//
let names = ["Alice", "Bob", "Sam", "Charlie", "Steve"];
for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("S")) {
        console.log("First name starting with S:", names[i]);
        break;
    }
}
// -------- Q5-----------//
for (let i = 1; i <= 50; i++) {
    if (Math.sqrt(i) % 1 === 0 && i > 20) {
        console.log("Encountered perfect square greater than 20:", i);
        break;
    }
    console.log(i);
}

