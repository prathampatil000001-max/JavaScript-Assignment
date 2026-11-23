// # # 12. Real-World Example
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

const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

// 01. What does marks[i] represent inside the loop?
// Answer: It represents the marks of one student (one row) from the 2D array.

// 02. Why do we use marks.length instead of hard-coding 3?
// Answer: Because marks.length automatically gives the total number of students.
// It makes the code flexible if students are added or removed.

// 03. What happens if one student has only 2 subject marks?
// Answer: If we still divide the total by 3, the average will be incorrect.
// We should divide by the actual number of subjects.

// Example:
for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;

    console.log("Student " + (i + 1) + " average: " + avg);
}
