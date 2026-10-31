// ## # 12. Real-World Example
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
// 01]In the given marks example, what does marks[i] represent inside the loop?
// 02]Why do we use marks.length in the outer loop instead of hard-coding the number 3?
// 03]What will happen if one student has only 2 subject marks instead of 3? (Think about the calculation)

// Create an array of student marks.

const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

// Loop through each student's marks.
for (let i = 0; i < marks.length; i++) {

    // Get the marks of the current student.
    const studentMarks = marks[i];

    // Calculate total marks.
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];

    // Calculate average marks.
    const avg = total / 3;

    // Print student average.
    console.log("Student " + (i + 1) + " average: " + avg);
}
