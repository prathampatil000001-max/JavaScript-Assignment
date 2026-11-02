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