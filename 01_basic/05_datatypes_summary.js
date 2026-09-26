//In javascript data is categorized into 2 types - primitive & non-primitive based on how the data is being stored in memory and how it is accessed from memory

//Primitive
/* All primitive types are passed by value.
 Whenever you copy a primitive value, a copy of the value is given,
 not the original variable's memory reference.
 Therefore, any changes made to the copy do not affect the original value. /*

 // 7 categories : String, Number, Boolean, 
 // null (means empty/totally blank, not 0, not empty string), 
 // undefined (you have declared a variable & a memory space but not initialized or not decided what to put in it), 
 // Symbol -> to make any value unique, mostly used in advanced JS, where we need unique values/identifiers, 
 // like for different components,buttons, or properties, and wrap the value inside Symbol().
//BigInt -> mostly all values are covered under Number datatype, but there are some very large numbers,
// which are beyond the normal Number limit, and also used for scientific values



//**Interview Question** 
//Is JavaScript a dynamically typed language OR static type? 
//Ans -> It is dynamically typed lang. because we don't need to define the datatype of a variable.
// The datatype is decided automatically at runtime,
//and the same variable can hold different types of values.

/* E.g.
let x = 10;       // Number
x = "hello";      // String
x = true;         // Boolean  */

//Non - primitive OR Reference type
//datatypes whose values are stored in memory, and the variable holds the reference/address to that value.
//Categories: Array, Objects, Functions

//const store = 100  // Number
//const scoreValue = 100.3 -> there are no such variations like float or int, this is just a decimal value
//const isLoggedIn = false //boolean
//const outsideTemp = null //empty, no value, 0 not stored as value
//let userEmail;    //undefined 
//can also write it like: let userEmail = undefined; //variable declared but no value intialiazed in it

const id = Symbol('123')        //this creates a unique value, even if same description
const anotherId = Symbol('123')  //this creates another unique value, even if same description
console.log(id === anotherId); //false -> both have unique keys/identifiers

//const bigNumber = 3445678363638386282858n   //just write 'N' or 'n' in last of value to represent it as BigInt

//Array 
const heros = ["shaktiman", "nagraj", "doga"];

//Objects -> datatype can be string, number, boolean, function, array, can also be another object
let myObj = {
    name: "Khushi",
    age: 23,
}


//Function 
// In JavaScript, functions can be treated like variables because they can be stored, 
// assigned, passed as arguments, and returned from other functions.

//definition of a function
// function(){}

//E.g. const myFunc = function(){
// console.log("Hello Khushi !");
// }

//how to find a datatype of a value -> using typeof() function
// e.g. console.log(typeof bigNumber)   // gives -> undefined

console.log(typeof outsideTemp);  //gives -> object
console.log(typeof scoreValue);   //gives -> Number
console.log(typeof myFunc);  //gives -> function
console.log(typeof heros);  //gives -> object


//TAKEAWAYS -> typeof Operator **(ASKED IN INTERVIEWS SOMETIMES)**
/* Undefined -  "undefined" 
Null - "object"
Boolean - "boolean"
Number - "number"
String - "string"    
Function - gives "function", also known as 'function object (function that is also an object)'   
Symbol - "symbol"     */

