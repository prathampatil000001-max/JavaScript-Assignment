// #16-B Mini Assignment 2: Classroom Attendance Tracker
// Given Input:

// const attendance = [
//     ["Jenil", ["P", "P", "A", "P", "P"]],
//     ["Mahir", ["P", "A", "P", "P", "A"]],
//     ["Yashvi", ["P", "P", "P", "P", "P"]],
//     ["Arjun", ["A", "A", "P", "P", "A"]]
// ];
// (P = Present, A = Absent)

// Tasks:

// 01]oop through each student.
// 02]Count total Presents and Absents.
// 03]Calculate attendance percentage.
// 04]Print in this format:
// Name: Jenil
// Present: 4
// Absent: 1
// Attendance: 80%
// Status: Good
// 05]Status rule:
// ≥ 75% → Good
// < 75% → Low Attendance
// 06]Bonus: Print the name of the student with highest attendance.
const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];

let highestAttendance = 0;
let topperName = "";

// Loop through each student
for (let i = 0; i < attendance.length; i++) {

    const name = attendance[i][0];
    const records = attendance[i][1];

    let present = 0;
    let absent = 0;

    // Count presents and absents
    for (let j = 0; j < records.length; j++) {

        if (records[j] === "P") {
            present++;
        } else if (records[j] === "A") {
            absent++;
        }
    }

    // Calculate attendance percentage
    const totalDays = records.length;
    const percentage = (present / totalDays) * 100;

    // Check attendance status
    let status;

    if (percentage >= 75) {
        status = "Good";
    } else {
        status = "Low Attendance";
    }

    // Print student details
    console.log("Name:", name);
    console.log("Present:", present);
    console.log("Absent:", absent);
    console.log("Attendance:", percentage + "%");
    console.log("Status:", status);
    console.log("----------------------");

    // Find student with highest attendance
    if (percentage > highestAttendance) {
        highestAttendance = percentage;
        topperName = name;
    }
}

// Print highest attendance student
console.log("Highest Attendance:", topperName);
console.log("Attendance Percentage:", highestAttendance + "%");