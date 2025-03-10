// # Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigiNT

// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
let userEmail;

const Id = Symbol("123");
const anotherId = Symbol('123');

console.log( Id === anotherId);

const bigNumber = 66543456777654445667n; // bigInt





//  # Reference (Non prinitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof(null)); // object

console.log(typeof myFunction); // function object
console.log(typeof(Id)); // symbol

//+++++++++++++


// STACK (Primitive) and HEAP (Non-Primaitive refrence) MEMEORY 

//ex stack 

let myYoutubeName = "deepak.kom";

let anotherNmae = myYoutubeName;

anotherNmae = "chaiAndCode";

console.log(myYoutubeName);
console.log(anotherNmae);

//ex heap copy by refernce

let userOne = {
    email: "user@gmail.com",
    upi: "@jhff"
}
let userTwo = userOne;

userTwo.email = "deepak@mail.com";
console.log(userOne);
console.log(userTwo);






