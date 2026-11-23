// 16-D Mini Assignment 4: Temperature of the Week
// Given Input:

// const temperatures = [
//     ["Monday", 32],
//     ["Tuesday", 35],
//     ["Wednesday", 30],
//     ["Thursday", 28],
//     ["Friday", 33],
//     ["Saturday", 36],
//     ["Sunday", 31]
// ];
// Tasks:

// Print the temperature of each day.
// Find and print:
// Highest temperature + day
// Lowest temperature + day
// Average temperature of the week
// Print a warning if any day has temperature ≥ 35:
// Heat Alert on <Day>
// #17 JavaScript Matrix (2D Array) Additional Practice Questions**
// Instructions: Write a JavaScript program to perform the following operations on the given 2D arrays. Print the required elements in a single line, separated by spaces.

// Q1. Print the First Row
// Given a 3 × 4 matrix, write a JavaScript program to print all elements of the 1st row in a single line with spaces.

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33]
// ];
// Expected Output:

// 10 20 30 40
// Q2. Print the Second Column
// Given a 4 × 3 matrix, write a JavaScript program to print all elements of the 2nd column in a single line with spaces.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [11, 22, 33]
// ];
// Expected Output:

// 20 50 80 22
// Q3. Print the Primary Diagonal
// Given a 4 × 4 matrix, write a JavaScript program to print all elements of the primary diagonal (top-left to bottom-right).

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33],
//     [44, 55, 66, 77]
// ];
// Expected Output:

// 10 60 22 77
// Q4. Print the Secondary Diagonal
// Given a 4 × 4 matrix, write a JavaScript program to print all elements of the secondary diagonal (top-right to bottom-left).

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33],
//     [44, 55, 66, 77]
// ];
// Expected Output:

// 40 70 11 44
// Q5. Print the Last Row
// Given a 3 × 4 matrix, write a JavaScript program to print all elements of the last row in a single line with spaces.

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33]
// ];
// Expected Output:

// 90 11 22 33
// Q6. Print the First Column
// Given a 4 × 3 matrix, write a JavaScript program to print all elements of the first column in a single line with spaces.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [11, 22, 33]
// ];
// Expected Output:

// 10 40 70 11
// Q7. Print the Boundary Elements
// Given a 3 × 3 matrix, write a JavaScript program to print all the boundary elements in clockwise order, starting from the top-left corner.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// Expected Output:

// 10 20 30 60 90 80 70 40
// Q8. Print Elements Row by Row in Reverse Order
// Given a 3 × 3 matrix, write a JavaScript program to print all elements of each row from right to left, starting from the first row.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// Expected Output:

// 30 20 10 60 50 40 90 80 70
// Q9. Print Elements Column by Column
// Given a 3 × 3 matrix, write a JavaScript program to print all elements column by column, starting from the first column and moving towards the last column.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// Expected Output:

// 10 40 70 20 50 80 30 60 90
// Q10. Print the Matrix in Spiral Order
// Given a 3 × 3 matrix, write a JavaScript program to print all elements in clockwise spiral order, starting from the top-left corner.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// Expected Output:

// 10 20 30 60 90 80 70 40 50

const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

let highest = temperatures[0];
let lowest = temperatures[0];
let sum = 0;

for (let i = 0; i < temperatures.length; i++) {

    console.log(temperatures[i][0] + " : " + temperatures[i][1]);

    sum = sum + temperatures[i][1];

    if (temperatures[i][1] > highest[1]) {
        highest = temperatures[i];
    }

    if (temperatures[i][1] < lowest[1]) {
        lowest = temperatures[i];
    }

    if (temperatures[i][1] >= 35) {
        console.log("Heat Alert on " + temperatures[i][0]);
    }
}

let average = sum / temperatures.length;

console.log("Highest Temperature: " + highest[1] + " on " + highest[0]);
console.log("Lowest Temperature: " + lowest[1] + " on " + lowest[0]);
console.log("Average Temperature: " + average.toFixed(2));

// output//
// Monday : 32
// Tuesday : 35
// Heat Alert on Tuesday
// Wednesday : 30
// Thursday : 28
// Friday : 33
// Saturday : 36
// Heat Alert on Saturday
// Sunday : 31
// Highest Temperature: 36 on Saturday
// Lowest Temperature: 28 on Thursday
// Average Temperature: 32.14
var matrix = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 11, 22, 33]
];

for (let j = 0; j < matrix[0].length; j++) {
    console.log(matrix[0][j]);
}

// 10 20 30 40


var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [11, 22, 33]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][1]);
}
// 20 50 80 22


var matrix = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 11, 22, 33],
    [44, 55, 66, 77]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}

// 10 60 22 77

var matrix = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 11, 22, 33],
    [44, 55, 66, 77]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - 1 - i]);
}
// 40 70 11 44

var matrix = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 11, 22, 33]
];

for (let j = 0; j < matrix[2].length; j++) {
    console.log(matrix[2][j]);
}
// 90 11 22 33

var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [11, 22, 33]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][0]);
}
// 10 40 70 11

var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

var result = [];

// First row
for (let j = 0; j < 3; j++) {
    result.push(matrix[0][j]);
}

// Last column
for (let i = 1; i < 3; i++) {
    result.push(matrix[i][2]);
}

// Last row
for (let j = 1; j >= 0; j--) {
    result.push(matrix[2][j]);
}

// First column
result.push(matrix[1][0]);

console.log(result.join(" "));
// 10 20 30 60 90 80 70 40
var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

var result = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
    }
}

console.log(result.join(" "));
// 30 20 10 60 50 40 90 80 70

var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

var result = [];

for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][j]);
    }
}

console.log(result.join(" "));
// 10 40 70 20 50 80 30 60 90

var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

var result = [];

let top = 0;
let bottom = matrix.length - 1;
let left = 0;
let right = matrix[0].length - 1;

while (top <= bottom && left <= right) {

    // Left to Right
    for (let j = left; j <= right; j++) {
        result.push(matrix[top][j]);
    }
    top++;

    // Top to Bottom
    for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
    }
    right--;

    // Right to Left
    if (top <= bottom) {
        for (let j = right; j >= left; j--) {
            result.push(matrix[bottom][j]);
        }
        bottom--;
    }

    // Bottom to Top
    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }
}

console.log(result.join(" "));
// 10 20 30 60 90 80 70 40 50