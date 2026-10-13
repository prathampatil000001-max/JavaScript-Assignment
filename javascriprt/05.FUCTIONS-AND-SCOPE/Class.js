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

function printHello(){
    console.log("Hello")
}

function greet(name) {
    return "Welcome to CodingGita, " + name;
}

console.log(greet("Jenil"));
console.log(greet("Priyesha"));

console.log(add(2, 3)); // This works

function add(a, b) {
    return a + b;
}
const percentage = function(marks, total) {
    return (marks / total) *100;
};

console.log(percentage(555, 100));

function area(length, windth) {
    return length * windth;
}

console.log(area(70, 85));

// let m1 = 85, m2 = 92, m3 = 78;
// let avg1 = (m1 + m2 + m3) / 3;

// let x1 = 70, x2 = 60, x3 = 80;
// let avg2 = (x1 + x2 + x3) / 3;

// function average(a, b, c) {
//     return (a + b + c) / 3;
// }

// console.log(average(69, 92, 78)); // For Jenil
// console.log(average(52, 60, 80)); // For Mahir

// function showMarks() {
//     let marks = 90;
//     console.log(marks);
// }

// let batch = "CSE";

// function printBatch() {
//     console.log(batch);
// }

// printBatch(); // CSE

// function greet(name){
//     return"Welcome to coding gita for :-"+name;

// }
// console.log(greet("Prathamesh"))


// function multiply(a,b){
//     return a*b;

// }console.log(multiply(7,5))

function fullname(first,last){
    return first+" "  +last;

}let ans=fullname("PRATHAM", "PATIL")
console.log(ans)

function maxOfTwo(a, b) {
  return a > b ? a : b;
}console.log(maxOfTwo(10, 5)); 


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); 

function studentSummary(name, m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;

  return {
    name: name,
    total: total,
    average: average
  };
}
console.log(studentSummary("Rahul Gandhi", 80, 90, 70));