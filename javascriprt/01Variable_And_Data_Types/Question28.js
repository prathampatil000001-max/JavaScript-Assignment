// 07 Less Than or Equal <=

// People in lift are 7, max capacity is 8. Check if it is safe to add one more.
// File size is 5 MB, max allowed is 5 MB. Check if upload is allowed.
// Participant age is 12, max junior age is 12. Check if they qualify as junior.
// Data used is 9.5 GB, limit is 10 GB. Check if user is within limit.
// Class strength is 40, max allowed is 40. Check if class is at valid capacity.

// Problem 1: Lift capacity safety check
let peopleInLift = 7;
let maxCapacity = 8;
console.log("Is it safe to add one more?", (peopleInLift + 1) <= maxCapacity);

// Problem 2: File size upload check
let fileSize = 5;
let maxAllowedSize = 5;
console.log("Is upload allowed?", fileSize <= maxAllowedSize);

// Problem 3: Junior age classification check
let participantAge = 12;
let maxJuniorAge = 12;
console.log("Do they qualify as a junior?", participantAge <= maxJuniorAge);

// Problem 4: Data usage tier check
let dataUsed = 9.5;
let dataLimit = 10;
console.log("Is the user within the limit?", dataUsed <= dataLimit);

// Problem 5: Class enrollment capacity check
let classStrength = 40;
let maxClassCapacity = 40;
console.log("Is the class at a valid capacity?", classStrength <= maxClassCapacity);
