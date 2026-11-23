// # 9. Searching in Arrays
// 01]What does the indexOf() method return when the searched value is found in the array?
// 02]What does indexOf() return when the value is not present in the array?
// 03]Given const names = ["Jenil", "Mahir", "Arjun"];, what does console.log(names.indexOf("Mahir")); output?
// 04]For the same array, what does console.log(names.indexOf("Krishna")); output?
// 05]Write a line of code that finds the index of "Priyesha" in an array named students.


// 01. What does indexOf() return when the searched value is found?
// Answer: It returns the index (position) of the value.

// 02. What does indexOf() return when the value is not present?
// Answer: It returns -1.

// 03. What is the output of names.indexOf("Mahir")?
const names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir"));
// Output: 1

// 04. What is the output of names.indexOf("Krishna")?
console.log(names.indexOf("Krishna"));
// Output: -1

// 05. Find the index of "Priyesha" in students.
const students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
console.log(students.indexOf("Priyesha"));
// Output: 2