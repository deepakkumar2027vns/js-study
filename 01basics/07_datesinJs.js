// dates

let myDates = new Date();
console.log(myDates.toString()); //Mon Mar 10 2025 06:56:18 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); //Mon Mar 10 2025
console.log(myDates.toLocaleString());//3/10/2025, 6:57:14 AM

console.log(typeof(myDates)); //Object

let myCreatedDate = new Date("01-14-2023"); // month start at 0 to 11

console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023


// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // milli sec from 1970 jan
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));// second answer

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString(`default`,{
    weekday:"long",
})


8 





