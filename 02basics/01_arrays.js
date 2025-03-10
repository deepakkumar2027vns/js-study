// array

const myArr = [0, 2, 3, 4, 5, 6, "deepak"]; // resizable, string, number all using

// console.log(myArr[0]); // shallow and deep copy

// const myHeroes = ["shaktiman","nagraj"];

// const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[2]);

 // array methods

//  myArr.push(6);
//  myArr.push(7);
//  myArr.pop();

// myArr.unshift(9); // start mai add kr k baki ko shift krega
// myArr.shift(); // start ko remove kr dega

// console.log(myArr.indexOf(3)); // false include

const newArr = myArr.join();


// console.log(myArr); //[ 0, 2, 3, 4, 5, 6, 'deepak' ]
// console.log(newArr); // 0,2,3,4,5,6,deepak  bind and into string change of array

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3); //[ 2, 3 ] return section of array

console.log(myn1);
console.log("B", myArr); //B [ 0, 2, 3, 4, 5, 6, 'deepak' ]

const myn2 = myArr.splice(1,3);// original array manupulate krta hai
console.log(myn2);// [ 2, 3, 4 ]
console.log(myArr); // delete ho gya after splice







