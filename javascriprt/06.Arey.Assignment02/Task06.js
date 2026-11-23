// # 6. Looping Through Arrays
// 01]What are the two types of loops demonstrated in the notes for iterating through an array?
// 02]In a standard for loop, what condition is typically used to ensure the loop stops before going out of bounds? (i < ...)
// 03]In the while loop example, where is the increment step (i++) placed relative to the array access statement?
// 04]Write a for loop structure that prints every element of an array named students.
// 05]What happens if your loop condition incorrectly uses <= instead of < alongside students.length when accessing elements?
// 06]Write a for...of loop that prints every element of an array named subject.
// 07]What is the main advantage of using a for...of loop over a traditional for loop when you only need the values (and not the indices)?
// 08]Given const colors = ["Red", "Blue", "Green"];, what will the following code output?
//    for (const color of colors) {
//     console.log(color, indexOf(color);
// }

// 01. What are the two types of loops demonstrated for iterating through an array?
// Answer: 1. for loop
//         2. while loop

// 02. In a standard for loop, what condition is used?
// Answer: i < array.length

// 03. In a while loop, where is the increment step (i++) placed?
// Answer: After the array access statement.

// 04. Write a for loop to print every element of students.
let students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 05. What happens if we use <= instead of < with students.length?
// Answer: The loop accesses one extra index and prints undefined.

// 06. Write a for...of loop to print every element of subject.
let subject = ["Maths", "Science", "English"];

for (let sub of subject) {
    console.log(sub);
}

// 07. What is the main advantage of for...of over traditional for loop?
// Answer: for...of is simpler and directly gives values without using indices.

// 08. What will the following code output?
const colors = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color, colors.indexOf(color));
}

// Output:
// Red 0
// Blue 1
// Green 2