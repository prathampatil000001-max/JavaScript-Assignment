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

