// 05Greater Than >

// 01 Age is 20, voting age is 18. Check if the person can vote.
// 02 Cart total is 650, free shipping limit is 500. Check if shipping is free.
// 03 Player score is 1200, required score is 1000. Check if level is unlocked.
// 04 Monthly income is 40000, minimum required is 30000. Check if loan is approved.
// 05 Steps today are 11000, target is 10000. Check if target is exceeded.

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
