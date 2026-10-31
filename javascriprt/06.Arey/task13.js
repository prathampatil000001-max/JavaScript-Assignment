// # 14. Practice Exercises
//01] Given the array:
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// Print only the even numbers using a loop.

// 02]Given the array:
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// Print all city names in reverse order (last to first) using a loop.

// 03]Given the array:
// const scores = [12, 45, 7, 89, 23];
// Find and print the second largest number.

// 04]Given the array:
// const colors = ["Red", "Blue", "Green", "Yellow"];
// Use push() to add "Purple" at the end and unshift() to add "Black" at the beginning. Then print the final array.

// 05]Given the matrix:

// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];
// Calculate and print the sum of all elements.

// G06]iven the array:
// const marks = [45, 67, 89, 32, 76, 91, 54];
// Count how many numbers are greater than 50 and print the count.

// 07]Given the matrix:

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// Print only the main diagonal elements (1, 5, 9).

// 1. Print only even numbers using a loop.

const numbers = [12, 7, 18, 25, 4, 9, 30];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// 2. Print city names in reverse order.

const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

for (let i = cities.length - 1; i >= 0; i--) {
    console.log(cities[i]);
}


// 3. Find and print the second largest number.

const scores = [12, 45, 7, 89, 23];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > largest) {
        secondLargest = largest;
        largest = scores[i];
    } else if (scores[i] > secondLargest) {
        secondLargest = scores[i];
    }
}

console.log("Second largest number:", secondLargest);


// 4. Add elements using push() and unshift().

const colors = ["Red", "Blue", "Green", "Yellow"];

colors.push("Purple");
colors.unshift("Black");

console.log(colors);


// 5. Calculate the sum of all matrix elements.

const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}

console.log("Sum:", sum);


// 6. Count numbers greater than 50.

const marks = [45, 67, 89, 32, 76, 91, 54];

let count = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        count++;
    }
}

console.log("Count:", count);


// 7. Print main diagonal elements of a matrix.

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix2.length; i++) {
    console.log(matrix2[i][i]);
}

