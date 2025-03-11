const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes); // array take array as a single data
// console.log(marvel_heroes[3][1]);

// const allHeroes =  marvel_heroes.concat(dc_heroes); // array take array as a single data
// console.log(allHeroes); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allNewHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allNewHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // depth use in flat

console.log(real_another_array); //[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh")); //[ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"hitesh"})); // [] return emoty array if not mention key or value imp

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



