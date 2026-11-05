const students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[0]); // Jenil
console.log(students[2]); // Priyesha

let marks = [80, 75, 90];
marks[1] = 95;
console.log(marks); // [80, 95, 90]

const arr = [1, 2, 3, 4];
console.log(arr.length); // 4

let nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

nums.unshift(0);
console.log(nums); // [0, 1, 2, 3, 4]

const names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir")); // 1
console.log(names.indexOf("Krishna")); // -1

const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix[2][1]); // 6

// var nums = [10, 20, 30];
// var removed = nums.pop();
// console.log(nums);     // [10, 20]
// console.log(removed);  // 30

var list = [2, 3, 4];
list.unshift(1);
console.log(list); // [1, 2, 3, 4]

// var arr = [100, 200, 300];
// var first = arr.shift();
// console.log(arr);   // [200, 300]
// console.log(first); // 100

// var students = ["Jenil", "Mahir"];
// students.push("Yashvi");
// console.log(students); // ["Jenil", "Mahir", "Yashvi"]

// var nums = [10, 20, 30];
// var removed = nums.pop();
// console.log(nums);     // [10, 20]
// console.log(removed);  // 30

var marks = [80, 90, 100];
console.log(marks.length - 1);  // wrong: prints 2 instead of total marks

var total = marks1 + marks2 + marks3;
console.log("Total is:", total);

try {
    console.log(studentName);
} catch (e) {
    console.log("An error occurred.");
    console.log("Error message:", e.message);
}

var age = 15;

try {
    if (age < 18) {
        throw "Underage student";
    }
} catch (err) {
    console.log("Error:", err);
}

var total = 0;
var marks = [80, 90, 70];

for (var i = 1; i <= marks.length; i++) {   // problem: starts at 1
    total += marks[i];
}
console.log(total);