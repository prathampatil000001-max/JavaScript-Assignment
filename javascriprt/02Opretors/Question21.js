// 02 Loose Inequality !=

// 01 Two discount codes are "SAVE10" and "SAVE20". Check if they are different using !=.
// 02  User role is "admin", default role is "guest". Check if they are not equal using !=.
// 03 Correct answer is 42, user answer is "40". Check if they are not equal using !=.
// 04 Email input is "", empty flag is false. Check if they are not equal using !=.
// 05 User ID is null, valid ID is 101. Check if they are not equal using !=.
// Problem 1: Different discount codes
let code1 = "SAVE10";
let code2 = "SAVE20";
console.log("Are discount codes different?", code1 != code2); 
// Output: true (They are completely different strings)

// Problem 2: User role vs default role
let userRole = "admin";
let defaultRole = "guest";
console.log("Is user role not guest?", userRole != defaultRole); 
// Output: true (They are different strings)

// Problem 3: Correct answer vs user answer
let correctAnswer = 42;
let userAnswer = "40";
console.log("Is the answer incorrect?", correctAnswer != userAnswer); 
// Output: true (Even after converting "40" to number 40, 42 is not equal to 40)

// Problem 4: Email input vs empty flag
let emailInput = "";
let emptyFlag = false;
console.log("Are they not equal?", emailInput != emptyFlag); 
// Output: false (Type coercion treats both empty string "" and false as 0, so they ARE loosely equal)

// Problem 5: User ID vs valid ID
let userId = null;
let validId = 101;
console.log("Is the user ID invalid?", userId != validId); 
// Output: true (null is not equal to 101)
