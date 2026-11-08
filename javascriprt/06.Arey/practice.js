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

var student = {
    name: "Krishna",
    marks: [80, 90, 85],
    avg: function() {
        return this.marks[0] + this.marks[1] + this.marks[2] / 3;
    }
};

console.log(student.avg());

var student = { name: "Yashvi", age: 18 };

student.course = "CSE";
student["batch"] = "2025";

console.log(student);

var student = {
    name: "Priyesha",
    marks: 90,
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(student.greet());

var student = {
    name: "Krishna",
    age: 18,
    course: "CSE"
};

console.log("name:", student.name);
console.log("age:", student.age);
console.log("course:", student.course);

var student = {
    name: "Arjun",
    address: {
        city: "Ahmedabad",
        pincode: 380015
    }
};

console.log(student.address.city);

var students = [
    { name: "Jenil", marks: 85 },
    { name: "Mahir", marks: 90 },
    { name: "Yashvi", marks: 92 }
];

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].marks);
}

var student = {
    name: "Krishna",
    scores: [85, 92, 88],
    getAverage: function() {
        var total = this.scores[0] + this.scores[1] + this.scores[2];
        return total / 3;
    }
};

console.log(student.getAverage());

// 16. Practice Exercises
// Exercise 1
// Create an object book with properties:

// title
// author
// price Print all values.
// Exercise 2
// Add a method discountedPrice() that returns price - 50.

// Exercise 3
// Create an array of 5 student objects:

// name
// marks Print names and marks using a loop.
// Exercise 4
// Add an address object inside each student.

// Exercise 5
// Create a course object with:

// name
// duration
// topics (array)
// instructor (object)
// Print the instructor's name.

var student = { name: "Yashvi", age: 18 };

student.course = "CSE";
student["batch"] = "2025";

console.log(student);

var student = {
    name: "Priyesha",
    marks: 90,
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(student.greet());

var student = {
    name: "Krishna",
    age: 18,
    course: "CSE"
};

console.log("name:", student.name);
console.log("age:", student.age);
console.log("course:", student.course);

var student = {
    name: "Arjun",
    address: {
        city: "Ahmedabad",
        pincode: 380015
    }
};

console.log(student.address.city);

var student = {
    name: "Krishna",
    scores: [85, 92, 88],
    getAverage: function() {
        var total = this.scores[0] + this.scores[1] + this.scores[2];
        return total / 3;
    }
};

console.log(student.getAverage());

var student = {
    name: "Priyesha",
    marks: 90,
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(student.greet());

var student = {
    name: "Krishna",
    age: 18,
    course: "CSE"
};

console.log("name:", student.name);
console.log("age:", student.age);
console.log("course:", student.course);

var student = {
    name: "Arjun",
    address: {
        city: "Ahmedabad",
        pincode: 380015
    }
};

console.log(student.address.city);

// var students = [
//     { name: "Jenil", marks: 85 },
//     { name: "Mahir", marks: 90 },
//     { name: "Yashvi", marks: 92 }
// ];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name, students[i].marks);
// }