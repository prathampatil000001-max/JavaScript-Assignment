const person = {
    name: "John",                    // String
    age: 25,                         // Number
    isStudent: true,                 // Boolean
    hobbies: ["reading", "coding"],  // Array
    address: {                       // Nested object
        city: "Delhi",
        pincode: 110001
    },
    greet: function() {              // Method (function)
        return "Hello, " + this.name;
    }
};

console.log(person.name);        // John
console.log(person.hobbies[0]);  // reading
console.log(person.address.city);// Delhi
console.log(person.greet());     // Hello, John

// Create an object named car that contains three properties: brand (string), model (string), and year (number). After creating the object, use console.log() to print the entire object.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car);

// Create one object named employee that uses all of the following value types: a string, a number, a boolean, an array, a nested object, and a method. Print the object and also call the method.
const employee = {
    name: "Alice",
    age: 30,
    isManager: true,
    skills: ["JavaScript", "Python"],
    contact: {
        email: "alice@example.com",
        phone: "123-456-7890"
    },
    introduce: function() {
        return "Hi, I'm " + this.name + ", and I'm a " + (this.isManager ? "manager" : "developer") + ".";
    }
};

console.log(employee);
console.log(employee.introduce());

// const student = {
//     name: "Michael",
//     age: 18,
//     marks: 88
// };
// console.log (student)

// const student = {
//     name :"Michel",
//     age :18,
//     Marks:37
// };
// console.log(student)


// const student = {
//     name: "Pratham patil ",
//     age: 18,
//     marks: 92
// };

// console.log(student)

// const student = new Object();
// student.name = "Rahul";
// student.age = 19;
// student.marks = 85;

// console.log(student)

function Student(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
}

const student1 = new Student("Priya", 18, 90);
const student2 = new Student("John", 19, 87);

console.log(student1);
console.log(student2);