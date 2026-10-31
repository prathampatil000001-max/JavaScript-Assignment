// # 10. Array with Different Data Types
// 01]Can a JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array?
// 02]Write the syntax to create an array named data that contains a number, a string, a boolean, and null.
// 03]How can you check the data type of each element in such an array?
// 04]Given const data = [100, "Hello", true, null];, what does typeof data[0] return?
// 05]What does typeof data[2] return for the same array?

// 1. JavaScript arrays can store different data types
// such as number, string, boolean, and null.

// 2. Create an array named data.

const data = [100, "Hello", true, null];

console.log(data);

// 3. Check the data type of each element.

console.log(typeof data[0]); // number
console.log(typeof data[1]); // string
console.log(typeof data[2]); // boolean
console.log(typeof data[3]); // object

// 4. Check the data type of the first element.

console.log(typeof data[0]); // number

// 5. Check the data type of the third element.

console.log(typeof data[2]); // boolean