// let fib_series="0 1";
// let a=0;
// let b=1;
// for (let i=3; i<=20; i++){
//     let c=a+b;
//     fib_series+=c+" ";
//     a=b
//     b=c
// };
// console.log(fib_series)

// function printHello(){
//     console.log("Hello")
// }

// function greet(name) {
//     return "Welcome to CodingGita, " + name;
// }

// console.log(greet("Jenil"));
// console.log(greet("Priyesha"));

// console.log(add(2, 3)); // This works

// function add(a, b) {
//     return a + b;
// }
// const percentage = function(marks, total) {
//     return (marks / total) *100;
// };

// console.log(percentage(555, 100));

// function area(length, windth) {
//     return length * windth;
// }

// console.log(area(70, 85));

// // let m1 = 85, m2 = 92, m3 = 78;
// // let avg1 = (m1 + m2 + m3) / 3;

// // let x1 = 70, x2 = 60, x3 = 80;
// // let avg2 = (x1 + x2 + x3) / 3;

// // function average(a, b, c) {
// //     return (a + b + c) / 3;
// // }

// // console.log(average(69, 92, 78)); // For Jenil
// // console.log(average(52, 60, 80)); // For Mahir

// // function showMarks() {
// //     let marks = 90;
// //     console.log(marks);
// // }

// // let batch = "CSE";

// // function printBatch() {
// //     console.log(batch);
// // }

// // printBatch(); // CSE

// // function greet(name){
// //     return"Welcome to coding gita for :-"+name;

// // }
// // console.log(greet("Prathamesh"))


// // function multiply(a,b){
// //     return a*b;

// // }console.log(multiply(7,5))

// function fullname(first,last){
//     return first+" "  +last;

// }let anst=fullname("PRATHAM", "PATIL")
// console.log(anst)

// function maxOfTwo(a, b) {
//   return a > b ? a : b;
// }console.log(maxOfTwo(10, 5)); 


// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(4)); 

// function studentSummary(name, m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   let average = total / 3;

//   return {
//     name: name,
//     total: total,
//     average: average
//   };
// }
// console.log(studentSummary("Rahul Gandhi", 80, 90, 70));

// // METHOD 1
// function average(x,y){
//     return (x+y)/2
// }
// let result=average(22,14);
// console.log(result)
// // METHOD 2
// function avg(x,y){
//     let res=(x+y)/2
//     return res
// }console.log(average(10,20))

// // FUNCTIONAL SCOPE
// function showMark(){
//     let marks=79;
//     console.log(marks);
// }
// showMark();
// // console.log(marks) ==>This Leads to create Error because ,we can't write outside the function in function scope

// // GLOBAL SCOpe
// let mark=79;  //Variable is Assigned Outside the function
// function showMarks(){
//     console.log(mark)   //It can Be Written Either Inside the Functions Or Outside The Function
// }
// showMarks()
// console.log(mark)  //Either Inside Or Outsiode The Funcrtion ,IT Doesn't Lead To an Error.

// //QUESTION_3
// function displayAge(){
//     let age = 23;
//     return age
// }console.log(displayAge())


// // Write a function that calculates total marks and average for a student.

// function totalMarks(name,a,b,c,d){
//     let total=a+b+c+d;
//     let average=(a+b+c+d)/3
//     average=average.toFixed(1)
//     return `The Total Marks of ${name} is ${total} and his Average is ${average}`
// }
// console.log(totalMarks("Adarsh",98,78,81,93))
// console.log(totalMarks("Anand",96,81,83,88))

// // Write a function reportCard(name, m1, m2) that returns the student’s name, total, and average.

// function reportCard(name,m1,m2){
//     let sum=m1+m2
//     let avg=(m1+m2)/2
//     return `Name:${name}\n\tTotal Marks:${sum}\n\tAverage:${avg}`
// }
// console.log(reportCard("Adarsh Anand",79,93))
// console.log(reportCard("Rohan Kumar",91,83))
// console.log(reportCard("Rohit Sharma",81,93))

// // Write a function checkPass(aver) that returns "Pass" if average ≥40, otherwise "Fail"
// function checkPass(aver){
//     if(aver>=40){
//         return "Pass"
//     }else{
//         return "Fail"
//     }
//     // OR Use Ternery Operator
//     // aver>=40?return "Pass":"Fail"
// };
// let ans=checkPass(56)
// console.log(ans)

// // Create A Function studentReport(name, m1, m2) and contains a inner function ,total to calculate the total marks

// function studentReport(name,m1,m2){
//     function Total(m1,m2){
//         return m1+m2
//     };
//     let totalMarks=Total(m1,m2)
//     return `The Total Marks Obtain By the Student is ${totalMarks}`
// };
// console.log(studentReport("Adarsh Annad",98,87))


// // Write a function main that contains another function helper which returns "Helper function called". Call helper from inside main and return its result.

// function main(){
//     function helper(){
//         return "Helper Function Called"
//     };
//     let final=helper();
//     return final
// }
// console.log(main())

// // Write a function processMarks(m1, m2) that has an inner function sum to add the two marks and returns the total.
// function processMarks(){
//     function sum(q,w){
//         let addition=q+w
//         return addition
//     }
//     let Ans=sum(112,342)
//     return Ans
// }
// console.log(processMarks())

// function cube(n) {
//     return n ** 3;
// }
// console.log(cube(4));

// function isPositive(num) {
//     return num > 0;
// }

// console.log(isPositive(10));  // true
// console.log(isPositive(-5)); 

// function calculateTotal(m1, m2, m3) {
//     return m1 + m2 + m3;
// }
// console.log(calculateTotal(80, 90, 85)); // Output: 255

// function findAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// console.log(findAverage(70, 75, 80)); // Output: 75

// // Write a function sumOfThree(a, b, c) that returns the sum of three numbers. Call it with 10, 20, 30.
// function sumOfThree(a, b, c) {
//     return a + b + c;
// }

// console.log(sumOfThree(10, 20, 30));

// // Write a function averageOfTwo(x, y) that returns the average of two numbers. Call it with 50 and 70.
// function averageOfTwo(x, y) {
//     return (x + y) / 2;
// }

// console.log(averageOfTwo(50, 70));
// // Write a function reportCard(name, m1, m2) that returns the student’s name, total, and average.


// // unction reportCard(name, m1, m2) {
// //     let total = m1 + m2;
// //     let average = total / 2;

// //     return {
// //         name: name,
// //         total: total,
// //         average: average
// //     };
// // }

// // console.log(reportCard("Rahul", 80, 90));

// function showMarks() {
//     let marks = 90;
//     console.log(marks);
// }

// showMarks();
// console.log(showMark); // Error: marks is not defined

// let batch = "CSE";

// function printBatch() {
//     console.log(batch);
// }

// printBatch(); // CSE


// // Write a function checkPass(avg) that returns "Pass" if average ≥ 40, otherwise "Fail".
// function checkPass(avg) {
//     if (avg >= 40) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// console.log(checkPass(60)); // Pass
// console.log(checkPass(30)); // Fail


// // Write a function reportCard(name, m1, m2) that returns the student’s name, total, and average.

// function reportCard(name, m1, m2) {
//     let total = m1 + m2;
//     let average = total / 2;

//     return {
//         name: name,
//         total: total,
//         average: average
//     };
// }

// console.log(reportCard("Rahul", 80, 90));


// function print(){
//   let age =20;
   
//   console.log(print)

// };
// print();

// // let x=10;
// // function myFunc(){
// //     console.log(x);

// // }myFunc()


// // Write a function main that contains another function helper which returns "Helper function called". Call helper from inside main and return its result.

// function main() {
//     function helper() {
//         return "Helper function called";
//     }

//     return helper();
// };
// console.log(main());

// // function studentReport(name,m1,m2,m3){

// //     function findTotal(m1,m2,m3){
// //     let total=m1,m2,m3;

// //     }}

// //     function main() {
// //     function helper() {
// //         return "Helper function called";
// //     }

// //     return helper();
// // }

// function processMarks(m1, m2) {
//     function sum() {
//         return m1 + m2;
//     }

//     return sum();
// };
// console.log(processMarks(80, 90)); // 170

// function calculateDimension(radius) {
//     function findArea() {
//         return Math.PI * radius * radius;
//     }

//     function findPerimeter() {
//         return 2 * Math.PI * radius;
//     }

//     return {
//         area: findArea(),
//         perimeter: findPerimeter()
//     };
// }

// console.log(calculateDimension(2));

// // Scope in JavaScript
// // 1. What Is Scope?
// // Scope defines where a variable can be accessed in a program.

// // In Unit 1, JavaScript has only two types of scope for us:

// // Global Scope
// // Function Scope
// // (Because var does not support block scope.)

// // 2. Global Scope
// // A variable declared outside any function is in the global scope and can be accessed anywhere.

// // Example:
// var college = "CodingGita";

// function showCollege() {
//     console.log(college);
// }

// showCollege();       // CodingGita
// console.log(college); // CodingGita

// function test() {
//     for (var i = 1; i <= 3; i++) {
//         console.log("Inside:", i);
//     }

//     console.log("After loop inside function:", i);
// }

// test();
// console.log(i); // Error

// var institute = "CodingGita";

// function department() {
//     var dept = "CSE";

//     function batchInfo() {
//         var batch = "2025";

//         console.log(batch);     // 2025
//         console.log(dept);      // CSE
//         console.log(institute); // CodingGita
//     }

//     batchInfo();
// }

// department();

// function outer() {
//     var teacher = "Kartik Sir";

//     function inner() {
//         var student = "Jenil";
//         console.log(student);
//         console.log(teacher);
//     }

//     inner();
// }

// outer();

// // Inside inner() you can access both variables:

// // student (local)
// // teacher (outer function)
// // But from outside:

// // teacher is not available
// // student is not available

// if (true) {
//     var k = 20;
// }
// console.log(x); // 20

// function processStudent(name, m1, m2, m3) {
//      function calculateMarks() {
//          let total = m1 + m2 + m3;
//          let average = total / 3;
//          return { total, average };
//      }
//      let result = calculateMarks();
//      let status = (m1 >= 33 && m2 >= 33 && m3 >= 33)
//          ? "Pass" : "Fail";
//      return `Name: ${name}
//  Total: ${result.total}
//  Average: ${result.average.toFixed(2)}
//  Result: ${status}
//  -------------------`;
//  }
//  console.log(processStudent("Rahul", 80, 70, 90));
//  console.log(processStudent("Amit", 60, 75, 85));
//  console.log(processStudent("Ravi", 25, 50, 60));

//  function compareAverages(avg1, avg2) {
//      if (avg1 > avg2) {
//         return "First student has higher average";
//     } else if (avg2 > avg1) {
//         return "Second student has higher average";
//     } else {
//         return "Both averages are equal";
//      }
// }

//  console.log(compareAverages(80, 15));

function generatedReport(name, m1, m2, m3) {
    function result() {
        let total = m1 + m2 + m3;
        let average = total / 3;
        let status = (m1 >= 40 && m2 >= 40 && m3 >= 40)
            ? "Pass"
            : "Fail";

        return {
            studentName: name,
            total: total,
            average: average,
            result: status
        };
    }

    return result();
}

console.log(generatedReport("Rahul", 70, 60, 80));


function generatedReport(name, m1, m2, m3) {

    function getTotal() {
        return m1 + m2 + m3;
    }

    function getAverage() {
        return getTotal() / 3;
    }

    function getResult() {
        if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
            return "Pass";
        } else {
            return "Fail";
        }
    }

    function report() {
        return {
            studentName: name,
            total: getTotal(),
            average: getAverage(),
            result: getResult()
        };
    }

    return report();
}

console.log(generatedReport("Rahul", 70, 60, 80));


var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);

if (true) {
    var x = 30;
}
console.log(x);

// 14. Multiple Choice Questions
// Q1. Which type of scope does var have?
// Block scope
// Function scope
// Lexical scope
// Module scope

function example() {
    if (true) {
        var x = 10;
    }

    console.log(x); // 10
}

example();

// Q2. What is the output?
// console.log(a);
// var a = 5;
// Error
// undefined
// 5
// null
var a;

console.log(a); // undefined

a = 5;

// Q3. Variables inside a function are:
// Global
// Available everywhere
// Local to the function
// Hoisted globally
// Answer: 3

function greet() {
    var message = "Hello, World!";
    console.log(message);
}

greet(); 


// 1Q4. What is the scope chain?
// Searching nested scopes outward
// Chain of events
// Chain of functions
// Loop control
// Answer: 
// let a = 10; // Global scope

// function outer() {
//     let b = 20; // Outer function scope

//     function inner() {
//         let c = 30; // Inner function scope

//         console.log(c); // 30
//         console.log(b); // 20
//         console.log(a); // 10
//     }

//     inner();
// }

// outer();


// let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// let arr = [5, 10, 15];

// arr.push(20);
// console.log(arr.push(10));
// arr.unshift(0);
// console.log(arr);

// let arr = [100, 200, 300, 400, 500];

// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// let students = ["Aman", "Rahul", "Priya", "Karan", "Neha"];

// console.log(students.indexOf("Priya"));
// console.log(students.indexOf("Rohit")); 

// let Arr = [10, "Hello", true, null];

// for (let i = 0; i < Arr.length; i++) {
//     console.log(typeof Arr[i]);
// }

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arr[1][2]);

// let arr2= [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80]
// ];
// console.log(arr2[0]);

// let marks = [
//     [80, 75, 90],
//     [85, 88, 92],
//     [70, 78, 82]
// ];
// console.log(marks[1]);

// const arr3= [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(arr3[2][2]);

// let arr4 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// arr4[1][1] = 100;
// console.log(arr4);

// console.log(a); // undefined
// var a = 10;

// var a;
// console.log(a); // undefined
// a = 10;


greet();  // Works

function greet() {
    console.log("Hello students of CodingGita");
}

function test() {
  let age = 25;
  let city = "Ahmedabad";

  console.log(age);  // 25
  console.log(city); // Ahmedabad
}

test();

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError


if (true) {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x); // 10
  console.log(y); // 20
}

console.log(z); // 30
// console.log(x); // ReferenceError
// console.log(y); // ReferenceError
function example() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log(a); // 1
  // console.log(b); // Error
  // console.log(c); // Error
}

example();


var score = 50;

function test() {
    var score = 90; // local shadows global
    console.log(score); // 90
}

test();
console.log(score); // 50

// let score = 50;

// function test() {
//     let score = 90; // local shadows global
//     console.log(score); // 90
// }

// test();
// console.log(score); // 50


// const score = 50;

// function test() {
//     const score = 90; // local shadows global
//     console.log(score); // 90
// }

// test();
// console.log(score); // 50

function outer() {
  let a = 10;

  function inner() {
    let b = 20;

    console.log(a); // 10
    console.log(b); // 20
  }

  inner();
  console.log(a); // 10
  // console.log(b); // ReferenceError
}

outer();

// Samjho:
// outer() ke andar a declare hai.
// inner() ke andar b declare hai.
// Inner function, outer function ka variable access kar sakta hai.
// Outer function, inner function ka local variable access nahi kar sakta.
function outer() {
  var a = 1;
  let b = 2;
  const c = 3;

  function inner() {
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
  }

  inner();
}

outer();

function outer() {
  function inner() {
    if (true) {
      var a = 10;
      let b = 20;
      const c = 30;
    }

    console.log(a); // 10
    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
  }

  inner();
}

outer();

// Yahan:
// var a → inner() ke function scope mein hai.
// let b aur const c → sirf if block mein accessible hain.

// var a = 5;

// function demo() {
//     var a = 10;
//     console.log(a);
// }

// demo();
// console.log(a);

// console.log(a);{
// var a = 10;
//   console.log(a)}



// if (true) {
//     var x = 20;
// }
// console.log(x); // 20

if (true) {
    var x = 30;
}
console.log(x);

for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
}
console.log(counter); // should be error

console.log(score);
var score = 40;


// Write a function that contains another function and prints values from both scopes.
function outer() {
  let a = 10; // Outer scope

  function inner() {
    let b = 20; // Inner scope

    console.log("Outer scope value:", a);
    console.log("Inner scope value:", b);
  }

  inner();
}

outer();

function outer() {
    var teacher = "Kartik Sir";

    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }

    inner();
}

outer();

if (true) {
    var x = 20;
}
console.log(x); // 20

console.log(a);
var a = 10;

var x = 10;
var x = 20; // allowed, but confusing

var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);

console.log(2*"2")

var college = "CodingGita";

function showCollege() {
    console.log(college);
}

showCollege();       // CodingGita
console.log(college); // CodingGita

if (true) {
    var x = 10;
}

console.log(x); // 10 (still accessible outside)

var a;
console.log(a); // undefined
a = 10;

greet();  // Works

function greet() {
    console.log("Hello students of CodingGita");
}
var institute = "CodingGita";

function department() {
    var dept = "CSE";

    function batchInfo() {
        var batch = "2025";

        console.log(batch);     // 2025
        console.log(dept);      // CSE
        console.log(institute); // CodingGita
    }

    batchInfo();
}

department();

var score = 50;

function test() {
    var score = 90; // local shadows global
    console.log(score); // 90
}

test();
console.log(score); // 50

function outer() {
    var teacher = "Kartik Sir";

    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }

    inner();
}

outer();
if (true) {
    var x = 20;
}
console.log(x); // 20
var score = 50;

function test() {
    var score = 90; // local shadows global
    console.log(score); // 90
}

test();
console.log(score); // 50

function outer() {
    var teacher = "Kartik Sir";

    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }

    inner();
}

outer();
if (true) {
    var x = 20;
}
console.log(x); // 20

var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);

if (true) {
    var x = 30;
}
console.log(x);

console.log(score);
var score = 40;
var score = 50;

function test() {
    var score = 90; // local shadows global
    console.log(score); // 90
}

test();
console.log(score); // 50

var students = ["Jenil", "Mahir"];
students.push("Yashvi");

console.log(students); // ["Jenil", "Mahir", "Yashvi"]
var nums = [10, 20, 30];
var removed = nums.pop();

console.log(nums);     // [10, 20]
console.log(removed);  // 30

var list = [2, 3, 4];
list.unshift(1);

console.log(list); // [1, 2, 3, 4]

var names = ["Jenil", "Arjun", "Krishna", "Arjun"];

console.log(names.indexOf("Arjun"));  // 1
console.log(names.indexOf("Mahir"));  // -1

var ids = [101, 102, 103];

console.log(ids.includes(102)); // true
console.log(ids.includes(200)); // false

var nums = [1, 2, 3];
nums.reverse();

console.log(nums); // [3, 2, 1]

const students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
if (true) {
    var x = 30;
}
console.log(x);
var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);