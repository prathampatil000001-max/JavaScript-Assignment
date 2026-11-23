// # 11. Array of Arrays (Matrix) – 2D Arrays
// 01]Create a 4×2 matrix and print all elements of the second column.
// 02]Given this matrix of student marks, print only the marks of the third student:
//  const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];
// 03]Write code to find and print the total number of elements present in a 3×4 matrix.
// 04]Create a 3×3 matrix filled with numbers 1 to 9. Then update the center element (index [1][1]) to 0 and print the matrix.
// 05]Access and print the element that is present at the first row and last column of any 3×3 matrix you create.

// 01. Create a 4×2 matrix and print all elements of the second column.

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][1]);
}

// Output:
// 2
// 4
// 6
// 8


// 02. Print only the marks of the third student.

const marks = [
    [85, 90, 78],
    [70, 75, 80],
    [88, 82, 95],
    [60, 65, 70]
];

console.log(marks[2]);

// Output: [88, 82, 95]


// 03. Find the total number of elements in a 3×4 matrix.

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let total = arr.length * arr[0].length;

console.log(total);

// Output: 12


// 04. Create a 3×3 matrix (1 to 9).
// Update the center element to 0 and print the matrix.

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

numbers[1][1] = 0;

console.log(numbers);

// Output:
// [
//   [1, 2, 3],
//   [4, 0, 6],
//   [7, 8, 9]
// ]


// 05. Access the first row and last column of a 3×3 matrix.

let values = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(values[0][2]);

// Output: 30