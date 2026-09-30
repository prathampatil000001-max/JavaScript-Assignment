// 02 Logical OR ||
// Write a JavaScript program for each:

// 01 A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.
// 02 A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.
// 03 Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.
// 04 A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.
// 05 A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.

// Problem 1: Login via Password or OTP
let passwordCorrect = true;
let otpValid = false;
let loginAllowed = (passwordCorrect || otpValid);
console.log("Is login allowed?", loginAllowed);

// Problem 2: Discount application via Membership or Coupon
let isMember = false;
let hasCoupon = true;
let discountApplied = (isMember || hasCoupon);
console.log("Is discount applied?", discountApplied);

// Problem 3: Entry allowance via Age or Height
let age = 16;
let height = 155;
let entryAllowed = (age > 18 || height > 150);
console.log("Is entry allowed?", entryAllowed);

// Problem 4: Form validity via Email or Phone
let emailGiven = true;
let phoneGiven = false;
let formValid = (emailGiven || phoneGiven);
console.log("Is the form valid?", formValid);

// Problem 5: Level unlock via Score or Time Bonus
let score = 900;
let timeBonus = true;
let levelOpens = (score > 1000 || timeBonus);
console.log("Does the game level open?", levelOpens);
