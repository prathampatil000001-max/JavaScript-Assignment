// 5. Modulus %
// Write a JavaScript program to solve each problem:

// Q01 A teacher has 53 students and forms groups of 5. Find the number of students left over.
// Q02 A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
// Q03 A number is given by the user. Check whether it is even or odd using the modulus operator.
// Q04  A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.
// Q05  A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.

// Problem 1: Students left over
let totalStudents = 53;
let groupSize = 5;
let studentsLeft = totalStudents % groupSize;
console.log("Students left over: " + studentsLeft);

// Problem 2: Candies left unpacked
let totalCandies = 128;
let boxCapacity = 10;
let candiesLeft = totalCandies % boxCapacity;
console.log("Candies left unpacked: " + candiesLeft);

// Problem 3: Check whether a user-given number is even or odd
// Let's assume the user input number is 27 (you can change this value to test)
let userNumber = 27; 
if (userNumber % 2 === 0) {
    console.log(userNumber + " is an Even number.");
} else {
    console.log(userNumber + " is an Odd number.");
}

// Problem 4: Toys left after packing
let totalToys = 237;
let toysPerBox = 6;
let toysLeft = totalToys % toysPerBox;
console.log("Toys left after packing: " + toysLeft);

// Problem 5: Passengers left waiting
let totalPeople = 185;
let busCapacity = 40;
let peopleLeft = totalPeople % busCapacity;
console.log("People left waiting after full buses: " + peopleLeft);
