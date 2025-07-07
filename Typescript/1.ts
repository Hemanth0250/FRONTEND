// let age: number = 22;
// let isDev: boolean = true;
// let agee: string = "22";
// let isDevv: boolean = false

// console.log(age==Number(agee))
// // console.log(isDev==isDevv)

// function greet(user: string) {
//   return "Hello " + user;
// }

// console.log(greet("Hemanth")); 
// // console.log(greet(250));       

// let city: string = "Bangalore"; // inferred as string
// city = "mysore";
// // city = 123; // not convertible
// console.log(city)

// let n= 10;
// console.log(typeof(n));
// let count: number = 10;
// let isCool: boolean = true;

// console.log(typeof(isCool));
// console.log(typeof(count));

// let random: any = "text";
// random = 10; 
// random = "hemu"

// console.log(typeof(random));

//Interfaces (for object structure)

interface Person{
    name:string;
    age:number;
}

let user:Person={
    name:"hemu",
    age:22
};

let user1:Person={
    name:"abhi",
    age:25
};

console.log(user.name);
console.log(user1)