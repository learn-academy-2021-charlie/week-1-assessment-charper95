// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// // Function Signature
// // input: number
// // output: string indicating below, at, or above boiling point.

// // Examples 
// // input: 190 // output --> "190 is below boiling point"
// // input: 212 // output --> "212 is at boiling point"
// // input: 230 // output --> "230 is above boiling point"
// // input: "random" // output --> "error"

// // Process
// // Create a function called boilingPoint that takes in a number called temperature
// const boilingPoint = (temperature) => {
//     // if temperature is below 212 return `${temperature} is below boiling point`
//     if(temperature < 212) {
//         return `${temperature} is below boiling point`
//     }
//     // if temperature is above 212 return `${temperature} is above boiling point`
//     else if(temperature > 212) {
//         return `${temperature} is above boiling point`
//     }
//     // if temperature is at 212 return "212 is at boiling point"
//     else if(temperature === 212) {
//         return "212 is at boiling point"
//     }
//     // any other input return error
//     else {
//         return "error"
//     }
// }

// console.log(boilingPoint(temp1))
// // output --> "35 is below boiling point"
// console.log(boilingPoint(temp2))
// // output --> "350 is above boiling point"
// console.log(boilingPoint(temp3))
// // output --> "212 is at boiling point"
// console.log(boilingPoint("test"))
// // output --> "error"
// console.log(boilingPoint(190))
// // output --> "190 is below boiling point"
// console.log(boilingPoint(230))
// // output --> "230 is below boiling point"


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// // Function Signature
// // input: 2 arrays
// // output: the combined arrays sorted least to greatest

// // Create a function that takes in two arrays of numbers
// const combineArray = (arr1, arr2) => {
//     // using the built-in methods .concat() and .sort() return a single array with all the values sorted least to greatest
//     return arr1.concat(arr2).sort((a, b) => a - b);
//     // the sort method needs a compareFunction (a,b) => a - b) to correctly sort numbers. Without it the elements of an array are converted to strings and sorted that way. This would incorrectly return the array of [-7, -9, 0, 13, 22, 3, 36, 7, 8, 9]
//     // The concat method combines the arrays, the sort method sorts them.
//     // The compare function takes two elements from the array, say 3 and 7, and subtracts them to compare if the first number is less than or greater than the second number. 3 subtracted by 7 returns a number less than 0, so 3 comes before 7. 7 subtracted by 3 returns a number larger than 0, so 7 goes after 3.
// }

// console.log(combineArray(myNumbers1, myNumbers2))
// // output --> [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

// // Function Signature
// // input: string
// // output: the string reversed

// // Create a function called stringReverse that takes in a string called string
// const stringReverse = (string) => {
//     // using the built-in methods of .split(), .reverse(), and .join() return a string with all letters reversed
//     return string.split("").reverse().join("");
//     // the .split() method with the separator as an empty string "" converts the string into an array of its characters
//     // the .reverse() method reverses the array
//     // the .join() with the separator as an empty string "" converts the elements of an array into a string
// }

// console.log(stringReverse(myString1))
// // output --> "ovarb"
// console.log(stringReverse(myString2))
// // output --> "eilrahc"



// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

// // Function Signature
// // input: 2 numbers
// // output: the difference of the smaller number from the larger number

// // Create a function called subtraction that takes in two numbers
// const subtraction = (num1, num2) => {
//     // if number 1 is larger than number 2
//     if(num1 > num2) {
//         // return the difference of number 2 from number 1
//         return num1 - num2
//     } 
//     // if number 1 is less than number 2
//     else if(num1 < num2) {
//         // return the difference of number 1 from number 2
//         return num2 - num1
//     }
// }

// console.log(subtraction(numberExample1, numberExample2))
// // output --> 15
// console.log(subtraction(numberExample3, numberExample4))
// // output --> 12


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

// // Function Signature
// // input: 2 numbers or a number and a string
// // output: the difference of the smaller number from the larger number or error message

// // Create a function called subtraction that takes in two numbers
// const subtraction = (num1, num2) => {
//     // if number 1 is larger than number 2
//     if(num1 > num2) {
//         // return the difference of number 2 from number 1
//         return num1 - num2
//     } 
//     // if number 1 is less than number 2
//     else if(num1 < num2) {
//         // return the difference of number 1 from number 2
//         return num2 - num1
//     }
//     // if number 1 or number 2 is not a number
//     else if(typeof num1 != "number" || typeof num2 != "number")
//         // return "Your input is not a number"
//         return "Your input is not a number"
// }

// console.log(subtraction(numberExampleRefactor1, numberExampleRefactor2))
// // output --> "Your input is not a number"
// console.log(subtraction(numberExampleRefactor3, numberExampleRefactor4))
// // output --> 3