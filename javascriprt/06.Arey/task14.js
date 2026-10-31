// # 15. Multiple Choice Questions
// Q1. What will be the output of the following code?

// const arr = [5, 10, 15, 20];
// console.log(arr[arr.length - 1]);
// a) 5
// b) 10
// c) 15
// d) 20

// Q2. Which of the following correctly adds an element at the beginning of an array?

// const arr = [10, 20, 30];
// a) arr.push(5)
// b) arr.pop(5)
// c) arr.unshift(5)
// d) arr.shift(5)

// Q3. What does the following code print?

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Orange"));
// a) 0
// b) 2
// c) -1
// d) undefined

// Q4. Which statement about JavaScript arrays is true?
// a) Arrays can only store numbers
// b) Arrays are always sorted
// c) Arrays can store mixed data types
// d) Array indexes start from 1

// Q5. What is the output of this code?

// let nums = [1, 2, 3];
// nums.pop();
// nums.push(4);
// console.log(nums);
// a) [1, 2, 3, 4]
// b) [1, 2, 4]
// c) [2, 3, 4]
// d) [1, 2, 3]

// Q6. In the following 2D array, what does matrix[2][1] return?

// const matrix = [
//     [10, 20],
//     [30, 40],
//     [50, 60]
// ];
// a) 30
// b) 40
// c) 50
// d) 60

// Q7. What will be printed?

// const data = [10, "Hello", false];
// console.log(typeof data[1]);
// a) number
// b) string
// c) boolean
// d) object

// Q1. Find the last element of an array.

const arr1 = [5, 10, 15, 20];
console.log(arr1[arr1.length - 1]);

// Answer: d) 20


// Q2. Add an element at the beginning of an array.

const arr2 = [10, 20, 30];
arr2.unshift(5);
console.log(arr2);

// Answer: c) arr.unshift(5)


// Q3. Search for Orange in the fruits array.

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Orange"));

// Answer: c) -1


// Q4. Arrays can store mixed data types.

const data1 = [10, "Hello", true, null];
console.log(data1);

// Answer: c) Arrays can store mixed data types


// Q5. Remove the last element and add 4.

let nums = [1, 2, 3];

nums.pop();
nums.push(4);

console.log(nums);

// Answer: b) [1, 2, 4]


// Q6. Access an element in a 2D array.

const matrix = [
    [10, 20],
    [30, 40],
    [50, 60]
];

console.log(matrix[2][1]);

// Answer: d) 60


// Q7. Check the data type of the second element.

const data = [10, "Hello", false];

console.log(typeof data[1]);

// Answer: b) string