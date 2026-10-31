// # 8. Removing Elements
// 01]Which method removes the last element of an array?
// 02]Which method removes the first element of an array?
// 03]Given let nums = [100, 200, 300, 400, 500];, what does nums.pop(); do, and what will the array contain after calling it?
// 04]After the previous operation, what does nums.shift(); do, and what will the remaining array contain?
// 05]Do pop() and shift() return the removed element, or do they only modify the array?

// 1. pop() method removes the last element of an array.

// 2. shift() method removes the first element of an array.

// 3. Create an array.
let nums = [100, 200, 300, 400, 500];

// Remove the last element.
nums.pop();

console.log(nums);

// 4. Remove the first element.
nums.shift();

console.log(nums);

// 5. pop() and shift() return the removed element.

// Example:
let removedLast = nums.pop();
console.log(removedLast);

let removedFirst = nums.shift();
console.log(removedFirst);
