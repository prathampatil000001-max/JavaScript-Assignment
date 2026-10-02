//03  Logical NOT !
// Write a JavaScript program for each:

// 01 A user is not banned (isBanned = false). Check if they can login by negating isBanned using !.
// 02 A task is not completed (isCompleted = false). Check if it is still pending using !.
// 03 A light is on (isOn = true). Check if it is off using !.
// 04 A subscription is not active (isActive = false). Check if the user cannot access premium content using !.
// 05 A file is not read‑only (isReadOnly = false). Check if it can be edited using !.

// Problem 1: Check if user can login (True if NOT banned)
let isBanned = false;
let canLogin = !isBanned;
console.log("Can the user login?", canLogin);

// Problem 2: Check if task is pending (True if NOT completed)
let isCompleted = false;
let isPending = !isCompleted;
console.log("Is the task still pending?", isPending);

// Problem 3: Check if light is off (True if NOT on)
let isOn = true;
let isOff = !isOn;
console.log("Is the light off?", isOff);

// Problem 4: Check if user cannot access premium content (True if NOT active)
let isActive = false;
let cannotAccessPremium = !isActive;
console.log("Is premium content blocked?", cannotAccessPremium);

// Problem 5: Check if file can be edited (True if NOT read-only)
let isReadOnly = false;
let canEdit = !isReadOnly;
console.log("Can the file be edited?", canEdit);
