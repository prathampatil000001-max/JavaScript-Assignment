// B] if...else Statement:


// 01]Write a program to check whether a number is even or odd.

// 02]Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

// 03]Write a program that checks whether a number is positive or negative.

// 04]Check if a student has passed or failed based on marks (pass mark = 35).

// 05]Write a program to check whether a given character is an uppercase letter or not.
// (Hint: Use character comparison)

// 06]Check if a number is divisible by 3 or not. Print appropriate messages.

// 07]Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

// 08]Check whether a given year is a leap year or not using the basic rule (divisible by 4).

// 09]Write a program to find the greater of two numbers using if...else.

// 10]Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).

// Assignment: if...else if...else & Nested if Statements

// 1. Check whether a number is even or odd
let num1 = 10;

if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Check voting eligibility
let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// 3. Check whether a number is positive or negative
let num2 = -5;

if (num2 >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// 4. Check whether student has passed or failed
let marks = 45;

if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// 5. Check whether a character is uppercase
let ch = "A";

if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not Uppercase Letter");
}


// 6. Check whether a number is divisible by 3
let num3 = 12;

if (num3 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}


// 7. Check password
let password = "admin123";

if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}


// 8. Check leap year
let year = 2024;

if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 9. Find greater of two numbers
let a = 25;
let b = 15;

if (a > b) {
    console.log("Greater number is " + a);
} else {
    console.log("Greater number is " + b);
}


// 10. Check positive, negative, or zero
let num4 = 0;

if (num4 > 0) {
    console.log("Positive");
} else if (num4 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
