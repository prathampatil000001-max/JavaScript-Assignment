// 06 Less Than <

// Marks are 30, fail threshold is 35. Check if the student has failed.
// Expenses are 8000, budget is 10000. Check if expenses are under budget.
// Items left are 7, low stock limit is 10. Check if stock is low.
// Vehicle speed is 40, minimum speed is 50. Check if vehicle is too slow.
// Remaining time is 4 minutes, warning limit is 5. Check if warning is needed.
// Problem 1: Marks vs Fail threshold
let studentMarks = 30;
let failThreshold = 35;
console.log("Has the student failed?", studentMarks < failThreshold);

// Problem 2: Expenses vs Budget
let expenses = 8000;
let budget = 10000;
console.log("Are expenses under budget?", expenses < budget);

// Problem 3: Items left vs Low stock limit
let itemsLeft = 7;
let lowStockLimit = 10;
console.log("Is stock low?", itemsLeft < lowStockLimit);

// Problem 4: Vehicle speed vs Minimum speed
let vehicleSpeed = 40;
let minimumSpeed = 50;
console.log("Is the vehicle too slow?", vehicleSpeed < minimumSpeed);

// Problem 5: Remaining time vs Warning limit
let remainingTime = 4;
let warningLimit = 5;
console.log("Is a warning needed?", remainingTime < warningLimit);
