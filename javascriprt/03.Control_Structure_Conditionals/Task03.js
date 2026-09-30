// C] if...else if...else Statement:


// 01]Write a program that takes a month number (1–12) and prints the corresponding season:
// Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

// 02]Create a simple tax calculator based on income:
// Income < 3,00,000 → No tax
// 3,00,000 – 7,00,000 → 5% tax
// 7,00,000 – 10,00,000 → 10% tax
// Above 10,00,000 → 15% tax
// Print the tax amount.

// 03]Write a program that checks a student’s score and prints:
// “Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

// 04]Check the speed of a vehicle and print:
// “Slow” (below 40), “Normal” (40–80), “Fast” (above 80).

// 05]Write a program that checks a person’s height (in cm) and prints:
// “Short” (< 150), “Average” (150–170), “Tall” (> 170).

// 06]Check the day number (1–7) and print whether it is a Weekday or Weekend
// (1 to 5 = Weekday, 6 and 7 = Weekend).

// 07]Write a program that calculates electricity bill based on units:
// 0–50 units → ₹2 per unit
// 51–150 units → ₹4 per unit
// Above 150 units → ₹6 per unit
// Print the total bill.

// 08]Create a program that checks a student’s attendance percentage and prints:
// “Excellent” (≥ 90), “Good” (75–89), “Satisfactory” (50–74), “Poor” (< 50).

// 09]Write a program that takes three subject marks and finds the highest mark among them using if...else if...else.

// 10]Check a number and print one of the following:
// “Positive Even”, “Positive Odd”, “Negative Even”, “Negative Odd”, or “Zero”.


///// ---------Q01 ANS:-------------///////

// 1. Month Number -> Season
let month = 4;

if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
    console.log("Summer");
} else if (month === 6 || month === 7 || month === 8) {
    console.log("Monsoon");
} else if (month === 9 || month === 10 || month === 11) {
    console.log("Autumn");
} else {
    console.log("Invalid month");
}


// 2. Tax Calculator
let income = 800000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax = ₹" + tax);


// 3. Student Score
let score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}


// 4. Vehicle Speed
let speed = 70;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}


// 5. Height
let height = 175;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}


// 6. Day Number
let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day === 6 || day === 7) {
    console.log("Weekend");
} else {
    console.log("Invalid day");
}


// 7. Electricity Bill
let units = 120;
let bill;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Electricity Bill = ₹" + bill);


// 8. Attendance
let attendance = 85;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}


// 9. Highest of Three Marks
let mark1 = 75;
let mark2 = 88;
let mark3 = 82;
let highest;

if (mark1 >= mark2 && mark1 >= mark3) {
    highest = mark1;
} else if (mark2 >= mark1 && mark2 >= mark3) {
    highest = mark2;
} else {
    highest = mark3;
}

console.log("Highest Mark = " + highest);


// 10. Positive/Negative and Even/Odd
let number = -7;

if (number === 0) {
    console.log("Zero");
} else if (number > 0 && number % 2 === 0) {
    console.log("Positive Even");
} else if (number > 0 && number % 2 !== 0) {
    console.log("Positive Odd");
} else if (number < 0 && number % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}


