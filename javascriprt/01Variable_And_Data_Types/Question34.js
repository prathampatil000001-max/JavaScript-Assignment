// 04 Mixed Logical Operators (&&, ||, !)
// Write a JavaScript program for each:

// A user can enter if they are a member (isMember = true) and not banned (isBanned = false). Check using && and !.
// A discount is given if the user is a student (isStudent = true) or a senior (isSenior = false), but not if they are banned (isBanned = true). Check using ||, &&, and !.
// A form is valid if name is given (nameGiven = true) and (email or phone is given: emailGiven = false, phoneGiven = true). Check using && and ||.
// Access is allowed if (user is admin isAdmin = true or has a token hasToken = false) and not suspended (isSuspended = false). Check using ||, &&, and !.
// A game level opens if score is above 1000 (score = 1200) and (time bonus collected timeBonus = false or extra life extraLife = true). Check using && and ||.

// Problem 1: Club entry check
let isMember = true;
let isBanned = false;
let canEnter = isMember && !isBanned;
console.log("1. Can the user enter?", canEnter);

// Problem 2: Discount evaluation
let isStudent = true;
let isSenior = false;
let isUserBanned = true; 
let discountGiven = (isStudent || isSenior) && !isUserBanned;
console.log("2. Is the discount given?", discountGiven);

// Problem 3: Form field validation
let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;
let isFormValid = nameGiven && (emailGiven || phoneGiven);
console.log("3. Is the form valid?", isFormValid);

// Problem 4: System dashboard access
let isAdmin = true;
let hasToken = false;
let isSuspended = false;
let accessAllowed = (isAdmin || hasToken) && !isSuspended;
console.log("4. Is access allowed?", accessAllowed);

// Problem 5: Level progression unlock
let score = 1200;
let timeBonus = false;
let extraLife = true;
let levelOpens = (score > 1000) && (timeBonus || extraLife);
console.log("5. Does the game level open?", levelOpens);
