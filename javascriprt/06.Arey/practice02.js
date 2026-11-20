
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[1][2])


// matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]


// console.log(matrix[0])

// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];

// console.log[arr[2]]

// // # Create a 3×3 matrix
// // matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]

// // # Print element at row index 1, column index 2
// // print(matrix[1][2])

// // # Create a matrix of 3 students' marks in 3 subjects
// marks = [
//     [85, 90, 78],
//     [88, 76, 92],
//     [95, 89, 84]
// ]

// // # Print the marks of the second student
// console.log(marks[1])

// const marks = [
//     [85, 90, 92], // Jenil
//     [70, 75, 80], // Arjun
//     [88, 82, 89]  // Krishna
// ];

// for (let i = 0; i < marks.length; i++) {
//     const studentMarks = marks[i];
//     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
//     const avg = total / 3;
//     console.log("Student " + (i + 1) + " average: " + avg);
// }

// Modify the above code so that it also prints the total marks of each studet

// Create a matrix of 3 students' marks in 3 subjects
let mark = [
    [85, 90, 78],
    [88, 76, 92],
    [95, 89, 84]
];

// Print the marks of the second student
console.log("Second student's marks:", mark[1]);

// Print total marks of each student
for (let i = 0; i < mark.length; i++) {
    let total = mark[i].reduce((sum, mark) => sum + mark, 0);
    console.log("Total marks of Student", i + 1, "=", total);
}