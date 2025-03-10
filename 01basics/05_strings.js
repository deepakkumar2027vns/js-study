const name = "deepak";
const repoCount = 50;
console.log(name+repoCount+ "value");

console.log(`hellow my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hit-eshHc'); /// string is object

console.log(gameName.__proto__);

console.log(gameName.length); // method or functio length, uppercse etc

console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(-1,4); // last value not include -1 not take
console.log(newString);

const anotherString = gameName.slice(-8,4); // -8,-2 use in this

console.log(anotherString);

const newString0ne ="   hittesh   ";

console.log(newString0ne);
console.log(newString0ne.trim());

const url = "hhtps://hittesh.com/hitesh%20chaudhary";

console.log(url.replace('%20',"-"));

console.log(url.includes('deepak'));// false

console.log(gameName.split('-'));






