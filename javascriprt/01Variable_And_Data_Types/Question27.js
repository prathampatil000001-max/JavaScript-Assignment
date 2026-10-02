// 06 Greater Than  or Equal >=


// 01 Age is 18, voting age is 18. Check if the person is eligible to vote.
// 02 Percentage is 75, minimum required is 75. Check if scholarship is granted.
// 03 User age is 14, minimum age is 13. Check if subscription is allowed.
// 04 Current score is 500, minimum score is 500. Check if player can proceed.
// 05 Experience is 3 years, required is 2 years. Check if candidate is eligible.

// Problem 1: Voting eligibility
let age = 18;
let votingAge = 18;
console.log("Is the person eligible to vote?", age >= votingAge);

// Problem 2: Scholarship criteria
let percentage = 75;
let minRequired = 75;
console.log("Is the scholarship granted?", percentage >= minRequired);

// Problem 3: Subscription age requirement
let userAge = 14;
let minAge = 13;
console.log("Is the subscription allowed?", userAge >= minAge);

// Problem 4: Game score threshold
let currentScore = 500;
let minScore = 500;
console.log("Can the player proceed?", currentScore >= minScore);

// Problem 5: Job candidate experience
let experienceYears = 3;
let requiredYears = 2;
console.log("Is the candidate eligible?", experienceYears >= requiredYears);
