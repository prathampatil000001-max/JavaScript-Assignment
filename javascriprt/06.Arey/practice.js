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