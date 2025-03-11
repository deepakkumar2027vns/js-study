// singleton -> constructor making Object.create 

// Object litterals

//symbol

const mySym = Symbol("key1");

const JsUser ={
    name: "hitesh",
    "fullname": "deepak kumar",
    [mySym]: "mykey1", // use symbol in []
    age: 18,
    location: "Varanasi",
    email: "deepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

};

console.log(JsUser["fullname"]); // access as string because it string also


console.log(JsUser[mySym]);


// Object.freeze(JsUser); // after using freeze it not change

JsUser.email = "ayush@gmail.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log((`hello js user`));
    
}
// console.log(JsUser.greeting); /// undefined ,[Function (anonymous)]

JsUser.greeting2 = function(){
    console.log((`hello js user, ${this.name}`));
    
}

console.log(JsUser.greeting()); //hello js user
console.log(JsUser.greeting2());













