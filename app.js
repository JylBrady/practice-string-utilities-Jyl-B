/*
Modules & Package Management | Lesson 2 
Practice: String Utilities

2. Test the Module in app.js: 
    ○ Import the stringUtils.js module into app.js. 
    ○ Test each function with different string inputs and log the results to the console.
*/

const stringUtils = require("./stringUtils.js");   //imports the stringUtils.js module containing capitalize, reverse and contains

console.log("happy birthday!");
console.log(stringUtils.capitalize("happy birthday!"));
console.log(stringUtils.reverse("happy birthday!"));
console.log(stringUtils.contains("happy birthday!", "happy"));
console.log(stringUtils.contains("happy birthday!", "false"));
console.log("undefined");
console.log(stringUtils.capitalize());
console.log(stringUtils.reverse());
console.log(stringUtils.contains());
console.log(stringUtils.contains());
console.log("");
console.log(stringUtils.capitalize(""));
console.log(stringUtils.reverse(""));
console.log(stringUtils.contains(""));
console.log(stringUtils.contains(""));
console.log(9762);
console.log(stringUtils.capitalize(9762));
console.log(stringUtils.reverse(9762));
console.log(stringUtils.contains(9762, 6));
console.log(stringUtils.contains(9762, 3));

