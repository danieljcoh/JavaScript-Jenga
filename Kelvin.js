//PROBLEM: With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
/*

*/


// This is the forecast temperature for the day
const kelvin = 0;

//This is the transposition of temperature from kevlin -> celsius
let celsius = kelvin - 273;

//the equation to convert temp to F
//using Math.floor to get a nice round number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)



let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees newton`)
