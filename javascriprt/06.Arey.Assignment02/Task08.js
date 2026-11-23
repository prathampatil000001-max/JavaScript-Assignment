// # 8. Removing Elements
// 01]Which method removes the last element of an array?
// 02]Which method removes the first element of an array?
// 03]Given let nums = [100, 200, 300, 400, 500];, what does nums.pop(); do, and what will the array contain after calling it?
// 04]After the previous operation, what does nums.shift(); do, and what will the remaining array contain?
// 05]Do pop() and shift() return the removed element, or do they only modify the array?


// 01. Which method removes the last element of an array?
// Answer: pop() method.

// 02. Which method removes the first element of an array?
// Answer: shift() method.

// 03. What does nums.pop() do?
let nums = [100, 200, 300, 400, 500];

nums.pop();
console.log(nums);
// Output: [100, 200, 300, 400]
// Answer: pop() removes the last element (500).

// 04. What does nums.shift() do?
nums.shift();
console.log(nums);
// Output: [200, 300, 400]
// Answer: shift() removes the first element (100).

// 05. Do pop() and shift() return the removed element?
// Answer: Yes, both methods return the removed element
// and also modify the original array.