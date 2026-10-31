// # 9. Searching in Arrays
// 01]What does the indexOf() method return when the searched value is found in the array?
// 02]What does indexOf() return when the value is not present in the array?
// 03]Given const names = ["Jenil", "Mahir", "Arjun"];, what does console.log(names.indexOf("Mahir")); output?
// 04]For the same array, what does console.log(names.indexOf("Krishna")); output?
// 05]Write a line of code that finds the index of "Priyesha" in an array named students.

// 1. indexOf() returns the index number when the searched value is found.

// 2. If the value is not present, indexOf() returns -1.

// 3. Create an array named names.
const names = ["Jenil", "Mahir", "Arjun"];

// Find the index of Mahir.
console.log(names.indexOf("Mahir"));

// 4. Find the index of Krishna.
console.log(names.indexOf("Krishna"));

// 5. Find the index of Priyesha in students.
const students = ["Jenil", "Mahir", "Priyesha"];

console.log(students.indexOf("Priyesha"));
