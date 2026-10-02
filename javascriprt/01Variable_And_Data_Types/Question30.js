// Part D: Logical Operators

// 1. Logical AND &&
// Write a JavaScript program for each:

// 01 Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.
// 02 A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.
// 03 A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.
// 04 A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.
// 05 Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.

// Problem 1: Stored username and password validation
let enteredUser = "admin";
let enteredPass = 1234;
let isCredentialsValid = (enteredUser === "admin" && enteredPass === 1234);
console.log("Are both username and password valid?", isCredentialsValid);

// Problem 2: User login and page access permission check
let isLoggedIn = true;
let hasPermission = true;
let canAccessPage = (isLoggedIn && hasPermission);
console.log("Can the user access the page?", canAccessPage);

// Problem 3: Product purchase check based on stock and price
let inStock = true;
let price = 800;
let canBeBought = (inStock && price < 1000);
console.log("Can the product be bought?", canBeBought);

// Problem 4: Student qualification based on marks and attendance
let marks = 75;
let attendance = 80;
let hasPassed = (marks > 65 && attendance > 70);
console.log("Has the student passed?", hasPassed);

// Problem 5: Party validation rules
let isWeekend = true;
let isHoliday = false;
let partyHappens = (isWeekend && isHoliday);
console.log("Does the party happen?", partyHappens);
