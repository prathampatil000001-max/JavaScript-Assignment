
// // matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]
// // console.log(matrix[1][2])


// // matrix = [
// //     [1, 2, 3, 4],
// //     [5, 6, 7, 8]
// // ]


// // console.log(matrix[0])

// // const arr = [
// //     [10, 20, 30],
// //     [40, 50, 60],
// //     [70, 80, 90]
// // ];

// // console.log[arr[2]]

// // // # Create a 3×3 matrix
// // // matrix = [
// // //     [1, 2, 3],
// // //     [4, 5, 6],
// // //     [7, 8, 9]
// // // ]

// // // # Print element at row index 1, column index 2
// // // print(matrix[1][2])

// // // # Create a matrix of 3 students' marks in 3 subjects
// // marks = [
// //     [85, 90, 78],
// //     [88, 76, 92],
// //     [95, 89, 84]
// // ]

// // // # Print the marks of the second student
// // console.log(marks[1])

// // const marks = [
// //     [85, 90, 92], // Jenil
// //     [70, 75, 80], // Arjun
// //     [88, 82, 89]  // Krishna
// // ];

// // for (let i = 0; i < marks.length; i++) {
// //     const studentMarks = marks[i];
// //     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
// //     const avg = total / 3;
// //     console.log("Student " + (i + 1) + " average: " + avg);
// // }

// // Modify the above code so that it also prints the total marks of each studet

// // Create a matrix of 3 students' marks in 3 subjects
// let mark = [
//     [85, 90, 78],
//     [88, 76, 92],
//     [95, 89, 84]
// ];

// // Print the marks of the second student
// console.log("Second student's marks:", mark[1]);

// // Print total marks of each student
// for (let i = 0; i < mark.length; i++) {
//     let total = mark[i].reduce((sum, mark) => sum + mark, 0);
//     console.log("Total marks of Student", i + 1, "=", total);
// }

// let marks = [
//     [85, 90, 78],
//     [88, 76, 92],
//     [95, 89, 84]
// ];

// // Print second student's marks
// console.log("Second Student Marks:", marks[1]);

// // Calculate total marks of each student
// for (let i = 0; i < marks.length; i++) {
//     let total = 0;

//     for (let j = 0; j < marks[i].length; j++) {
//         total = total + marks[i][j];
//     }

//     console.log("Student", i + 1, "Total Marks:", total);
// }

// Create an array of 4 students' marks
let marks = [
    [85, 90, 78],
    [88, 76, 92],
    [95, 89, 84],
    [80, 85, 90]
];

// Print marks of second student
console.log("Second Student Marks:", marks[1]);

// Calculate total and average of each student
for (let i = 0; i < marks.length; i++) {
    let total = 0;

    for (let j = 0; j < marks[i].length; j++) {
        total = total + marks[i][j];
    }

    let average = total / marks[i].length;

    console.log("Student", i + 1);
    console.log("Total Marks:", total);
    console.log("Average Marks:", average);
}

// Create a 3×3 matrix and print the element present at row index 1 and column index 2.
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[1][2]);

// Create a 2×4 matrix and print all the elements of the first row.
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];

// console.log(matrix[0])


// let matrix=[
//     [1,2,3]
//     [4,5,6]
//     [7,8,9]

// ]
// for (let i< matrix.length)


// let person ={
//     name: "Albert",  // string
//     age : 22,    // number
//     hobbies : ["Playing cricket", "singing", "gardening"],   // arr inside obj
//     address : {      // nested obj
//         city : "Delhi",
//         pin : 415212
//     },
//     greet : function(){       // method
//         return "Hello, I am " + this.name;
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[2]);
// console.log(person.address.city);
// console.log(person.address.pin);
// console.log(person.greet());


// Create a product object that contains: name, an array of available colors, and a nested manufacturer object with name and country. Print the manufacturer’s country.

// let product = {
//     name : "Samsung Galaxy s26 ultra",
//     colors : [
//                 "Obsidian black",
//                 "Sky Blue", 
//                 "Pink Gold",
//                 "cobalt violet",
//                 "Ferrari red"
//             ],
//     manufacturer : {
//         name : "Samsung Electronics",
//         country : "South Korea"
//     },
//     getDetails: function(){
//         return "This is a " + this.name + " product, manufactured by "+ this.manufacturer.name
//     }
// }

// console.log(product.getDetails())
// Add a method named getDetails to the product object that returns a string combining the product name and manufacturer name. Call the method and print the result.

// 9. Methods & the this Keyword=>

// Method => function inside an obj;
// this keyword => refers to the current object that owns the method.

// let course = {
//     title : "JavaScript",
//     duration : 30,
//     getInfo : function(){       // getInfo => method
//         return "This is a "+this.title+" session"  // this => course obj
//     }
// }
// console.log(course.getInfo())

// const student = {
//     name: "Kavya",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     },
//     getStatus: function() {
//         if (this.marks >= 80) {
//             return this.name + " is doing great!";
//         }
//         return this.name + " needs more practice.";
//     }
// };

// console.log(student.greet());      // Hello, Kavya
// console.log(student.getStatus());  // Kavya is doing great!

// Create a person object with properties firstName and lastName. Add a method called getFullName that returns the full name using this. Call the method and print the result.


// let person = {
//     firstName:"Anand",
//     lastName:"Kaushik",
//     age:21,
//     getFullName : function(){
//         return this.firstName+" "+this.lastName;
//     },
//     isAdult : function(){
//         if(this.age>=18){
//             return true;
//         }else{
//             return false
//         }
//         // return this.age>=18;
//     }
// }
// console.log(person.getFullName());
// console.log(person.isAdult())

// Add another method named isAdult that checks whether this.age is 18 or above and returns true or false. Test the method with different age values.

// 10. Looping Through an Object => for In Loop

// let student = {
//     name : "John",
//     age : 19,
//     college : "CGXSU"
// }

// for(const key in student){
//     console.log(key,"=>",student[key])
// }


// Create a student object with at least four properties. Use a for...in loop to print only the values (not the keys) of all properties.

// let student = {
//     name: "Shirish",
//     age: 18,
//     isStudent: true,
//     isPresent: false
// }
// let count = 0

// for(let key in student){
//     count+=1
// }
// console.log(count);
// Write a for...in loop that counts how many properties the object has and prints the total count at the end.
// for(let key in student){
//     console.log(student[key])
// }

// Nested Objects => Object inside an object

// let student = {
//     name : "Aditya",
//     age : 25,
//     marks : {
//         JavaScript : 95,
//         Python : 98,
//         GitHub : 85
//     }
// }
// console.log(student.marks.Python)
// for(const key in student.marks){
//     console.log(key, "=>", student.marks[key])
// }

// Create a company object that contains a nested address object (with city and pincode) and an array named employees containing three employee names. Print the city and the first employee name.


// let company = {
//     address : {
//         city : "kalol",
//         pincode : 396725
//     },
//     employee : ["yash", "mayank","lavya"]
// // }
// // console.log(` address :- ${company.address.city} name :- ${company.employee[1]}`)




// const codingGitaStudents = [
//     ["Jenil", [85, 90, 92]],
//     ["Mahir", [78, 80, 75]],
//     ["Yashvi", [88, 92, 89]]
// ];

// for(let i=0; i<= codingGitaStudents.length-1; i++){
//     let studentName = codingGitaStudents[i][0];
//     let studentMarks = codingGitaStudents[i][1];
//     let total=0
//     for(let j=0; j<=studentMarks.length-1 ; j++){
//         // console.log(studentMarks[j])
//         total += studentMarks[j];
//     }
//     // console.log(studentName, total)
//     let avg = total/studentMarks.length;
//     console.log("Name:", studentName );
//     console.log("Marks: ", studentMarks[0], studentMarks[1], studentMarks[2]);
//     console.log("Total: ", total );
//     console.log("Avearge :", avg );
//     // console.log(studentName, studentMarks)



// Loop through each student
// Calculate total and average
// Print:
//     Name: ______
//     Marks: __ __ __
//     Total: __
//     Average: __



// let person ={
//     name: "Albert",  // string
//     age : 22,    // number
//     hobbies : ["Playing cricket", "singing", "gardening"],   // arr inside obj
//     address : {      // nested obj
//         city : "Delhi",
//         pin : 415212
//     },
//     greet : function(){       // method
//         return "Hello, I am " + this.name;
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[2]);
// console.log(person.address.city);
// console.log(person.address.pin);
// console.log(person.greet());


// Create a product object that contains: name, an array of available colors, and a nested manufacturer object with name and country. Print the manufacturer’s country.

// let product = {
//     name : "Samsung Galaxy s26 ultra",
//     colors : [
//                 "Obsidian black",
//                 "Sky Blue", 
//                 "Pink Gold",
//                 "cobalt violet",
//                 "Ferrari red"
//             ],
//     manufacturer : {
//         name : "Samsung Electronics",
//         country : "South Korea"
//     },
//     getDetails: function(){
//         return "This is a " + this.name + " product, manufactured by "+ this.manufacturer.name
//     }
// }

// console.log(product.getDetails())
// Add a method named getDetails to the product object that returns a string combining the product name and manufacturer name. Call the method and print the result.

// 9. Methods & the this Keyword=>

// Method => function inside an obj;
// this keyword => refers to the current object that owns the method.

// let course = {
//     title : "JavaScript",
//     duration : 30,
//     getInfo : function(){       // getInfo => method
//         return "This is a "+this.title+" session"  // this => course obj
//     }
// }
// console.log(course.getInfo())

// const student = {
//     name: "Kavya",
//     marks: 90,
//     greet: function() {
//         return "Hello, " + this.name;
//     },
//     getStatus: function() {
//         if (this.marks >= 80) {
//             return this.name + " is doing great!";
//         }
//         return this.name + " needs more practice.";
//     }
// };

// console.log(student.greet());      // Hello, Kavya
// console.log(student.getStatus());  // Kavya is doing great!

// Create a person object with properties firstName and lastName. Add a method called getFullName that returns the full name using this. Call the method and print the result.


// let person = {
//     firstName:"Anand",
//     lastName:"Kaushik",
//     age:21,
//     getFullName : function(){
//         return this.firstName+" "+this.lastName;
//     },
//     isAdult : function(){
//         if(this.age>=18){
//             return true;
//         }else{
//             return false
//         }
//         // return this.age>=18;
//     }
// }
// console.log(person.getFullName());
// console.log(person.isAdult())

// Add another method named isAdult that checks whether this.age is 18 or above and returns true or false. Test the method with different age values.

// 10. Looping Through an Object => for In Loop

// let student = {
//     name : "John",
//     age : 19,
//     college : "CGXSU"
// }

// for(const key in student){
//     console.log(key,"=>",student[key])
// }


// Create a student object with at least four properties. Use a for...in loop to print only the values (not the keys) of all properties.

// let student = {
//     name: "Shirish",
//     age: 18,
//     isStudent: true,
//     isPresent: false
// }
// let count = 0

// for(let key in student){
//     count+=1
// }
// console.log(count);
// Write a for...in loop that counts how many properties the object has and prints the total count at the end.
// for(let key in student){
//     console.log(student[key])
// }

// Nested Objects => Object inside an object

// let student = {
//     name : "Aditya",
//     age : 25,
//     marks : {
//         JavaScript : 95,
//         Python : 98,
//         GitHub : 85
//     }
// }
// console.log(student.marks.Python)
// for(const key in student.marks){
//     console.log(key, "=>", student.marks[key])
// }

// Create a company object that contains a nested address object (with city and pincode) and an array named employees containing three employee names. Print the city and the first employee name.


// let company = {
//     address : {
//         city : "kalol",
//         pincode : 396725
//     },
//     employee : ["yash", "mayank","lavya"]
// }
// console.log(` address :- ${company.address.city} name :- ${company.employee[1]}`)




const codingGitaStudents = [
    ["Jenil", [85, 90, 92]],
    ["Mahir", [78, 80, 75]],
    ["Yashvi", [88, 92, 89]]
];

for(let i=0; i<= codingGitaStudents.length-1; i++){
    let studentName = codingGitaStudents[i][0];
    let studentMarks = codingGitaStudents[i][1];
    let total=0
    for(let j=0; j<=studentMarks.length-1 ; j++){
        // console.log(studentMarks[j])
        total += studentMarks[j];
    }
    // console.log(studentName, total)
    let avg = total/studentMarks.length;
    console.log("Name:", studentName );
    console.log("Marks: ", studentMarks[0], studentMarks[1], studentMarks[2]);
    console.log("Total: ", total );
    console.log("Avearge :", avg );
    // console.log(studentName, studentMarks)
}


// Loop through each student
// Calculate total and average
// Print:
//     Name: ______
//     Marks: __ __ __
//     Total: __
//     Average: __



for(let i=0; i<= codingGitaStudents.length-1; i++){
    let studentName = codingGitaStudents[i][0];
    let studentMarks = codingGitaStudents[i][1];
    let total=0
    for(let j=0; j<=studentMarks.length-1 ; j++){
        // console.log(studentMarks[j])
        total += studentMarks[j];
    }
    // console.log(studentName, total)
    let avg = total/studentMarks.length;
    console.log("Name:", studentName );
    console.log("Marks: ", studentMarks[0], studentMarks[1], studentMarks[2]);
    console.log("Total: ", total );
    console.log("Avearge :", avg );
    // console.log(studentName, studentMarks)
}


// Loop through each student
// Calculate total and average
// Print:
//     Name: ______
//     Marks: __ __ __
//     Total: __
//     Average: __

let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr);        // [10, 20, 30]
console.log(arr.length); // 3
