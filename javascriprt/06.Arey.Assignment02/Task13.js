// ## # 13. Common Mistakes
// 01]What does the following code output?
// const arr = [10, 20, 30];
// console.log(arr[3]);
// 02]Why is this code considered wrong?
// arr[arr.length] = 10;
// 03]Correct the above code so that 40 is properly added at the end of the array on the place of 30:
// let arr = [10, 20, 30];
// arr[arr.length] = 40;
// 04]What is a “sparse array”? Give one example of how it can be created accidentally.
// 05]True or False: Accessing an invalid index throws an error in JavaScript.
// 06]What is the difference between an array and an object in JavaScript? (One key difference)

// 01. What does the following code output?
const arr = [10, 20, 30];
console.log(arr[3]);
// Output: undefined


// 02. Why is this code considered wrong?
arr[arr.length] = 10;
// Answer: It adds 10 at the end of the array instead of replacing
// an existing element. The array length increases by 1.


// 03. Correct the code to replace 30 with 40.
let numbers = [10, 20, 30];
numbers[2] = 40;
console.log(numbers);
// Output: [10, 20, 40]


// 04. What is a sparse array? Give one example.
// Answer: A sparse array is an array that contains empty slots
// between its elements.

let sparse = [10, 20, 30];
sparse[5] = 60;
console.log(sparse);
// Output: [10, 20, 30, empty × 2, 60]


// 05. True or False: Accessing an invalid index throws an error.
// Answer: False. It returns undefined.

console.log(numbers[10]);
// Output: undefined


// 06. What is the difference between an array and an object?
// Answer: An array stores values using numeric indexes,
// while an object stores values using key-value pairs.

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Apple

let student = {
    name: "Jenil",
    age: 18
};
console.log(student.name); // Jenil
