// // Type Alias
// type UserID = string | number;
// let user12: UserID = 123;
// let user2: UserID = "abc123";

// console.log(user12); // 123
// console.log(user2); // "abc123"

// // Interface
// interface User {
//   name: string;
//   age?: number;
// }
// const user3: User = { name: "Hemanth", age: 22 ,email: "aaa@gmail.com"};
// console.log(user3)
// interface User {
//   email: string;    
// }
// delete user3.age; // age is removed
// console.log(user3);


// // Enum
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   m= "MIDDLE"
// }
// let dir: Direction = Direction.Up;
// let dir2: Direction = Direction.m;
// console.log(dir); // "UP"
// console.log(dir2); // "MIDDLE"

// // Union & Intersection
// type Admin = { role?: string };
// type Person = { name: string };
// type AdminPerson = Admin & Person;
// let admin: AdminPerson = {  role: "Admin",name: "Hemanth"};
// console.log(admin); // { role: "Admin", name: "Hemanth" }
// let person: Person = { name: "harsha" };
// delete admin.role; // role is removed
// console.log(admin); // { name: "Hemanth" }
// console.log(person); // { name: "harsha" }

// function showValue(value: string | number[] | number /*| boolean*/): void {
//   console.log(value);
// }
// showValue(10);
// showValue("Hi");
// //showValue(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// showValue([1,2,3]);

// // Generics
// function identity<T>(value: T): T {
//   return value;
// }
// console.log(identity<number>(5));
// console.log(identity<string>("hello"));

// Optional Chaining
interface Address {
  city?: string;
}
let addr: Address = {};
console.log(addr.city?.toUpperCase); // undefined, no error
let addr2: Address = { city: "Bangalore" };
console.log(addr2.city?.toUpperCase()); // "BANGALORE"
console.log(addr2.city);


