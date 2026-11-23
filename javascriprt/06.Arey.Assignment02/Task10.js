// # 10. Array with Different Data Types
// 01]Can a JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array?
// 02]Write the syntax to create an array named data that contains a number, a string, a boolean, and null.
// 03]How can you check the data type of each element in such an array?
// 04]Given const data = [100, "Hello", true, null];, what does typeof data[0] return?
// 05]What does typeof data[2] return for the same array?


// 01. Can a JavaScript array store different data types?
// Answer: Yes, a JavaScript array can store numbers, strings,
// booleans, null, and other data types.

// 02. Create an array named data with different data types.
let data = [100, "Hello", true, null];
console.log(data);

// 03. How can you check the data type of each element?
// Answer: By using the typeof operator.
console.log(typeof data[0]);
console.log(typeof data[1]);
console.log(typeof data[2]);
console.log(typeof data[3]);

// 04. What does typeof data[0] return?
const data2 = [100, "Hello", true, null];
console.log(typeof data2[0]);
// Output: number

// 05. What does typeof data[2] return?
console.log(typeof data2[2]);
// Output: boolean