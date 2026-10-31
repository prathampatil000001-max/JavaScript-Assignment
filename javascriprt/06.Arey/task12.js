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

// 1. Accessing an invalid index.

const arr = [10, 20, 30];

console.log(arr[3]); // Output: undefined


// 2. Adding an element using arr.length.

let numbers = [10, 20, 30];

numbers[numbers.length] = 10;

console.log(numbers); // Output: [10, 20, 30, 10]


// 3. Correct code to add 40 at the end of the array.

let arr2 = [10, 20, 30];

arr2[arr2.length] = 40;

console.log(arr2); // Output: [10, 20, 30, 40]


// 4. Creating a sparse array accidentally.

let sparseArray = [10, 20, 30];

sparseArray[5] = 60;

console.log(sparseArray);


// 5. Accessing an invalid index does not throw an error.

console.log(arr[10]); // Output: undefined


// 6. Difference between array and object.

let students = ["Jenil", "Mahir", "Arjun"];

let student = {
    name: "Jenil",
    age: 20,
    city: "Pune"
};

console.log(students[0]); // Output: Jenil
console.log(student.name); // Output: Jenil
