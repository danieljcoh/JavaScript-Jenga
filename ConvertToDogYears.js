//PROBLEM: Discover how old you'd be if you were a dog.
/*

*/


//My age in human years
let myAge = 28;

//The first two years of a dogs life count as 10.5 each before each years value changes so we put those two years as one variable.
let earlyYears = 2;

let laterYears = myAge - 2;

earlyYears *= 10.5;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

//created a variable which stores a string of my name that is being formatted to all lowercase.
let myName = "Daniel".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);