// const students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[0]); // Jenil
// console.log(students[2]); // Priyesha

// let marks = [80, 75, 90];
// marks[1] = 95;
// console.log(marks); // [80, 95, 90]

// const arr = [1, 2, 3, 4];
// console.log(arr.length); // 4

// let nums = [1, 2, 3];
// nums.push(4);
// console.log(nums); // [1, 2, 3, 4]

// nums.unshift(0);
// console.log(nums); // [0, 1, 2, 3, 4]

// const names = ["Jenil", "Mahir", "Arjun"];
// console.log(names.indexOf("Mahir")); // 1
// console.log(names.indexOf("Krishna")); // -1

// const matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// console.log(matrix[2][1]); // 6

// // var nums = [10, 20, 30];
// // var removed = nums.pop();
// // console.log(nums);     // [10, 20]
// // console.log(removed);  // 30

// var list = [2, 3, 4];
// list.unshift(1);
// console.log(list); // [1, 2, 3, 4]

// // var arr = [100, 200, 300];
// // var first = arr.shift();
// // console.log(arr);   // [200, 300]
// // console.log(first); // 100

// // var students = ["Jenil", "Mahir"];
// // students.push("Yashvi");
// // console.log(students); // ["Jenil", "Mahir", "Yashvi"]

// // var nums = [10, 20, 30];
// // var removed = nums.pop();
// // console.log(nums);     // [10, 20]
// // console.log(removed);  // 30

// var marks = [80, 90, 100];
// console.log(marks.length - 1);  // wrong: prints 2 instead of total marks

// var total = marks1 + marks2 + marks3;
// console.log("Total is:", total);

// try {
//     console.log(studentName);
// } catch (e) {
//     console.log("An error occurred.");
//     console.log("Error message:", e.message);
// }

// var age = 15;

// try {
//     if (age < 18) {
//         throw "Underage student";
//     }
// } catch (err) {
//     console.log("Error:", err);
// }

// var total = 0;
// var marks = [80, 90, 70];

// for (var i = 1; i <= marks.length; i++) {   // problem: starts at 1
//     total += marks[i];
// }
// console.log(total);

// var student = {
//     name: "Krishna",
//     marks: [80, 90, 85],
//     avg: function() {
//         return this.marks[0] + this.marks[1] + this.marks[2] / 3;
//     }
// };

// console.log(student.avg());

// var student = { name: "Yashvi", age: 18 };

// student.course = "CSE";
// student["batch"] = "2025";

// console.log(student);

// var student = {
//     name: "Priyesha",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     }
// };

// console.log(student.greet());

// var student = {
//     name: "Krishna",
//     age: 18,
//     course: "CSE"
// };

// console.log("name:", student.name);
// console.log("age:", student.age);
// console.log("course:", student.course);

// var student = {
//     name: "Arjun",
//     address: {
//         city: "Ahmedabad",
//         pincode: 380015
//     }
// };

// console.log(student.address.city);

// var students = [
//     { name: "Jenil", marks: 85 },
//     { name: "Mahir", marks: 90 },
//     { name: "Yashvi", marks: 92 }
// ];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name, students[i].marks);
// }

// var student = {
//     name: "Krishna",
//     scores: [85, 92, 88],
//     getAverage: function() {
//         var total = this.scores[0] + this.scores[1] + this.scores[2];
//         return total / 3;
//     }
// };

// console.log(student.getAverage());

// // 16. Practice Exercises
// // Exercise 1
// // Create an object book with properties:

// // title
// // author
// // price Print all values.
// // Exercise 2
// // Add a method discountedPrice() that returns price - 50.

// // Exercise 3
// // Create an array of 5 student objects:

// // name
// // marks Print names and marks using a loop.
// // Exercise 4
// // Add an address object inside each student.

// // Exercise 5
// // Create a course object with:

// // name
// // duration
// // topics (array)
// // instructor (object)
// // Print the instructor's name.

// var student = { name: "Yashvi", age: 18 };

// student.course = "CSE";
// student["batch"] = "2025";

// console.log(student);

// var student = {
//     name: "Priyesha",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     }
// };

// console.log(student.greet());

// var student = {
//     name: "Krishna",
//     age: 18,
//     course: "CSE"
// };

// console.log("name:", student.name);
// console.log("age:", student.age);
// console.log("course:", student.course);

// var student = {
//     name: "Arjun",
//     address: {
//         city: "Ahmedabad",
//         pincode: 380015
//     }
// };

// console.log(student.address.city);

// var student = {
//     name: "Krishna",
//     scores: [85, 92, 88],
//     getAverage: function() {
//         var total = this.scores[0] + this.scores[1] + this.scores[2];
//         return total / 3;
//     }
// };

// console.log(student.getAverage());

// var student = {
//     name: "Priyesha",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     }
// };

// console.log(student.greet());

// var student = {
//     name: "Krishna",
//     age: 18,
//     course: "CSE"
// };

// console.log("name:", student.name);
// console.log("age:", student.age);
// console.log("course:", student.course);

// var student = {
//     name: "Arjun",
//     address: {
//         city: "Ahmedabad",
//         pincode: 380015
//     }
// };

// console.log(student.address.city);

// // var students = [
// //     { name: "Jenil", marks: 85 },
// //     { name: "Mahir", marks: 90 },
// //     { name: "Yashvi", marks: 92 }
// // ];

// // for (var i = 0; i < students.length; i++) {
// //     console.log(students[i].name, students[i].marks);
// // }

// var a = 10;
// var b = a;   // a copy of the value 10 is created

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// const students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[0]); // Jenil
// console.log(students[2]); // Priyesha

// const students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
// for (const student of students) {
//     console.log(student);
// }

// var a = 10;
// var b = a;   // a copy of the value 10 is created

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// var student1 = {
//     name: "Mahir",
//     age: 18
// };

// var student2 = student1;   // Only the reference is copied

// var student = { name: "Yashvi", age: 18 };

// student.course = "CSE";
// student["batch"] = "2025";

// console.log(student);

// var student = {
//     name: "Priyesha",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     }
// };

// console.log(student.greet());

// var student = {
//     name: "Krishna",
//     age: 18,
//     course: "CSE"
// };

// console.log("name:", student.name);
// console.log("age:", student.age);
// console.log("course:", student.course);

// var student = {
//     name: "Arjun",
//     address: {
//         city: "Ahmedabad",
//         pincode: 380015
//     }
// };

// console.log(student.address.city);

// var students = [
//     { name: "Jenil", marks: 85 },
//     { name: "Mahir", marks: 90 },
//     { name: "Yashvi", marks: 92 }
// ];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name, students[i].marks);
// }

// var student = {
//     name: "Krishna",
//     scores: [85, 92, 88],
//     getAverage: function() {
//         var total = this.scores[0] + this.scores[1] + this.scores[2];
//         return total / 3;
//     }
// };

// console.log(student.getAverage());

// var a = 10;
// var b = a;   // a copy of the value 10 is created

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// var student1 = { name: "Arjun", age: 18 };
// var student2 = student1;

// student2.name = "Arjun Patel";

// console.log(student1.name); // Arjun Patel
// console.log(student2.name); // Arjun Patel

// var a = [10, 20, 30];
// var b = a;

// b.push(40);

// console.log(a); // [10, 20, 30, 40]
// console.log(b); // [10, 20, 30, 40]

// let a = 50;
// let b = 20;
// let diff = a - b;
// console.log('The difference of a & b:', diff); // 30

// let walletBalance = 500;
// let billAmount = 120;
// let remainingBalance = walletBalance - billAmount; // 380

// let price = 50;
// let quantity = 4;
// let total = price * quantity;
// console.log('Total price:', total); // 200

// let total = 100;
// let people = 4;
// let share = total / people;
// console.log('Each person gets:', share); // 25

// let num = 17;
// let remainder = num % 5;
// console.log('Remainder when 17 is divided by 5:', remainder); // 2

// let base = 2;
// let power = 3;
// let result = base ** power;
// console.log('2 raised to power 3:', result); // 8

// // Chained assignment: all variables get the same value
// let a, b, c;
// a = b = c = 10;
// console.log(a, b, c);           // 10, 10, 10

// let score = 10;
// score += 5;
// console.log('New score:', score); // 15

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i === 13) {
//     console.log("Stopped at 13");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// const arr = [10, 20, 30, 40, 50];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// var a = 10;
// var b = a;   // a copy of the value 10 is created

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// var student1 = { name: "Arjun", age: 18 };
// var student2 = student1;

// student2.name = "Arjun Patel";

// console.log(student1.name); // Arjun Patel
// console.log(student2.name); // Arjun Patel

// var a = [10, 20, 30];
// var b = a;

// b.push(40);

// console.log(a); // [10, 20, 30, 40]
// console.log(b); // [10, 20, 30, 40]

// var s1 = { name: "Yashvi", marks: 88 };
// var s2 = {};

// s2.name = s1.name;
// s2.marks = s1.marks;

// s2.marks = 95;

// console.log(s1.marks); // 88  (unchanged)
// console.log(s2.marks); // 95  (independent)

// var a = { x: 10 };
// var b = a;

// b.x = 20;

// console.log(a.x);

// var student1 = { name: "Arjun", age: 18 };
// var student2 = student1;

// student2.name = "Arjun Patel";

// console.log(student1.name); // Arjun Patel
// console.log(student2.name); // Arjun Patel

// var profile = {
//     name: "Krishna",
//     course: "CSE",
//     marks: 90
// };

// var displayData = profile;   // Only reference is copied

// displayData.marks = 95;
// console.log(profile.marks); // 95


// var a = [10, 20, 30];
// var b = a;

// b.push(40);

// console.log(a); // [10, 20, 30, 40]
// console.log(b); // [10, 20, 30, 40]\\

// try {
//     console.log(studentName);
// } catch (e) {
//     console.log("An error occurred.");
//     console.log("Error message:", e.message);
// }

// var age = 15;

// try {
//     if (age < 18) {
//         throw "Underage student";
//     }
// } catch (err) {
//     console.log("Error:", err);
// }

// var total = 0;
// var marks = [80, 90, 70];

// for (var i = 1; i <= marks.length; i++) {   // problem: starts at 1
//     total += marks[i];
// }
// console.log(total);

// var student = {
//     name: "Krishna",
//     marks: [80, 90, 85],
//     avg: function() {
//         return this.marks[0] + this.marks[1] + this.marks[2] / 3;
//     }
// };

// console.log(student.avg());

// try {
//     console.log(x);
// } catch (e) {
//     console.log("Error!");
// }

// try {
//     var marks = parseInt("ABC"); // NaN

//     if (isNaN(marks)) {
//         throw "Marks must be a number";
//     }

//     console.log(marks);
// }
// catch (e) {
//     console.log("Error:", e);
// }

// try {
//     var marks = 150;

//     if (marks < 0 || marks > 100) {
//         throw "Marks out of range";
//     }

//     console.log("Marks:", marks);
// }
// catch (e) {
//     console.log("Error:", e);
// }

// function divide(a, b) {
//     if (b === 0) {
//         throw "Cannot divide by zero";
//     }
//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// }
// catch (error) {
//     console.log("Caught:", error);
// }

// try {
//     console.log("Step 1");
// }
// catch (e) {
//     console.log("Error 1:", e);
// }

// try {
//     console.log(unknown);
// }
// catch (e) {
//     console.log("Error 2:", e.message);
// }

// try {
//     console.log("No error here");
// }
// catch (e) {
//     console.log("This won’t run");
// }
// finally {
//     console.log("Always runs");
// }

// function test() {
//     try {
//         return "Returning from try";
//     }
//     finally {
//         console.log("Finally still executed");
//     }
// }

// console.log(test());

// try {
//     try {
//         console.log(x); // error
//     }
//     catch (inner) {
//         console.log("Inner catch:", inner.message);
//     }
// }
// catch (outer) {
//     console.log("Outer catch:", outer.message);
// }

// try {
//     var marks = [85, 90, 110, 70]; // 110 invalid

//     for (var i = 0; i < marks.length; i++) {

//         if (typeof marks[i] !== "number") {
//             throw "Non-numeric value at index " + i;
//         }

//         if (marks[i] < 0 || marks[i] > 100) {
//             throw "Invalid marks at index " + i;
//         }
//     }

//     console.log("All marks valid");
// }
// catch (e) {
//     console.log("Error:", e);
// }
// finally {
//     console.log("Validation complete");
// }
// try {
//     console.log("Hello");
// }
// catch (e) {
//     console.log("Error");
// }

// try {
//     throw "Error in try";
// }
// catch (e) {
//     console.log("Caught:", e);
// }
// finally {
//     console.log("Completed");
// }

// const greet = (name = "Guest") => {
//     console.log("Hello " + name);
// };

// greet();      // Hello Guest
// greet("Arjun"); // Hello Arjun

// const student = {
//     name: "Yashvi",
//     show: function () {
//         console.log(this.name);
//     }
// };

// student.show(); // "Yashvi"

// const student = {
//     name: "Yashvi",
//     show: () => {
//         console.log(this.name);
//     }
// };

// student.show(); // undefined

// const obj = {
//     a: 10,
//     fn: () => {
//         console.log(this.a);
//     }
// };
// obj.fn();
// function Person() {
//     this.age = 18;

//     setInterval(function () {
//         console.log(this.age);
//     }, 1000);
// }

// new Person();

// function Person() {
//     this.age = 18;

//     setInterval(() => {
//         console.log(this.age);
//     }, 1000);
// }

// new Person();

// const greet = (name = "Guest") => {
//     console.log("Hello " + name);
// };

// greet();      // Hello Guest
// greet("Arjun"); // Hello Arjun

// const greet = (name = "Guest") => {
//     console.log("Hello " + name);
// };

// greet();      // Hello Guest
// greet("Arjun"); // Hello Arjun

const students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[0]); // Jenil
console.log(students[2]); // Priyesha

let arr=[1,2,3,4,5,6,7,];
console.log(arr.slice(1,6).arr)

var nums = [10, 20, 30, 40, 50];
var part = nums.slice(1, 4);
console.log(part); // [20, 30, 40]
console.log(nums); // Original stays same


// 13. splice()
// Modifies the array by removing or inserting elements.

// var arre = [10, 20, 30, 40];
// arre.splice(1, 2);
// console.log(arre); // [10, 40]

// var arrey = [1, 4, 5];
// arrey.splice(1, 0, 2, 3);
// console.log(arrey); // [1, 2, 3, 4, 5]

// let nums = [1,2,3,4]
// nums.push(5)
// console.log(nums)
// nums.unshift(0)
// console.log(nums)

let numst = [1, 2, 3, 4, 5];

numst.unshift(0);

console.log(numst);

let arrh = [100, 200, 300, 400, 500];

arrh.pop();

console.log(arrh);

let arrd = [100, 200, 300, 400, 500];

arrd.shift();

console.log(arrd);

// const names = ["Jenil", "Mahir", "Arjun"];
// console.log(names.indexOf("Mahir")); // 1
// console.log(names.indexOf("Krishna")); // -1

var arrj = [10, 20, 30, 40];
arrj.splice(1, 2);
console.log(arrj); // [10, 40]

// Start with ["Jenil", "Mahir", "Arjun"]. Use splice() to insert "Krishna" between Jenil and Mahir
// let arrj = ["Jenil", "Mahir", "Arjun"];

// arrj.splice(1, 0, "Krishna");

// console.log(arrj);


let arrr = [10, 20, 30, 40, 50];

arrr.splice(1, 2, 100);


console.log(arrr);

// let arrv = [10, 20, 30, 40, 50];

// arrv.splice(1, 2, 100);

// console.log(arrdv);

// Convert an array of your 4 favorite movies into a string using toString() and print it.
let movies = ["Avatar", "Titanic", "Inception", "Avengers"];

let result = movies.toString();

console.log(result);

// How is toString() different from join()? Give one advantage of each.
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.toString());

// Create an array of 6 fruits. Find the index of a fruit that exists and one that does not exist using indexOf().

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];

// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("Watermelon"));

// What will indexOf() return if the element appears more than once? Write a short code to demonstrate.
let fruits = ["Apple", "Mango", "Banana", "Mango", "Orange"];

console.log(fruits.indexOf("Mango"));

let arrm = [100, "Hello", true, null];

console.log(arrm);

let arrc = [100, "Hello", true, null];

console.log(typeof arrc[0]);
console.log(typeof arrc[1]);
console.log(typeof arrc[2]);
console.log(typeof arrc[3]);


const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix[2][1]); // 6

// # Create a 3×3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// # Print element at row index 1, column index 2
print(matrix[1][2])


const marks=[
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg);
}

const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];
marks.push([84,64,75])
for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg+"getting a total Marks"+total);
}

// Create an array of 5 marks
let markss = [85, 90, 75, 95, 80];

// Calculate highest and lowest marks
let highest = Math.max(...markss);
let lowest = Math.min(...markss);

// Calculate sum
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += markss[i];
}

// Calculate average
let average = sum / markss.length;

// Display results
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Sum of Marks:", sum);
console.log("Average Marks:", average);