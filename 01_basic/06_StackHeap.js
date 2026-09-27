//There are two types of memory: Stack and Heap
//In primitive type -> everywhere stack memory is used
//In non-primitive type -> everywhere heap memory is used

//whenever Stack memory is used -> you get a copy of original value
//whenever Heap memory is used -> you get a reference of original value


//Using Stack Memory
//actual value is stored in the stack. When passed to a function, 
// a copy of the value is created → changing it doesn't affect the original.

//E.g. let myName = "khushisingh"
/* let anothername = myName
anothername = "chaiaurcode"

console.log(myName);   // gives -> khushisingh
console.log(anothername);   // gives -> chaiaurcode


// Using Heap Memory
The object is stored in the heap, while its reference is stored in the stack. 
When passed to a function, the reference value is copied → both references point to the same heap object, 
so its properties can be modified.

//creating an object 'userOne'
let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
}

//creating another object 'userTwo'
let userTwo = userOne    // changes 


//we use . (dot) notation to access objects
userTwo.email = "khushi@google.com"
console.log(userOne.email);  // khushi@google.com
console.log(userTwo.email);  // khushi@google.com
*/