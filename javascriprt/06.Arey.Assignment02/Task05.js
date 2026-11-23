// # 5. Array Length
// 01]What is the name of the built-in property available on every JavaScript array that tells you how many items it contains?
// 02]Given var arr = [1, 2, 3, 4];, what does console.log(arr.length); output?
// 03]If an array is empty (contains no elements), what is its length property equal to?
// 04]Why is the length property particularly useful when working with arrays?
// 05]Is length a function call (requiring parentheses ()) or a property?


// 01. What is the built-in property that tells how many items an array contains?
// Answer: length property.

// 02. What is the output of arr.length?
var arr = [1, 2, 3, 4];
console.log(arr.length);
// Output: 4

// 03. What is the length of an empty array?
var emptyArray = [];
console.log(emptyArray.length);
// Output: 0

// 04. Why is the length property useful when working with arrays?
// Answer: It helps us know the total number of elements in an array
// and is useful in loops.

// 05. Is length a function or a property?
// Answer: length is a property, not a function.
// We use arr.length, not arr.length().