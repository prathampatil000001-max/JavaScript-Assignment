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
