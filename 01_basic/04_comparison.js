//this will give result in boolean: true OR false
// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log( 2 == 1);
// console.log(2 != 1); 


//In '>' comparisons, if one side is a Number and the other is a String, the String is converted to a Number
console.log("2" > 1);
console.log("02" > 1);


//WE AVOID SUCH COMPARISONS BELOW, to maintain clean code:

// false → In relational comparison, null converts to 0.
// 0 > 0 is false.
console.log(null > 0);


// false → == has a special rule for null; it is only loosely equal to undefined, not 0, false or " ".
// null is NOT equal to 0.
console.log(null == 0);


// true → In relational comparison, null converts to 0.
// 0 >= 0 is true.
console.log(null >= 0);


// false → undefined is only loosely equal to null, not to 0, false or " ".
console.log(undefined == 0);


// false → undefined converts to NaN in numeric comparison.
// Any comparison with NaN is false.
console.log(undefined > 0);


// false → undefined converts to NaN.
// NaN < 0 is false.
console.log(undefined < 0);


//TAKEAWAYS 
/*null       → 0       (relational operators)
undefined  → NaN     (numeric comparison)

null == undefined → true
null == 0         → false
undefined == 0    → false*/


// === (strict check -> strictly checks value and its datatype)