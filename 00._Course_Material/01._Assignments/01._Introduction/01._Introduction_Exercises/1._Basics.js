// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my last name is ${lastName}`);


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line

const currentYearFirst = Number(year) + increment;
const currentYearSecond = parseInt(year) + increment;
const currentYearThird = +year + increment;

console.log(currentYearFirst);
console.log(currentYearSecond);
console.log(currentYearThird);

const possibleNumber = "01235adsf8";

console.log(Number(possibleNumber));
console.log(parseInt(possibleNumber));
console.log(+possibleNumber);



// --------------------------------------
