// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: The console will output the length of the string "Charlie 2021" assigned to the variable "cohort" as a number.
// b) Verify and explain: My initial answer was correct. The console log took the input of the variable "cohort" that was assigned to the string "Charlie 2021", and using the .length built-in-method outputed the length of the string as the number 12.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: The console will output the 3rd character of the string "Hello World!" which is assigned to the variable "greeting". The 3rd character of the string should be the 2nd "l" in the word "Hello".
// b) Verify and explain: My initial answer was correct. The console log took the input of the variable "greeting" and, using the brackets with the number 3 attatched, outputed the 3rd character of the string "Hello World!". The 0th character would have been "H", the 1st character would have been "e", and the 2nd character would have been the first "l". The reason it does this is because strings are zero indexed.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: This will log the 1st index of the Array languages, which is the string "Ruby".
// b) Verify and explain: My intial answer was correct. The console log took the input of the variable "languages" and, using the brackets with the variable "index" (which was assigned the number 1) attached, outputed the 1st index of the Array, which is the string "Ruby". The reason it outputs the string "Ruby" instead of the string "Javascript" is because Arrays are zero indexed. That means that the string "Javascript" would be the 0th index.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will log the Array of the variable "weekendDays" with the strings of the Array changed to upper case.
// b) Verify and explain: My initial answer was incorrect. The reason why is the built-in-method .toUpperCase() only works with strings. The variable "weekendDays" is an Array. If you wanted to make the strings "saturday" and "sunday" uppercase together, one way would be to concatenate them together without the Array. Example: var weekendDays = "saturday" + " sunday".


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I think the console will log the data type of the lengths of the strings in the Array "dataTypes". This should just output each data type as a number, because the .length built-in-method will change the type of the strings in the array to numbers.
// b) Verify and explain: My initial answer was incorrect. I was wrong that the console would log the data type of the strings within the array as numbers. What is actually happening is the built-in-method of .length is determining the length of the Array "dataTypes", which is 3. There are 3 strings in the Array, so the length of the Array is 3. Then the operator "typeof" is showing that the length of the Array is a "number". If the built-in-method .length was gone, the data type of the Array "dataTypes" would be an "object".
