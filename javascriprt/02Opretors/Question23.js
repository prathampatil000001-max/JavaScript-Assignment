// Strict Inequality !==

// 01 String ID is "101", number ID is 101. Check if they are strictly not equal.
// 02 Boolean status is true, numeric status is 1. Check if they are strictly not equal.
// 03 Password is "abc123", confirm password is "abc124". Check strict inequality.
// 04 Server data is null, local data is undefined. Check if they are strictly not equal.
// 05 Player IDs are 10 and 20. Check if they are strictly not equal.

// Problem 1: String ID vs Number ID
let stringId = "101";
let numberId = 101;
console.log("Are IDs strictly not equal?", stringId !== numberId);
// Output: true (Values match when converted, but types are different: string vs number)

// Problem 2: Boolean status vs Numeric status
let boolStatus = true;
let numStatus = 1;
console.log("Are statuses strictly not equal?", boolStatus !== numStatus);
// Output: true (Types are different: boolean vs number)

// Problem 3: Password vs Confirm password
let password = "abc123";
let confirmPassword = "abc124";
console.log("Are passwords strictly not equal?", password !== confirmPassword);
// Output: true (Both are strings, but the text values are completely different)

// Problem 4: Server data (null) vs Local data (undefined)
let serverData = null;
let localData = undefined;
console.log("Are null and undefined strictly not equal?", serverData !== localData);
// Output: true (They belong to entirely different data types)

// Problem 5: Player IDs 10 and 20
let player1 = 10;
let player2 = 20;
console.log("Are player IDs strictly not equal?", player1 !== player2);
// Output: true (Both are numbers, but the values are different)
