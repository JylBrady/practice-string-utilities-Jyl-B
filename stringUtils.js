// /*
// Modules & Package Management | Lesson 2 
// Practice: String Utilities

// Part 2: Practicing String Utilities
// 1.  Create the stringUtils.js Module: 
//     ○ Define and export the following functions: 
//         ■ capitalize(str): Converts the first letter of a string to uppercase. 
//         ■ reverse(str): Reverses the characters in a string. 
//         ■ contains(str, substr): Checks if a substring exists within a string and returns true or false.
// 2.  (app.js)
// 3.  Ensure Reusability
//     ○ Design the module functions to handle edge cases, such as empty strings or undefined inputs.
// */

// stringUtils.js 
function capitalize(str) {   //function Converts the first letter of a string to uppercase. 
    if (typeof str === 'undefined' || str === null || str === "") {
        return 'Error: There is no valid string to capitalize';
    } else {
        return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
    }
}

function reverse(str) {  //function Reverses the characters in a string. 
    if (typeof str === 'undefined' || str === null || str === "") {
        return 'Error:  There is no string to reverse.';
    } else {
        return str.toString().split('').reverse().join('');
    }
}

function contains(str, substr) {  //function Checks if a substring exists within a string and returns true or false
    if (typeof str === 'undefined' || str === null || str === "") {
        return 'Error: str is undefined or empty';
    }else if (typeof substr === 'undefined' || str === null || str === "") {
        return 'Error: substr is undefined or empty';
    }else if (str.toString().includes(substr.toString())) {
        return true;
    } else {
        return false;
    }
}

module.exports = { capitalize, reverse, contains }  // exports functions

// let str = "testing 123";
// let substr = "123";
// let str = 983;
// let substr = 3;
// let str = "home sweet home";
// let substr = "home";
// let str = "";
// let substr = "";

// console.log(capitalize(str));
// console.log(reverse(str));
// console.log(contains(str, substr));
// console.log(contains(str, "put"));