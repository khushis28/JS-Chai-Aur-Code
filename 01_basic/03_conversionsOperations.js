//sometimes backend person doesn't gets what value can be inside a variable with number in it, so he/she must check with 'typeof' command, to avoid the mistake
//here 'score' variable is stored in different datatypes
// let score = 99 //this is stored in number type
// let score = "89" //this is stored in string type
// let score = "100abc" //this value contains alphanumeric value
// console.log(typeof score); //one method
// console.log(typeof(score)); //another method


//converting datatype of a value to another datatype
// let valueInNumber = Number(score)   //here 'Number' will start with 'N' as it is converting, it will convert "100abc" (string) to number type
// console.log(typeof valueInNumber); //it will give 'number' as datatype, but 'NaN' as actual value stored inside valueInNumber
// console.log(valueInNumber); //NaN -> output, 'NaN' is also a special type to check if value has returned it using typeof command

//For 'null'
// let score = null
// let valueInNumber = Number(score)  
// console.log(typeof valueInNumber); //gives 'number' type because we converted 'null' to number datatype
// console.log(valueInNumber); //gives '0', as it has no value in it, empty so 0

//For 'undefined'
// let score = undefined
// let valueInNumber = Number(score)  
// console.log(typeof valueInNumber); //gives 'number' type because we converted 'undefined' to number datatype
// console.log(valueInNumber); //gives 'NaN', as it has no value assigned, also converted to number and number is not present so NaN.


//For 'NaN'
// let score = NaN
// let valueInNumber = Number(score)  
// console.log(typeof valueInNumber); //gives 'number' type because we converted 'true' (boolean value) to number datatype
// console.log(valueInNumber); //gives 'NaN', as it is not a valid number, also converted to number type and stored number is not valid so NaN.


//For "khushi" -> string which cannot be converted to number
// let score = "khushi"
// let valueInNumber = Number(score)  
// console.log(typeof valueInNumber); //gives 'number' type because we converted 'string' to number datatype
// console.log(valueInNumber); //gives 'NaN', as it is not a valid number, also converted to number type and stored number is not valid so NaN.

//Takeaways when converted to number type
//"33" -> 33
//"33abc" -> NaN, but type is 'number'
// true -> 1; false -> 0


//more conversions
//For '2' instead of 0 and 1
// let isLoggedIn = 2

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);   //gives 'boolean' as datatype after converting it 
// console.log(booleanIsLoggedIn); //gives 'true' as output, because all non-zero numbers are true, and only 0 is false


//For ""
// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);   //gives 'boolean' as datatype after converting it 
// console.log(booleanIsLoggedIn); //gives 'false' as output, because all non-zero numbers are true,  0 and "" are false

//takeaways when converted to boolean type
//1 -> true, 0 -> false, "" -> false
//"khushi" -> true, because non zero value (when converted to boolean type)



let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
