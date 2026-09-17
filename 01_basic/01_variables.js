const accountId = 123456
let accountEmail = "khushis@gmail.com"
var accountPassword = "Pass@2801"

accountCity = "Lucknow" //we can assign like this; though it's a bad practice, here we are assigning a value to an undeclared variable.
// accountId = 287301 //not allowed with const keyword - can't change constant value

let accountState; //this gives undefined, var accountState; also also gives undefined.

//const accountState; //throws error, must be initialized (given a value) at the exact moment they are declared.

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "ks28@gmail.com"
accountPassword = "Pass@2828"
accountCity = "Banaras"

//to prevent hassle of printing values repeatedly, use console.table([]) command
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
