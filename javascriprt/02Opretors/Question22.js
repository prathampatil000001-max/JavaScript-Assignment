//03 Strict Equality ===

// 01 Stored password is 1234, entered password is "1234". Check strict equality using ===.
// 02 Two account numbers are 1234567890 and 1234567890. Check if they are strictly equal.
// 03 Feature flag is true, required state is 1. Check if they are strictly equal.
// 04 Database value is null, cache value is undefined. Check strict equality.
// 05 Two scores are 85 and 85. Check if they are strictly equal.


// Problem 1: Stored password (number) vs entered password (string)
let storedPassword = 1234;
let enteredPassword = "1234";
console.log("Are passwords strictly equal?", storedPassword === enteredPassword);
// Output: false (Types are different: number vs string)

// Problem 2: Two numeric account numbers
let account1 = 1234567890;
let account2 = 1234567890;
console.log("Are account numbers strictly equal?", account1 === account2);
// Output: true (Both type and value match)

// Problem 3: Feature flag (boolean) vs required state (number)
let featureFlag = true;
let requiredState = 1;
console.log("Are flag and state strictly equal?", featureFlag === requiredState);
// Output: false (Types are different: boolean vs number)

// Problem 4: Database value (null) vs cache value (undefined)
let dbValue = null;
let cacheValue = undefined;
console.log("Are null and undefined strictly equal?", dbValue === cacheValue);
// Output: false (They are different types, even though they both represent "no value")

// Problem 5: Two numeric game scores
let score1 = 85;
let score2 = 85;
console.log("Are scores strictly equal?", score1 === score2);
// Output: true (Both type and value match)
