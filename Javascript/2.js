// // Arrays
// let fruits = ["apple", "banana", 42, true];
// console.log(fruits.map(f => f));
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.filter(num => num > 2));
// console.log(numbers.map(num => num * 2));
// console.log(fruits.includes("banana"));
// fruits.push("grape");
// console.log(fruits);

// // Objects
// let person = {
//   name: "Hemanth",
//   age: 22,
// };
// console.log(person.name);
// console.log("name" in person);
// delete person.age;
// console.log(person);
// person["email"] = "anuhemu25@gmail.com"
// console.log(person);

// // Functions
// function greet(name) {
//   return `Hello, ${name}`;
// }
// // const greetExpr = function(name) {
// //   return `Hi, ${name}`;
// // };
// const greetArrow = (name) => `Hey, ${name}`;
// console.log(greet("Hemanth"));
// // console.log(greetExpr("Hemanth"));
// console.log(greetArrow("Hemanth"));

// // Prototypal Inheritance
// let animal = {
//   eats: true
// };
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// console.log(rabbit.eats); // inherited

// // Error Handling
// try {
//   let result = 10 / 0;
//   if (!isFinite(result)) throw new Error("Invalid division");
// } catch (err) {
//   console.log("Error:", err.message);
// }


// Error Handling Example

// try {
//   let num = 10;
//   let result = num / 0;
//   if (!isFinite(result)) {
//     throw new Error("Cannot divide by zero");
//   }
//   console.log("Result:", result);
// } catch (error) {
//   console.log("Caught an error:", error.message);
// } finally {
//   console.log("This will always run (cleanup or final step)");
// }