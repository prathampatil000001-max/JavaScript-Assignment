// # 3. Accessing Values in an Array
// 01]What do you use to access a specific value stored in an array?
// 02]Given var students = ["Jenil", "Mahir", "Priyesha"];, what does console.log(students[0]); output?
// 03]For the same array, what does console.log(students[2]); output?
// 04]What value does JavaScript return if you attempt to access an index that does not exist (such as students[10])?
// 05]Write a line of code to log the first element of an array named colors.


// 1. To access a specific value in an array, use its index.

// 2. Create an array named students.
var students = ["Jenil", "Mahir", "Priyesha"];

// 3. Access the first element (index 0).
console.log(students[0]); // Output: Jenil

// 4. Access the third element (index 2).
console.log(students[2]); // Output: Priyesha

// 5. Access an index that does not exist.
console.log(students[10]); // Output: undefined

// 6. Log the first element of an array named colors.
var colors = ["Red", "Blue", "Green"];

console.log(colors[0]); // Output: Red