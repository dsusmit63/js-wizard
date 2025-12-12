let fullName = "John Doe";
let designation = ""; //Empty String
let age = 21;
let isLoggedIn = true;
let x = 12232238233232939923n;
let y;
let z = null;

console.log(typeof fullName); //string
console.log(typeof age); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof x); //bigint
console.log(typeof y); //undefined
console.log(typeof z); //object
console.log(typeof { firstName: "John", lastName: "Doe", age: 21 }); //object
console.log(typeof [10, 20, 30, 40, 50]); //object
console.log(
  typeof function hello() {
    console.log("Hello World");
  }
); //function
