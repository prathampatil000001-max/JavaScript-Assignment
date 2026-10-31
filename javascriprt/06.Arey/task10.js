// # 11. Array of Arrays (Matrix) – 2D Arrays
// 01]What is a 2D array (array of arrays) commonly used for?
// 02]Given the matrix below, what does console.log(matrix[2][1]); output?
// const matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// 03]Write the code to create a 3×3 matrix and print the element present at row index 1 and column index 2.
// 04]How would you access and print the last element of the last row in this matrix?
// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// 05]Create a 2D array of 2 rows and 3 columns, update the value at position [1][1] to 100, and write the code that prints the complete matrix.
// New Questions:

// 06]Create a 4×2 matrix and print all elements of the second column.
// 07]Given this matrix of student marks, print only the marks of the third student:
// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];
// 08Write code to find and print the total number of elements present in a 3×4 matrix.
// 09]Create a 3×3 matrix filled with numbers 1 to 9. Then update the center element (index [1][1]) to 0 and print the matrix.
// 10]Access and print the element that is present at the first row and last column of any 3×3 matrix you create.

// 1. A 2D array is commonly used to store data in rows and columns,
// such as matrices, tables, and student marks.

// 2. Given matrix:

const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix[2][1]); // Output: 6


// 3. Create a 3x3 matrix and print row index 1, column index 2.

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix3[1][2]); // Output: 6


// 4. Print the last element of the last row.

const arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(arr[2][2]); // Output: 90


// 5. Create a 2-row and 3-column matrix.
// Update the value at position [1][1] to 100.

const arr2 = [
    [1, 2, 3],
    [4, 5, 6]
];

arr2[1][1] = 100;

console.log(arr2);


// 6. Create a 4x2 matrix and print all elements of the second column.

const matrix4 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];

for (let i = 0; i < matrix4.length; i++) {
    console.log(matrix4[i][1]);
}


// 7. Print only the marks of the third student.

const marks = [
    [85, 90, 78],
    [70, 75, 80],
    [88, 82, 95],
    [60, 65, 70]
];

console.log(marks[2]);


// 8. Find the total number of elements in a 3x4 matrix.

const matrix5 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let total = matrix5.length * matrix5[0].length;

console.log(total); // Output: 12


// 9. Create a 3x3 matrix with numbers 1 to 9.
// Update the center element to 0.

const matrix6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix6[1][1] = 0;

console.log(matrix6);


// 10. Print the first row and last column element.

const matrix7 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(matrix7[0][2]); // Output: 30
