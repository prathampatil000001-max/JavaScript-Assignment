// # 7. Adding Elements to Arrays
// 01]Which method is used to add an element at the end of an array?
// 02]Which method is used to add an element at the beginning of an array?
// 03]Given let nums = [1, 2, 3];, write the code to add 4 at the end using the appropriate method. What will console.log(nums); show after that?
// 04]Continuing from the previous question, write the code to add 0 at the beginning. What will the final array look like?
// 05]True or False: push() and unshift() both modify the original array (they are mutating methods).


// 01. Which method adds an element at the end of an array?
// Answer: push() method.

// 02. Which method adds an element at the beginning of an array?
// Answer: unshift() method.

// 03. Add 4 at the end of the array.
let nums = [1, 2, 3];

nums.push(4);
console.log(nums);
// Output: [1, 2, 3, 4]

// 04. Add 0 at the beginning of the array.
nums.unshift(0);
console.log(nums);
// Output: [0, 1, 2, 3, 4]

// 05. True or False: push() and unshift() modify the original array.
// Answer: True. Both are mutating methods.